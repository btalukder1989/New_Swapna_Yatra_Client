
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin, Tag } from "lucide-react";

const offers = [
    {
        id: 1,
        title: "Kashmir Paradise Escape",
        location: "Srinagar, Kashmir",
        duration: "5 Days / 4 Nights",
        oldPrice: "₹18,999",
        price: "₹14,999",
        discount: "21% OFF",
        image:
            "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1200",
        label: "BEST SELLER",
    },
    {
        id: 2,
        title: "Darjeeling Mountain Retreat",
        location: "Darjeeling, West Bengal",
        duration: "3 Days / 2 Nights",
        oldPrice: "₹9,999",
        price: "₹7,499",
        discount: "25% OFF",
        image:
            "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200",
        label: "LIMITED DEAL",
    },
    {
        id: 3,
        title: "Meghalaya Nature Adventure",
        location: "Shillong, Meghalaya",
        duration: "4 Days / 3 Nights",
        oldPrice: "₹15,999",
        price: "₹11,999",
        discount: "25% OFF",
        image:
            "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1200",
        label: "SPECIAL OFFER",
    },
];

export default function SpecialOffers() {
    return (
        <section className="bg-white py-20 md:py-24">
            <div className="mx-auto max-w-7xl px-5 md:px-8">

                {/* Section Heading */}
                <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                    <div>
                        <div className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[3px] text-[#F5820B]">
                            <Tag size={17} />
                            Exclusive Deals
                        </div>

                        <h2 className="text-3xl font-bold text-[#333333] md:text-5xl">
                            Special Offers &
                            <span className="text-[#F5820B]"> Travel Deals</span>
                        </h2>

                        <p className="mt-4 max-w-xl text-base leading-7 text-[#777777]">
                            Explore beautiful destinations and enjoy unforgettable
                            experiences with our exclusive travel offers.
                        </p>
                    </div>

                    <Link
                        href="/offers"
                        className="inline-flex items-center gap-2 font-semibold text-[#F5820B] transition hover:gap-3"
                    >
                        View All Offers <ArrowRight size={19} />
                    </Link>
                </div>

                {/* Offer Cards */}
                <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                    {offers.map((offer) => (
                        <article
                            key={offer.id}
                            className="group overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={offer.image}
                                    alt={offer.title}
                                    fill
                                    unoptimized
                                    className="object-cover transition duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />

                                <div className="absolute left-4 top-4 rounded-md bg-white px-3 py-2 text-xs font-bold tracking-wide text-[#F5820B] shadow">
                                    {offer.label}
                                </div>

                                <div className="absolute right-4 top-4 rounded-md bg-[#F5820B] px-3 py-2 text-sm font-bold text-white shadow">
                                    {offer.discount}
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="mb-3 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                                    <span className="flex items-center gap-1.5">
                                        <MapPin size={15} className="text-[#F5820B]" />
                                        {offer.location}
                                    </span>

                                    <span className="flex items-center gap-1.5">
                                        <CalendarDays size={15} className="text-[#F5820B]" />
                                        {offer.duration}
                                    </span>
                                </div>

                                <h3 className="mb-5 text-xl font-bold text-[#333333] transition group-hover:text-[#F5820B]">
                                    {offer.title}
                                </h3>

                                <div className="flex items-end justify-between gap-3 border-t border-orange-100 pt-5">
                                    <div>
                                        <p className="text-sm text-gray-400 line-through">
                                            {offer.oldPrice}
                                        </p>
                                        <p className="text-2xl font-bold text-[#F5820B]">
                                            {offer.price}
                                            <span className="text-xs font-normal text-gray-500">
                                                {" "} / person
                                            </span>
                                        </p>
                                    </div>

                                    <Link
                                        href={`/offers/${offer.id}`}
                                        className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#F5820B] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#E66B00]"
                                    >
                                        Book Now <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Bottom Banner */}
                <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl bg-[#FFFAF5] p-7 md:flex-row md:p-10">
                    <div>
                        <h3 className="text-2xl font-bold text-[#333333]">
                            Planning your next adventure?
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Get in touch and let us create your perfect travel experience.
                        </p>
                    </div>

                    <Link
                        href="/contact"
                        className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#F5820B] px-6 py-3.5 font-semibold text-white transition hover:bg-[#E66B00]"
                    >
                        Contact Us <ArrowRight size={18} />
                    </Link>
                </div>

            </div>
        </section>
    );
}
