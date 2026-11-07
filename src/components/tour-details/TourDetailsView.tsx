"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  CalendarDays,
  Clock,
  Users,
  ShieldCheck,
  Star,
  CheckCircle2,
  XCircle,
  ChevronDown,
  ChevronUp,
  Share2,
  Heart,
  PhoneCall,
  Sparkles,
  ArrowRight,
  Utensils,
  Hotel,
  Compass,
  Check,
  X,
  MessageCircle,
} from "lucide-react";
import { TourPackage } from "@/data/tours";
import NavigationBar from "@/components/NavigationBar";

interface TourDetailsViewProps {
  tour: TourPackage;
  relatedTours: TourPackage[];
}

export default function TourDetailsView({
  tour,
  relatedTours,
}: TourDetailsViewProps) {
  // Booking State
  const [adults, setAdults] = useState<number>(2);
  const [childrenCount, setChildrenCount] = useState<number>(0);
  const [selectedDate, setSelectedDate] = useState<string>("2026-04-15");
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [copiedShare, setCopiedShare] = useState<boolean>(false);
  const [bookingSuccessModal, setBookingSuccessModal] = useState<boolean>(false);
  const [bookingReference, setBookingReference] = useState<string>("");

  // Gallery & Accordion State
  const [activePhotoModal, setActivePhotoModal] = useState<boolean>(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);
  const [expandedDays, setExpandedDays] = useState<number[]>([1, 2]);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  // Calculated Pricing
  const childPrice = Math.round(tour.price * 0.6);
  const totalAmount = adults * tour.price + childrenCount * childPrice;

  // Handlers
  const toggleDay = (day: number) => {
    if (expandedDays.includes(day)) {
      setExpandedDays(expandedDays.filter((d) => d !== day));
    } else {
      setExpandedDays([...expandedDays, day]);
    }
  };

  const toggleAllDays = () => {
    if (expandedDays.length === tour.itinerary.length) {
      setExpandedDays([]);
    } else {
      setExpandedDays(tour.itinerary.map((item) => item.day));
    }
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2500);
    }
  };

  const handleBookNow = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = "SY-" + Math.floor(100000 + Math.random() * 900000);
    setBookingReference(ref);
    setBookingSuccessModal(true);
  };

  const departureOptions = [
    { label: "15 April 2026 (Upcoming)", value: "2026-04-15" },
    { label: "01 May 2026 (Weekend Special)", value: "2026-05-01" },
    { label: "20 May 2026", value: "2026-05-20" },
    { label: "10 June 2026 (Summer Special)", value: "2026-06-10" },
    { label: "05 October 2026 (Festive Holiday)", value: "2026-10-05" },
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#333333]">
      {/* Sticky Header */}
      <NavigationBar variant="solid" currentPath="/packages" />

      {/* Main Container */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-500"
        >
          <Link href="/" className="transition hover:text-[#F5820B]">
            Home
          </Link>
          <span>/</span>
          <Link href="/packages" className="transition hover:text-[#F5820B]">
            Packages
          </Link>
          <span>/</span>
          <span className="font-semibold text-gray-800">{tour.title}</span>
        </nav>

        {/* Tour Title & Action Header */}
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-3.5 py-1 text-xs font-bold text-[#F5820B]">
                <Sparkles size={13} />
                {tour.badge || "Featured Tour"}
              </span>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-gray-700">
                <MapPin size={15} className="text-[#F5820B]" />
                {tour.location}
              </span>
              <span className="text-gray-300">•</span>
              <span className="text-sm text-gray-500">{tour.stateCountry}</span>
            </div>

            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {tour.title}
            </h1>

            <p className="mt-2 text-lg text-gray-600 italic font-serif">
              "{tour.tagline}"
            </p>
          </div>

          {/* Social Share & Favorite Action Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-[#F5820B] hover:text-[#F5820B]"
            >
              <Share2 size={16} />
              {copiedShare ? "Link Copied!" : "Share"}
            </button>

            <button
              type="button"
              onClick={() => setIsFavorite(!isFavorite)}
              aria-label="Save to wishlist"
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition ${
                isFavorite
                  ? "border-red-200 bg-red-50 text-red-500"
                  : "border-gray-200 bg-white text-gray-700 hover:border-red-200 hover:text-red-500"
              }`}
            >
              <Heart
                size={16}
                className={isFavorite ? "fill-red-500 text-red-500" : ""}
              />
              {isFavorite ? "Saved" : "Save"}
            </button>
          </div>
        </div>

        {/* Photo Gallery Grid */}
        <section aria-label="Photo Gallery" className="mb-12">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-2 md:h-[480px]">
            {/* Primary Large Image */}
            <div
              onClick={() => {
                setActivePhotoIndex(0);
                setActivePhotoModal(true);
              }}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-orange-100 sm:col-span-2 sm:row-span-2"
            >
              <Image
                src={tour.image}
                alt={tour.title}
                fill
                unoptimized
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>

            {/* Thumbnail Grid */}
            {tour.gallery.slice(1, 5).map((imgUrl, idx) => {
              const isLast = idx === 3;
              return (
                <div
                  key={idx}
                  onClick={() => {
                    setActivePhotoIndex(idx + 1);
                    setActivePhotoModal(true);
                  }}
                  className="group relative h-48 cursor-pointer overflow-hidden rounded-2xl bg-orange-50 md:h-full"
                >
                  <Image
                    src={imgUrl}
                    alt={`${tour.title} photo ${idx + 2}`}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {isLast ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 font-semibold text-white backdrop-blur-[2px] transition hover:bg-black/70">
                      <span>View All {tour.gallery.length} Photos</span>
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100" />
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Quick Meta Highlights Bar */}
        <div className="mb-12 grid grid-cols-2 gap-4 rounded-2xl border border-orange-100 bg-white p-5 shadow-sm sm:grid-cols-3 lg:grid-cols-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-[#F5820B]">
              <Clock size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Duration</p>
              <p className="text-sm font-bold text-gray-900">{tour.duration}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-[#F5820B]">
              <Users size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Group Size</p>
              <p className="text-sm font-bold text-gray-900">{tour.groupSize}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-[#F5820B]">
              <Compass size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Tour Type</p>
              <p className="text-sm font-bold text-gray-900">{tour.tourType}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-[#F5820B]">
              <ShieldCheck size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Difficulty</p>
              <p className="text-sm font-bold text-gray-900">{tour.difficulty}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-[#F5820B]">
              <Star size={20} className="fill-yellow-400 text-yellow-400" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Rating</p>
              <p className="text-sm font-bold text-gray-900">
                {tour.rating} ({tour.reviewsCount})
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-[#F5820B]">
              <CalendarDays size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Best Season</p>
              <p className="text-sm font-bold text-gray-900 truncate">
                {tour.bestSeason}
              </p>
            </div>
          </div>
        </div>

        {/* Content & Sidebar Layout */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Main Content (2 Columns) */}
          <div className="space-y-12 lg:col-span-2">
            {/* Overview */}
            <section className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold text-slate-900">
                About This Experience
              </h2>
              <div className="mt-4 leading-relaxed text-gray-700 space-y-4">
                <p>{tour.overview}</p>
              </div>

              {/* Languages */}
              <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-orange-50 pt-4 text-sm text-gray-600">
                <span className="font-semibold text-gray-800">
                  Languages Guided:
                </span>
                {tour.languages.map((lang) => (
                  <span
                    key={lang}
                    className="rounded-md bg-orange-50 px-2.5 py-1 text-xs font-medium text-[#F5820B]"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </section>

            {/* Tour Highlights */}
            <section className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold text-slate-900">
                Trip Highlights
              </h2>
              <ul className="mt-6 space-y-3.5">
                {tour.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[#F5820B]">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <span className="text-base text-gray-700 leading-relaxed">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Day-by-Day Detailed Itinerary */}
            <section className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm md:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Day-by-Day Itinerary
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    {tour.durationDays} Days / {tour.durationNights} Nights Detailed Schedule
                  </p>
                </div>
                <button
                  type="button"
                  onClick={toggleAllDays}
                  className="text-sm font-bold text-[#F5820B] hover:underline"
                >
                  {expandedDays.length === tour.itinerary.length
                    ? "Collapse All"
                    : "Expand All"}
                </button>
              </div>

              <div className="mt-8 relative border-l-2 border-orange-200 ml-4 space-y-8 pl-6">
                {tour.itinerary.map((item) => {
                  const isOpen = expandedDays.includes(item.day);
                  return (
                    <div key={item.day} className="relative group">
                      {/* Timeline dot */}
                      <span className="absolute -left-[33px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#F5820B] text-xs font-bold text-white shadow-sm ring-4 ring-white">
                        {item.day}
                      </span>

                      {/* Header */}
                      <button
                        type="button"
                        onClick={() => toggleDay(item.day)}
                        className="flex w-full items-start justify-between text-left focus:outline-none"
                      >
                        <div className="pr-4">
                          <span className="text-xs font-bold tracking-wider uppercase text-[#F5820B]">
                            Day {item.day}
                          </span>
                          <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#F5820B] transition-colors">
                            {item.title}
                          </h3>
                        </div>
                        <span className="mt-1 rounded-full p-1 text-gray-400 hover:text-gray-700">
                          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </span>
                      </button>

                      {/* Details */}
                      {isOpen && (
                        <div className="mt-3 text-gray-600 leading-relaxed space-y-3">
                          <p>{item.description}</p>

                          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-gray-600 pt-1">
                            {item.meals && (
                              <span className="inline-flex items-center gap-1.5 rounded-lg bg-orange-50 px-2.5 py-1 text-orange-800">
                                <Utensils size={13} className="text-[#F5820B]" />
                                {item.meals}
                              </span>
                            )}
                            {item.stay && (
                              <span className="inline-flex items-center gap-1.5 rounded-lg bg-blue-50 px-2.5 py-1 text-blue-800">
                                <Hotel size={13} className="text-blue-600" />
                                {item.stay}
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Inclusions and Exclusions */}
            <section className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold text-slate-900">
                What's Included & Excluded
              </h2>

              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Included */}
                <div className="rounded-xl border border-emerald-100 bg-emerald-50/40 p-5">
                  <h3 className="flex items-center gap-2 text-base font-bold text-emerald-800">
                    <CheckCircle2 size={18} className="text-emerald-600" />
                    Package Includes
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {tour.included.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <Check size={15} className="mt-0.5 shrink-0 text-emerald-600 font-bold" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Excluded */}
                <div className="rounded-xl border border-rose-100 bg-rose-50/40 p-5">
                  <h3 className="flex items-center gap-2 text-base font-bold text-rose-800">
                    <XCircle size={18} className="text-rose-600" />
                    Package Excludes
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {tour.excluded.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <X size={15} className="mt-0.5 shrink-0 text-rose-500 font-bold" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* FAQs */}
            <section className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold text-slate-900">
                Frequently Asked Questions
              </h2>
              <div className="mt-6 space-y-3">
                {tour.faqs.map((faq, idx) => {
                  const isExpanded = expandedFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-xl border border-gray-100 overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                        className="flex w-full items-center justify-between p-4 text-left font-semibold text-slate-900 hover:bg-orange-50/50 transition"
                      >
                        <span>{faq.question}</span>
                        {isExpanded ? (
                          <ChevronUp size={18} className="text-[#F5820B] shrink-0" />
                        ) : (
                          <ChevronDown size={18} className="text-gray-400 shrink-0" />
                        )}
                      </button>
                      {isExpanded && (
                        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-3">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Customer Reviews */}
            <section className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Traveller Reviews
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    Verified guest reviews from recent tours
                  </p>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-orange-50 px-4 py-2 border border-orange-100">
                  <Star size={20} className="fill-yellow-400 text-yellow-400" />
                  <span className="text-xl font-bold text-slate-900">
                    {tour.rating.toFixed(1)}
                  </span>
                  <span className="text-xs text-gray-500">
                    ({tour.reviewsCount} reviews)
                  </span>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {tour.reviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="rounded-xl border border-orange-50 bg-[#FFFAF5]/50 p-5"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full border border-orange-200">
                          <Image
                            src={rev.avatar}
                            alt={rev.author}
                            fill
                            unoptimized
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-bold text-slate-900 text-sm">
                            {rev.author}
                          </p>
                          <p className="text-xs text-gray-500">
                            {rev.location || "Traveller"} • {rev.date}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: rev.rating }).map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-gray-700 leading-relaxed italic">
                      "{rev.comment}"
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sticky Booking Sidebar (Right Column) */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              {/* Primary Booking Card */}
              <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-xl shadow-orange-500/5">
                <div className="flex items-baseline justify-between border-b border-orange-100 pb-4">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Starting from
                    </span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-3xl font-extrabold text-[#F5820B]">
                        ₹{tour.price.toLocaleString("en-IN")}
                      </span>
                      <span className="text-sm text-gray-400 line-through">
                        ₹{tour.originalPrice.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">per person (twin sharing)</span>
                  </div>

                  {tour.discount && (
                    <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-extrabold text-[#F5820B]">
                      {tour.discount}
                    </span>
                  )}
                </div>

                {/* Booking Form */}
                <form onSubmit={handleBookNow} className="mt-5 space-y-4">
                  {/* Select Departure Date */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                      Select Departure Date
                    </label>
                    <select
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-3.5 py-3 text-sm font-semibold text-gray-800 transition focus:border-[#F5820B] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#F5820B]"
                    >
                      {departureOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Adults Counter */}
                  <div className="rounded-xl border border-gray-200 p-3 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-gray-800">Adults (12+ yrs)</p>
                      <p className="text-xs text-gray-500">₹{tour.price.toLocaleString("en-IN")} / person</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                        disabled={adults <= 1}
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:border-[#F5820B] hover:text-[#F5820B] disabled:opacity-40"
                      >
                        -
                      </button>
                      <span className="w-5 text-center font-bold text-gray-900">{adults}</span>
                      <button
                        type="button"
                        onClick={() => setAdults(adults + 1)}
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:border-[#F5820B] hover:text-[#F5820B]"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Children Counter */}
                  <div className="rounded-xl border border-gray-200 p-3 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-gray-800">Children (5-11 yrs)</p>
                      <p className="text-xs text-gray-500">₹{childPrice.toLocaleString("en-IN")} (40% off)</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setChildrenCount(Math.max(0, childrenCount - 1))}
                        disabled={childrenCount <= 0}
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:border-[#F5820B] hover:text-[#F5820B] disabled:opacity-40"
                      >
                        -
                      </button>
                      <span className="w-5 text-center font-bold text-gray-900">{childrenCount}</span>
                      <button
                        type="button"
                        onClick={() => setChildrenCount(childrenCount + 1)}
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:border-[#F5820B] hover:text-[#F5820B]"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Pricing Summary */}
                  <div className="rounded-xl bg-[#FFFAF5] p-4 text-sm space-y-2 border border-orange-100">
                    <div className="flex justify-between text-gray-600">
                      <span>{adults} Adults</span>
                      <span>₹{(adults * tour.price).toLocaleString("en-IN")}</span>
                    </div>
                    {childrenCount > 0 && (
                      <div className="flex justify-between text-gray-600">
                        <span>{childrenCount} Children</span>
                        <span>₹{(childrenCount * childPrice).toLocaleString("en-IN")}</span>
                      </div>
                    )}
                    <div className="border-t border-orange-200/60 pt-2 flex justify-between font-bold text-slate-900 text-base">
                      <span>Total Price</span>
                      <span className="text-[#F5820B]">₹{totalAmount.toLocaleString("en-IN")}</span>
                    </div>
                  </div>

                  {/* CTA Book Now Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#F5820B] to-[#FF8A00] py-4 text-base font-bold text-white shadow-lg shadow-orange-500/25 transition-all hover:from-[#E66B00] hover:to-[#F5820B] hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <span>Instant Booking Request</span>
                    <ArrowRight size={18} />
                  </button>
                </form>

                {/* Trust Badges */}
                <div className="mt-5 space-y-2.5 border-t border-gray-100 pt-4 text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                    <span>Free cancellation up to 7 days before departure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                    <span>100% Best Price Guarantee on authentic packages</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                    <span>Instant WhatsApp confirmation & 24/7 tour manager</span>
                  </div>
                </div>
              </div>

              {/* Talk to Expert Card */}
              <div className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-[#F5820B]">
                    <PhoneCall size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Need Customized Dates or Itinerary?
                    </h4>
                    <p className="text-xs text-gray-500">
                      Our destination specialists are available 24/7.
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-3 py-2.5 text-xs font-bold text-white transition hover:bg-emerald-700"
                  >
                    <MessageCircle size={14} />
                    WhatsApp
                  </a>
                  <a
                    href="tel:+919876543210"
                    className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-xs font-bold text-gray-700 transition hover:border-[#F5820B] hover:text-[#F5820B]"
                  >
                    <PhoneCall size={14} />
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Tours Section */}
        {relatedTours.length > 0 && (
          <section className="mt-20 border-t border-orange-100 pt-16">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-[#F5820B]">
                  MORE DESTINATIONS
                </span>
                <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                  You Might Also Like
                </h2>
              </div>
              <Link
                href="/packages"
                className="hidden sm:inline-flex items-center gap-1.5 text-sm font-bold text-[#F5820B] hover:underline"
              >
                View All Packages <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedTours.map((item) => (
                <article
                  key={item.id}
                  className="group overflow-hidden rounded-2xl border border-orange-100/70 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-orange-50">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-bold text-[#F5820B] shadow">
                      {item.badge || item.tourType}
                    </span>
                    <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-bold text-gray-800">
                      <Star size={13} className="fill-yellow-400 text-yellow-400" />
                      {item.rating.toFixed(1)}
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <MapPin size={13} className="text-[#F5820B]" />
                      <span>{item.location}</span>
                    </div>

                    <h3 className="mt-2 text-base font-bold text-slate-900 group-hover:text-[#F5820B] transition-colors line-clamp-1">
                      {item.title}
                    </h3>

                    <div className="mt-2 flex items-center gap-1 text-xs text-gray-500">
                      <CalendarDays size={13} className="text-[#F5820B]" />
                      <span>{item.duration}</span>
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-orange-50 pt-4">
                      <div>
                        <span className="text-xs text-gray-400">From</span>
                        <p className="text-lg font-bold text-[#F5820B]">
                          ₹{item.price.toLocaleString("en-IN")}
                        </p>
                      </div>

                      <Link
                        href={`/packages/${item.id}`}
                        className="rounded-full bg-[#F5820B] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#E66B00]"
                      >
                        Explore Tour
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Lightbox Photo Modal */}
      {activePhotoModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
        >
          <button
            type="button"
            onClick={() => setActivePhotoModal(false)}
            className="absolute right-6 top-6 rounded-full bg-white/20 p-2 text-white hover:bg-white/30"
          >
            <X size={24} />
          </button>

          <div className="relative max-h-[85vh] max-w-4xl w-full h-[600px] overflow-hidden rounded-2xl">
            <Image
              src={tour.gallery[activePhotoIndex] || tour.image}
              alt={`${tour.title} full view`}
              fill
              unoptimized
              className="object-contain"
            />
          </div>

          {/* Gallery Thumbnails navigation */}
          <div className="absolute bottom-6 flex gap-2 overflow-x-auto max-w-full px-4">
            {tour.gallery.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActivePhotoIndex(i)}
                className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition ${
                  activePhotoIndex === i ? "border-[#F5820B] scale-105" : "border-transparent opacity-60"
                }`}
              >
                <Image src={img} alt="Thumbnail" fill unoptimized className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Booking Confirmation Success Modal */}
      {bookingSuccessModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
        >
          <div className="w-full max-w-md rounded-3xl bg-white p-7 text-center shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <CheckCircle2 size={36} />
            </div>

            <h3 className="mt-4 text-2xl font-bold text-slate-900">
              Booking Request Confirmed!
            </h3>

            <p className="mt-2 text-sm text-gray-600">
              Thank you for planning your journey with Swapnayatra. Our tour manager will contact you within 2 hours.
            </p>

            <div className="mt-5 rounded-2xl bg-orange-50 p-4 text-left border border-orange-100 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-500">Booking Reference:</span>
                <span className="font-bold text-[#F5820B]">{bookingReference}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Package:</span>
                <span className="font-semibold text-gray-800">{tour.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Departure:</span>
                <span className="font-semibold text-gray-800">{selectedDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Travellers:</span>
                <span className="font-semibold text-gray-800">{adults} Adults, {childrenCount} Children</span>
              </div>
              <div className="flex justify-between border-t border-orange-200/60 pt-2 text-sm font-bold">
                <span className="text-gray-700">Estimated Total:</span>
                <span className="text-[#F5820B]">₹{totalAmount.toLocaleString("en-IN")}</span>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2">
              <a
                href={`https://wa.me/919876543210?text=Hello%20Swapnayatra,%20I%20have%20inquired%20about%20${encodeURIComponent(tour.title)}%20(Ref:%20${bookingReference})`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
              >
                <MessageCircle size={16} />
                Message via WhatsApp
              </a>

              <button
                type="button"
                onClick={() => setBookingSuccessModal(false)}
                className="w-full rounded-xl border border-gray-200 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
