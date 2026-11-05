
"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    ChevronLeft,
    ChevronRight,
    Heart,
    Star,
    MapPin,
    CalendarDays,
    ArrowRight,
} from "lucide-react";

interface TourPackage {
    id: string;
    title: string;
    image: string;
    location: string;
    duration: string;
    price: number;
    badge?: string;
    rating?: number;
}

const tourPackages: TourPackage[] = [
    {
        id: "1",
        title: "Kashmir Paradise Tour",
        image:
            "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1200",
        location: "Srinagar, Kashmir",
        duration: "5 Nights / 6 Days",
        price: 12999,
        badge: "Bestseller",
        rating: 4.9,
    },
    {
        id: "2",
        title: "Darjeeling Mountain Escape",
        image:
            "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200",
        location: "Darjeeling, West Bengal",
        duration: "3 Nights / 4 Days",
        price: 6999,
        badge: "Popular",
        rating: 4.8,
    },
    {
        id: "3",
        title: "Sikkim Himalayan Adventure",
        image:
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200",
        location: "Gangtok, Sikkim",
        duration: "4 Nights / 5 Days",
        price: 8999,
        badge: "Adventure",
        rating: 4.9,
    },
    {
        id: "4",
        title: "Meghalaya Nature Explorer",
        image:
            "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1200",
        location: "Shillong, Meghalaya",
        duration: "4 Nights / 5 Days",
        price: 9499,
        badge: "Nature Escape",
        rating: 4.8,
    },
    {
        id: "5",
        title: "Himachal Valley Retreat",
        image:
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200",
        location: "Manali, Himachal Pradesh",
        duration: "5 Nights / 6 Days",
        price: 10999,
        badge: "Featured",
        rating: 4.9,
    },
    {
        id: "6",
        title: "Kerala Backwater Holiday",
        image:
            "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200",
        location: "Alleppey, Kerala",
        duration: "3 Nights / 4 Days",
        price: 7999,
        badge: "Relaxation",
        rating: 4.8,
    },
];

function PackageCard({
    item,
    isFavorite,
    onFavorite,
}: {
    item: TourPackage;
    isFavorite: boolean;
    onFavorite: () => void;
}) {
    return (
        <article className="group w-[280px] flex-none overflow-hidden rounded-2xl border border-orange-100/70 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-100/60 sm:w-[310px]">

            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden bg-orange-50">
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 280px, 310px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                {/* Badge */}
                {item.badge && (
                    <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[#F5820B] shadow-sm">
                        {item.badge}
                    </span>
                )}

                {/* Favorite */}
                <button
                    type="button"
                    onClick={onFavorite}
                    aria-label={
                        isFavorite ? "Remove from favorites" : "Add to favorites"
                    }
                    aria-pressed={isFavorite}
                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-sm backdrop-blur transition hover:scale-110 hover:text-red-500"
                >
                    <Heart
                        size={19}
                        className={isFavorite ? "fill-red-500 text-red-500" : ""}
                    />
                </button>

                {/* Rating */}
                {item.rating && (
                    <div className="absolute bottom-4 left-4 flex items-center gap-1 rounded-full bg-white/95 px-3 py-1.5 text-sm font-semibold text-gray-800">
                        <Star
                            size={14}
                            className="fill-yellow-400 text-yellow-400"
                        />
                        {item.rating.toFixed(1)}
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-5">

                {/* Location */}
                <div className="flex items-center gap-1.5 text-sm text-gray-500">
                    <MapPin size={15} className="text-[#F5820B]" />
                    <span>{item.location}</span>
                </div>

                {/* Title */}
                <h3 className="mt-3 min-h-[52px] text-lg font-bold leading-6 text-[#333333] transition-colors group-hover:text-[#F5820B]">
                    {item.title}
                </h3>

                {/* Duration */}
                <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                    <CalendarDays size={16} className="text-[#F5820B]" />
                    {item.duration}
                </div>

                <div className="my-4 border-t border-orange-100" />

                {/* Price and CTA */}
                <div className="flex items-center justify-between gap-2">
                    <div>
                        <p className="text-xs text-gray-400">
                            Starting from
                        </p>
                        <p className="mt-1 text-xl font-bold text-[#F5820B]">
                            ₹{item.price.toLocaleString("en-IN")}
                            <span className="text-xs font-normal text-gray-500">
                                {" "} / person
                            </span>
                        </p>
                    </div>

                    <Link
                        href="/destinations"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5820B] text-white transition-all hover:scale-105 hover:bg-[#E66B00]"
                        aria-label={`View ${item.title}`}
                    >
                        <ArrowRight size={19} />
                    </Link>
                </div>
            </div>
        </article>
    );
}

export default function CarouselCards() {
    const scrollContainer = useRef<HTMLDivElement>(null);
    const [favorites, setFavorites] = useState<string[]>([]);

    const scroll = (direction: "left" | "right") => {
        if (!scrollContainer.current) return;

        scrollContainer.current.scrollBy({
            left: direction === "right" ? 340 : -340,
            behavior: "smooth",
        });
    };

    const toggleFavorite = (id: string) => {
        setFavorites((previous) =>
            previous.includes(id)
                ? previous.filter((item) => item !== id)
                : [...previous, id]
        );
    };

    return (
        <section className="relative overflow-hidden bg-[#FFFAF5] py-20 md:py-28">

            {/* Background Glow */}
            <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-orange-100/50 blur-3xl" />

            <div className="relative mx-auto max-w-[1280px] px-6">

                {/* Section Heading */}
                <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">

                    <div className="max-w-2xl">
                        <span className="text-sm font-bold tracking-[0.2em] text-[#F5820B]">
                            EXPLORE OUR PACKAGES
                        </span>

                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#333333] md:text-5xl">
                            Featured Tour{" "}
                            <span className="text-[#F5820B]">
                                Packages
                            </span>
                        </h2>

                        <p className="mt-5 max-w-xl text-base leading-8 text-[#777777] md:text-lg">
                            Discover handpicked destinations and unforgettable
                            travel experiences. Your next adventure starts here.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            onClick={() => scroll("left")}
                            aria-label="Previous packages"
                            className="flex h-12 w-12 items-center justify-center rounded-full border border-orange-200 bg-white text-[#F5820B] transition hover:border-[#F5820B] hover:bg-[#F5820B] hover:text-white"
                        >
                            <ChevronLeft size={22} />
                        </button>

                        <button
                            type="button"
                            onClick={() => scroll("right")}
                            aria-label="Next packages"
                            className="flex h-12 w-12 items-center justify-center rounded-full border border-orange-200 bg-white text-[#F5820B] transition hover:border-[#F5820B] hover:bg-[#F5820B] hover:text-white"
                        >
                            <ChevronRight size={22} />
                        </button>

                        <Link
                            href="/destinations"
                            className="ml-2 hidden items-center gap-2 text-sm font-bold text-[#F5820B] transition hover:gap-3 sm:flex"
                        >
                            View All Packages
                            <ArrowRight size={17} />
                        </Link>
                    </div>
                </div>

                {/* Package Carousel */}
                <div
                    ref={scrollContainer}
                    className="scrollbar-hide -mx-2 flex snap-x snap-mandatory gap-5 overflow-x-auto px-2 pb-6 pt-2"
                    style={{
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                    }}
                >
                    {tourPackages.map((item) => (
                        <div
                            key={item.id}
                            className="snap-start"
                        >
                            <PackageCard
                                item={item}
                                isFavorite={favorites.includes(item.id)}
                                onFavorite={() => toggleFavorite(item.id)}
                            />
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-8 flex justify-center sm:hidden">
                    <Link
                        href="/destinations"
                        className="inline-flex items-center gap-2 rounded-full bg-[#F5820B] px-7 py-3.5 font-semibold text-white transition hover:bg-[#E66B00]"
                    >
                        View All Packages
                        <ArrowRight size={18} />
                    </Link>
                </div>

            </div>
        </section>
    );
}
