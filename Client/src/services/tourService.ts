import { TourPackage, getAllTours, getTourByIdOrSlug } from "@/data/tours";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";

export interface FetchToursQuery {
  searchTerm?: string;
  tourType?: string;
  minPrice?: number;
  maxPrice?: number;
  page?: number;
  limit?: number;
}

export interface FetchToursResult {
  tours: TourPackage[];
  meta?: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
  isLive: boolean;
}

/**
 * Fetch all tour packages from the backend API.
 * Falls back cleanly to local data if the backend server is unreachable.
 */
export async function fetchTours(
  query?: FetchToursQuery
): Promise<FetchToursResult> {
  const params = new URLSearchParams();

  if (query?.searchTerm) params.append("searchTerm", query.searchTerm);
  if (query?.tourType && query.tourType !== "All") {
    params.append("tourType", query.tourType);
  }
  if (query?.minPrice) params.append("minPrice", query.minPrice.toString());
  if (query?.maxPrice) params.append("maxPrice", query.maxPrice.toString());
  if (query?.page) params.append("page", query.page.toString());
  if (query?.limit) params.append("limit", query.limit.toString());

  const queryString = params.toString() ? `?${params.toString()}` : "";
  const url = `${API_BASE_URL}/tours${queryString}`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const res = await fetch(url, {
      signal: controller.signal,
      next: { revalidate: 30 }, // Next.js ISR cache for 30 seconds
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const json = await res.json();
      if (json.success && Array.isArray(json.data)) {
        return {
          tours: json.data,
          meta: json.meta,
          isLive: true,
        };
      }
    }
  } catch (_err) {
    // Backend offline or unreachable — fallback seamlessly
  }

  // Local fallback filtering
  let localTours = getAllTours();

  if (query?.searchTerm) {
    const term = query.searchTerm.toLowerCase().trim();
    localTours = localTours.filter(
      (t) =>
        t.title.toLowerCase().includes(term) ||
        t.location.toLowerCase().includes(term) ||
        t.overview.toLowerCase().includes(term)
    );
  }

  if (query?.tourType && query.tourType !== "All") {
    const cat = query.tourType.toLowerCase();
    localTours = localTours.filter((t) =>
      t.tourType.toLowerCase().includes(cat)
    );
  }

  return {
    tours: localTours,
    meta: {
      page: 1,
      limit: localTours.length,
      total: localTours.length,
      totalPage: 1,
    },
    isLive: false,
  };
}

/**
 * Fetch a single tour package by its ID or slug.
 * Checks backend API first, falling back to local dataset.
 */
export async function fetchTourByIdOrSlug(
  idOrSlug: string
): Promise<TourPackage | null> {
  const url = `${API_BASE_URL}/tours/${encodeURIComponent(idOrSlug)}`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const res = await fetch(url, {
      signal: controller.signal,
      next: { revalidate: 30 },
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const json = await res.json();
      if (json.success && json.data) {
        return json.data as TourPackage;
      }
    }
  } catch (_err) {
    // Backend offline or timeout
  }

  // Graceful local fallback
  const fallback = getTourByIdOrSlug(idOrSlug);
  return fallback || null;
}

/**
 * Fetch featured tour packages for homepage highlights and carousels.
 */
export async function fetchFeaturedTours(): Promise<TourPackage[]> {
  const url = `${API_BASE_URL}/tours/featured`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const res = await fetch(url, {
      signal: controller.signal,
      next: { revalidate: 30 },
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const json = await res.json();
      if (json.success && Array.isArray(json.data) && json.data.length > 0) {
        return json.data as TourPackage[];
      }
    }
  } catch (_err) {
    // Backend offline
  }

  // Fallback to top rated local tours
  return getAllTours().slice(0, 6);
}

/**
 * Health check ping to verify backend connectivity.
 */
export async function checkBackendHealth(): Promise<{
  connected: boolean;
  status?: string;
  uptime?: number;
  timestamp?: string;
}> {
  const rootUrl = API_BASE_URL.replace(/\/api\/v1\/?$/, "");
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);

    const res = await fetch(`${rootUrl}/health`, {
      signal: controller.signal,
      cache: "no-store",
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const json = await res.json();
      return {
        connected: true,
        status: json.status,
        uptime: json.uptime,
        timestamp: json.timestamp,
      };
    }
  } catch (_err) {
    // Server down
  }

  return { connected: false };
}
