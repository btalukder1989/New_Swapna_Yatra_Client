
"use client";

import React, { useEffect, useRef, useState } from "react";

export type Slide = {
    id?: string;
    title: string;
    location?: string;
    image: string;
    caption?: string;
    alt?: string;
    description?: string;
};

type PolaroidLineCarouselProps = {
    slides: Slide[];
    height?: string;
    cardWidth?: number;
    sag?: number;
    swing?: number;
    autoplay?: number;
    string?: string;
    background?: string;
    ink?: string;
    ariaLabel?: string;
};

export default function PolaroidLineCarousel({
    slides,
    height = "620px",
    cardWidth = 260,
    sag = 45,
    swing = 1,
    autoplay = 3000,
    string = "#F5820B",
    background = "#FFFFFF",
    ink = "#555555",
    ariaLabel = "Travel destinations",
}: PolaroidLineCarouselProps) {
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);
    const [dragging, setDragging] = useState(false);

    const startX = useRef(0);

    const total = slides.length;

    const next = () => {
        setActive((current) => (current + 1) % total);
    };

    const previous = () => {
        setActive((current) => (current - 1 + total) % total);
    };

    useEffect(() => {
        if (!autoplay || paused || dragging || total <= 1) return;

        const timer = setInterval(() => {
            setActive((current) => (current + 1) % total);
        }, autoplay);

        return () => clearInterval(timer);
    }, [autoplay, paused, dragging, total]);

    const getOffset = (index: number) => {
        let offset = index - active;

        if (offset > total / 2) offset -= total;
        if (offset < -total / 2) offset += total;

        return offset;
    };

    const handlePointerDown = (event: React.PointerEvent) => {
        startX.current = event.clientX;
        setDragging(true);
    };

    const handlePointerUp = (event: React.PointerEvent) => {
        const difference = event.clientX - startX.current;

        if (difference > 50) previous();
        if (difference < -50) next();

        setDragging(false);
    };

    if (!slides.length) return null;

    return (
        <section
            className="relative w-full overflow-hidden"
            style={{ background, height, touchAction: "pan-y" }}
            aria-label={ariaLabel}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => {
                setPaused(false);
                setDragging(false);
            }}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerCancel={() => setDragging(false)}
        >
            {/* Curved String */}
            <div className="absolute left-0 right-0 top-[50px] z-0">
                <svg
                    width="100%"
                    height="100"
                    viewBox="0 0 1200 100"
                    preserveAspectRatio="none"
                >
                    <path
                        d={`M0 15 Q600 ${15 + sag} 1200 15`}
                        fill="none"
                        stroke={string}
                        strokeWidth="2"
                    />
                </svg>
            </div>

            {/* Carousel Cards */}
            <div className="relative mx-auto h-full max-w-[1400px]">
                {slides.map((slide, index) => {
                    const offset = getOffset(index);
                    const isActive = offset === 0;

                    const translateX = offset * (cardWidth + 35);
                    const translateY = Math.abs(offset) * 25;
                    const rotation = offset * swing * 3;
                    const opacity = Math.abs(offset) > 2 ? 0 : 1;

                    return (
                        <div
                            key={slide.id || `${slide.title}-${index}`}
                            className="absolute left-1/2 top-[135px] cursor-grab select-none transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] active:cursor-grabbing"
                            style={{
                                width: cardWidth,
                                opacity,
                                zIndex: 10 - Math.abs(offset),
                                transform: `
                                    translateX(calc(-50% + ${translateX}px))
                                    translateY(${translateY}px)
                                    rotate(${rotation}deg)
                                    scale(${isActive ? 1 : 0.88})
                                `,
                                pointerEvents:
                                    opacity === 0 ? "none" : "auto",
                            }}
                            onClick={() => setActive(index)}
                        >
                            <div
                                className="bg-white p-3 pb-5 shadow-[0_12px_35px_rgba(0,0,0,0.13)]"
                                style={{
                                    transform: `rotate(${isActive ? -1 : 0}deg)`,
                                }}
                            >
                                {/* Destination Image */}
                                <div className="relative aspect-[4/5] overflow-hidden bg-orange-50">
                                    <img
                                        src={slide.image}
                                        alt={slide.alt || slide.title}
                                        draggable={false}
                                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                </div>

                                {/* Destination Details */}
                                <div className="px-2 pt-4 text-center">
                                    <p
                                        className="text-lg font-bold"
                                        style={{ color: ink }}
                                    >
                                        {slide.title}
                                    </p>

                                    {slide.location && (
                                        <p className="mt-1 text-sm text-gray-500">
                                            {slide.location}
                                        </p>
                                    )}

                                    {(slide.caption || slide.description) && (
                                        <p className="mt-2 text-xs leading-relaxed text-gray-400">
                                            {slide.caption || slide.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Carousel Navigation */}
            <div className="absolute bottom-8 left-0 right-0 z-20 flex items-center justify-center gap-5">
                <button
                    type="button"
                    onClick={previous}
                    aria-label="Previous destination"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-orange-200 bg-white text-xl text-orange-600 shadow-sm transition hover:bg-orange-500 hover:text-white"
                >
                    ←
                </button>

                {/* Pagination Dots */}
                <div className="flex items-center gap-2">
                    {slides.map((slide, index) => (
                        <button
                            key={slide.id || `${slide.title}-${index}`}
                            type="button"
                            onClick={() => setActive(index)}
                            aria-label={`Go to ${slide.title}`}
                            className={`h-2 rounded-full transition-all duration-300 ${active === index
                                ? "w-7 bg-orange-500"
                                : "w-2 bg-orange-200 hover:bg-orange-400"
                                }`}
                        />
                    ))}
                </div>

                <button
                    type="button"
                    onClick={next}
                    aria-label="Next destination"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-orange-200 bg-white text-xl text-orange-600 shadow-sm transition hover:bg-orange-500 hover:text-white"
                >
                    →
                </button>
            </div>
        </section>
    );
}
