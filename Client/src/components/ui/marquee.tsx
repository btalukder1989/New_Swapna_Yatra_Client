
"use client";

import * as React from "react";

export type Testimonial = {
    id: string;
    image: string;
    name: string;
    handle: string;
    location: string;
    review: string;
};

const DEFAULT_DATA: Testimonial[] = [
    {
        id: "1",
        image:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200",
        name: "Priya Sharma",
        handle: "Verified Traveller",
        location: "Kolkata",
        review:
            "Our Darjeeling trip was wonderful! The hotel, sightseeing and overall arrangements were excellent.",
    },
    {
        id: "2",
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
        name: "Rahul Das",
        handle: "Verified Traveller",
        location: "Siliguri",
        review:
            "The entire trip was well planned. We enjoyed every moment of our Sikkim adventure.",
    },
    {
        id: "3",
        image:
            "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200",
        name: "Ananya Roy",
        handle: "Verified Traveller",
        location: "Kolkata",
        review:
            "Amazing experience and helpful support throughout our journey. Would definitely recommend!",
    },
    {
        id: "4",
        image:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200",
        name: "Arjun Mehta",
        handle: "Verified Traveller",
        location: "Howrah",
        review:
            "A memorable family holiday. Everything was organized smoothly from beginning to end.",
    },
];

function VerifyIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 48 48"
            className="inline-block shrink-0"
            aria-label="Verified"
            role="img"
        >
            <polygon
                fill="#F5820B"
                points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"
            />
            <polygon
                fill="#fff"
                points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"
            />
        </svg>
    );
}

function TestimonialCard({ card }: { card: Testimonial }) {
    return (
        <article className="mx-3 w-[290px] shrink-0 rounded-2xl border border-orange-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:w-[320px]">
            <div className="flex items-center gap-3">
                <img
                    src={card.image}
                    alt={card.name}
                    loading="lazy"
                    className="h-12 w-12 rounded-full object-cover"
                />

                <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                        <p className="truncate text-sm font-bold text-[#333333]">
                            {card.name}
                        </p>
                        <VerifyIcon />
                    </div>

                    <p className="text-xs text-gray-500">
                        {card.handle} · {card.location}
                    </p>
                </div>
            </div>

            <div className="mt-4 flex gap-1 text-sm text-[#F5820B]" aria-label="5 out of 5 stars">
                {"★★★★★"}
            </div>

            <p className="mt-3 min-h-[65px] text-sm leading-6 text-gray-600">
                “{card.review}”
            </p>
        </article>
    );
}

function MarqueeRow({
    data,
    reverse = false,
    speed = 28,
}: {
    data: Testimonial[];
    reverse?: boolean;
    speed?: number;
}) {
    const doubled = [...data, ...data];

    return (
        <div className="relative mx-auto w-full overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#FFFAF5] to-transparent sm:w-24" />


            <div
                className="testimonial-marquee flex w-max py-4"
                style={{
                    animation: `testimonial-marquee ${speed}s linear infinite`,
                    animationDirection: reverse ? "reverse" : "normal",
                }}
            >
                {doubled.map((card, index) => (
                    <TestimonialCard
                        key={`${card.id}-${index}`}
                        card={card}
                    />
                ))}
            </div>


            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#FFFAF5] to-transparent sm:w-24" />
        </div>
    );
}

export default function Marquee({
    row1 = DEFAULT_DATA,
    row2 = DEFAULT_DATA,
}: {
    row1?: Testimonial[];
    row2?: Testimonial[];
}) {
    return (
        <section className="overflow-hidden bg-[#FFFAF5] py-20 md:py-24">
            <div className="mx-auto mb-12 max-w-3xl px-5 text-center">
                <span className="text-sm font-bold uppercase tracking-[3px] text-[#F5820B]">
                    Happy Travellers
                </span>

                <h2 className="mt-3 text-3xl font-bold text-[#333333] md:text-5xl">
                    Stories From Our <span className="text-[#F5820B]">Travellers</span>
                </h2>

                <p className="mt-4 text-sm leading-7 text-gray-500 md:text-base">
                    Real experiences and beautiful memories shared by people
                    who travelled with Swapnayatra.
                </p>
            </div>

            <div className="group/marquee flex flex-col gap-3">
                <div className="group-hover/marquee:[&_*]:[animation-play-state:paused]">
                    <MarqueeRow data={row1} speed={32} />
                </div>

                <div className="group-hover/marquee:[&_*]:[animation-play-state:paused]">
                    <MarqueeRow data={row2} reverse speed={36} />
                </div>
            </div>
        </section>
    );
}
