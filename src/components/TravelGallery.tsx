
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Camera } from "lucide-react";

const gallery = [
    {
        id: 1,
        title: "Mountain Adventures",
        location: "Himalayas, India",
        image:
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200",
        size: "md:col-span-2 md:row-span-2",
    },
    {
        id: 2,
        title: "Tropical Escapes",
        location: "Beautiful Beaches",
        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000",
        size: "",
    },
    {
        id: 3,
        title: "Into The Wild",
        location: "Nature & Wildlife",
        image:
            "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1000",
        size: "",
    },
    {
        id: 4,
        title: "Green Paradise",
        location: "Meghalaya, India",
        image:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000",
        size: "",
    },
    {
        id: 5,
        title: "Explore The Unknown",
        location: "Adventure Trips",
        image:
            "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1000",
        size: "",
    },
];

export default function TravelGallery() {
    return (
        <section className="bg-[#FFFAF5] py-20 md:py-24">
            <div className="mx-auto max-w-7xl px-5 md:px-8">

                {/* Heading */}
                <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                    <div>
                        <div className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[3px] text-[#F5820B]">
                            <Camera size={17} />
                            Travel Moments
                        </div>

                        <h2 className="text-3xl font-bold text-[#333333] md:text-5xl">
                            Explore Our Travel
                            <span className="text-[#F5820B]"> Gallery</span>
                        </h2>

                        <p className="mt-4 max-w-xl leading-7 text-[#777777]">
                            Every journey tells a story. Discover beautiful destinations,
                            unforgettable adventures and moments worth remembering.
                        </p>
                    </div>

                    <Link
                        href="/gallery"
                        className="inline-flex items-center gap-2 font-semibold text-[#F5820B] transition hover:gap-3"
                    >
                        Explore Gallery <ArrowUpRight size={19} />
                    </Link>
                </div>

                {/* Gallery Grid */}
                <div className="grid auto-rows-[220px] grid-cols-1 gap-5 sm:grid-cols-2 md:auto-rows-[250px] md:grid-cols-4">
                    {gallery.map((item) => (
                        <Link
                            href="/gallery"
                            key={item.id}
                            className={`group relative overflow-hidden rounded-2xl ${item.size}`}
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                unoptimized
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover transition duration-700 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent transition group-hover:from-black/85" />

                            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-orange-300">
                                    {item.location}
                                </p>

                                <div className="flex items-center justify-between gap-3">
                                    <h3 className="text-xl font-bold text-white md:text-2xl">
                                        {item.title}
                                    </h3>

                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#F5820B] transition group-hover:bg-[#F5820B] group-hover:text-white">
                                        <ArrowUpRight size={20} />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Bottom Text */}
                <div className="mt-10 text-center">
                    <p className="text-sm text-gray-500">
                        Collect moments, not just destinations.
                        <span className="ml-1 font-semibold text-[#F5820B]">
                            Travel with Swapnayatra.
                        </span>
                    </p>
                </div>

            </div>
        </section>
    );
}
