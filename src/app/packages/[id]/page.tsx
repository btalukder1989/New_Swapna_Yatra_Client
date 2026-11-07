import { Metadata } from "next";
import Link from "next/link";
import { fetchTourByIdOrSlug, fetchTours } from "@/services/tourService";
import { getRelatedTours } from "@/data/tours";
import TourDetailsView from "@/components/tour-details/TourDetailsView";
import NavigationBar from "@/components/NavigationBar";
import { Compass, ArrowLeft } from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const { tours } = await fetchTours();
  return tours.flatMap((tour) => [
    { id: tour.id },
    { id: tour.slug },
  ]);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const tour = await fetchTourByIdOrSlug(id);

  if (!tour) {
    return {
      title: "Tour Package Not Found - Swapnayatra",
    };
  }

  return {
    title: `${tour.title} - Swapnayatra`,
    description: tour.tagline || tour.overview.slice(0, 160),
    openGraph: {
      title: `${tour.title} - Swapnayatra`,
      description: tour.tagline,
      images: [{ url: tour.image }],
    },
  };
}

export default async function PackageDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const tour = await fetchTourByIdOrSlug(id);

  if (!tour) {
    return (
      <div className="min-h-screen bg-[#FDFBF7]">
        <NavigationBar variant="solid" currentPath="/packages" />
        <div className="mx-auto max-w-2xl px-6 py-24 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 text-[#F5820B]">
            <Compass size={40} />
          </div>
          <h1 className="mt-6 text-3xl font-extrabold text-slate-900">
            Tour Package Not Found
          </h1>
          <p className="mt-3 text-base text-gray-600">
            We couldn't find the tour package you are looking for. It may have been updated or moved.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 rounded-full bg-[#F5820B] px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-[#E66B00]"
            >
              <ArrowLeft size={18} />
              Browse All Packages
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Get related tours (try from live catalog, fall back to data/tours)
  const { tours: allTours } = await fetchTours();
  const liveRelated = allTours
    .filter((t) => t.id !== tour.id && t.slug !== tour.slug)
    .slice(0, 3);
  const relatedTours = liveRelated.length > 0 ? liveRelated : getRelatedTours(tour.id, 3);

  return <TourDetailsView tour={tour} relatedTours={relatedTours} />;
}
