"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  CalendarDays,
  Star,
  Search,
  ArrowRight,
  Filter,
  Sparkles,
  Wifi,
  WifiOff,
} from "lucide-react";
import { getAllTours, TourPackage } from "@/data/tours";
import { fetchTours } from "@/services/tourService";
import NavigationBar from "@/components/NavigationBar";

export default function PackagesCatalogPage() {
  const [tours, setTours] = useState<TourPackage[]>(getAllTours());
  const [isLiveServer, setIsLiveServer] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Mountains", "Nature", "Relaxation", "Adventure"];

  useEffect(() => {
    let isMounted = true;
    async function loadLiveTours() {
      try {
        const result = await fetchTours();
        if (isMounted) {
          if (result.tours && result.tours.length > 0) {
            setTours(result.tours);
          }
          setIsLiveServer(result.isLive);
        }
      } catch (_err) {
        if (isMounted) setIsLiveServer(false);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    loadLiveTours();
    return () => {
      isMounted = false;
    };
  }, []);

  const filteredTours = useMemo(() => {
    return tours.filter((tour) => {
      const matchesSearch =
        tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tour.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tour.overview.toLowerCase().includes(searchQuery.toLowerCase());

      if (!matchesSearch) return false;

      if (selectedCategory === "All") return true;
      if (selectedCategory === "Mountains") {
        return (
          tour.tourType.toLowerCase().includes("mountain") ||
          tour.tourType.toLowerCase().includes("hill") ||
          tour.tourType.toLowerCase().includes("alpine")
        );
      }
      if (selectedCategory === "Nature") {
        return (
          tour.tourType.toLowerCase().includes("nature") ||
          tour.tourType.toLowerCase().includes("waterfall")
        );
      }
      if (selectedCategory === "Relaxation") {
        return (
          tour.tourType.toLowerCase().includes("relax") ||
          tour.tourType.toLowerCase().includes("backwater")
        );
      }
      if (selectedCategory === "Adventure") {
        return (
          tour.tourType.toLowerCase().includes("adventure") ||
          tour.tourType.toLowerCase().includes("trekking")
        );
      }
      return true;
    });
  }, [tours, searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#333333]">
      <NavigationBar variant="solid" currentPath="/packages" />

      {/* Catalog Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/80 to-transparent py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#F5820B]">
              <Sparkles size={14} />
              Handcrafted Journeys
            </span>

            {isLiveServer !== null && (
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold ${
                  isLiveServer
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    : "bg-amber-50 text-amber-700 border border-amber-200"
                }`}
              >
                {isLiveServer ? (
                  <>
                    <Wifi size={12} className="text-emerald-600 animate-pulse" />
                    <span>Live Backend Connected</span>
                  </>
                ) : (
                  <>
                    <WifiOff size={12} className="text-amber-600" />
                    <span>Offline Catalog Mode</span>
                  </>
                )}
              </span>
            )}
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Explore All Tour <span className="text-[#F5820B]">Packages</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
            Find the perfect getaway with expert-curated itineraries, verified stays, and complete travel support.
          </p>

          {/* Search & Filter Bar */}
          <div className="mx-auto mt-8 max-w-3xl">
            <div className="flex flex-col gap-3 rounded-2xl bg-white p-3 shadow-lg shadow-orange-500/5 sm:flex-row sm:items-center sm:gap-2 border border-orange-100">
              <div className="relative flex-1">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Search by destination (e.g., Kashmir, Sikkim, Kerala)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl bg-transparent py-2.5 pl-11 pr-4 text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
                />
              </div>

              {/* Clear button if search active */}
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="text-xs text-gray-400 hover:text-gray-700 px-2"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Chips */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              <span className="flex items-center gap-1 text-xs font-semibold text-gray-400 mr-1">
                <Filter size={12} /> Filter:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-4 py-1.5 text-xs font-bold transition ${
                    selectedCategory === cat
                      ? "bg-[#F5820B] text-white shadow-sm"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-[#F5820B] hover:text-[#F5820B]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tour Cards Grid */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between text-sm text-gray-500">
          <span>
            Showing <strong className="text-gray-900">{filteredTours.length}</strong> {filteredTours.length === 1 ? "tour package" : "tour packages"}
          </span>
        </div>

        {filteredTours.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-12 text-center">
            <p className="text-lg font-semibold text-gray-700">No tour packages found</p>
            <p className="mt-1 text-sm text-gray-500">
              Try adjusting your search keywords or clearing your category filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-4 rounded-full bg-[#F5820B] px-5 py-2 text-xs font-bold text-white hover:bg-[#E66B00]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTours.map((tour) => (
              <article
                key={tour.id}
                className="group flex flex-col overflow-hidden rounded-3xl border border-orange-100/70 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-orange-50">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {tour.badge && (
                    <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[#F5820B] shadow-sm">
                      {tour.badge}
                    </span>
                  )}

                  <div className="absolute bottom-4 left-4 flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-gray-800">
                    <Star size={13} className="fill-yellow-400 text-yellow-400" />
                    {tour.rating.toFixed(1)} ({tour.reviewsCount})
                  </div>

                  {tour.discount && (
                    <span className="absolute right-4 top-4 rounded-full bg-[#F5820B] px-2.5 py-1 text-xs font-bold text-white shadow-sm">
                      {tour.discount}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <MapPin size={14} className="text-[#F5820B]" />
                    <span>{tour.location}</span>
                  </div>

                  <Link href={`/packages/${tour.id}`}>
                    <h2 className="mt-2.5 text-xl font-bold text-slate-900 transition-colors group-hover:text-[#F5820B]">
                      {tour.title}
                    </h2>
                  </Link>

                  <p className="mt-2 text-xs text-gray-500 line-clamp-2">
                    {tour.tagline}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-xs text-gray-600">
                    <CalendarDays size={14} className="text-[#F5820B]" />
                    <span>{tour.duration}</span>
                    <span className="text-gray-300">•</span>
                    <span>{tour.groupSize}</span>
                  </div>

                  <div className="mt-auto border-t border-orange-50 pt-5">
                    <div className="flex items-end justify-between">
                      <div>
                        <span className="text-xs text-gray-400">Starting from</span>
                        <div className="flex items-baseline gap-1.5">
                          <p className="text-2xl font-extrabold text-[#F5820B]">
                            ₹{tour.price.toLocaleString("en-IN")}
                          </p>
                          <span className="text-xs text-gray-400 line-through">
                            ₹{tour.originalPrice.toLocaleString("en-IN")}
                          </span>
                        </div>
                        <span className="text-[11px] text-gray-500">/ person</span>
                      </div>

                      <Link
                        href={`/packages/${tour.id}`}
                        className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#F5820B] to-[#FF8A00] px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-orange-500/20 transition-all hover:from-[#E66B00] hover:to-[#F5820B] hover:gap-2"
                      >
                        <span>View Details</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
