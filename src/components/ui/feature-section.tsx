
"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
    MapPinned,
    BadgeCheck,
    Compass,
    Headset,
} from "lucide-react";

interface Feature {
    step: string;
    title?: string;
    content: string;
    image: string;
    alt?: string;
}

interface FeatureStepsProps {
    features: Feature[];
    className?: string;
    title?: string;
    subtitle?: string;
    autoPlayInterval?: number;
}

const icons = [MapPinned, BadgeCheck, Compass, Headset];

export function FeatureSteps({
    features,
    className,
    title = "Why Choose Swapnayatra?",
    subtitle = "We make every journey special, comfortable and memorable.",
    autoPlayInterval = 4000,
}: FeatureStepsProps) {
    const [currentFeature, setCurrentFeature] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Automatic feature switching
    useEffect(() => {
        if (features.length <= 1 || autoPlayInterval <= 0 || isPaused) {
            return;
        }

        const timer = setTimeout(() => {
            setCurrentFeature((current) => (current + 1) % features.length);
        }, autoPlayInterval);

        return () => clearTimeout(timer);
    }, [currentFeature, features.length, autoPlayInterval, isPaused]);

    if (!features.length) return null;

    const activeFeature = features[currentFeature];

    return (
        <section
            className={cn(
                "relative overflow-hidden bg-[#FFFAF5] px-6 py-20 md:py-28",
                className
            )}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-orange-100/40 blur-3xl" />
            <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-orange-100/50 blur-3xl" />

            <div className="relative z-10 mx-auto w-full max-w-7xl">

                {/* Heading */}
                <div className="mx-auto mb-14 max-w-3xl text-center">
                    <span className="text-sm font-bold tracking-[0.2em] text-[#F5820B]">
                        THE SWAPNAYATRA DIFFERENCE
                    </span>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#333333] md:text-5xl">
                        {title}
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#777777] md:text-lg">
                        {subtitle}
                    </p>
                </div>

                <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">

                    {/* Feature List */}
                    <div className="order-2 space-y-5 md:order-1">
                        {features.map((feature, index) => {
                            const Icon = icons[index % icons.length];
                            const isActive = index === currentFeature;

                            return (
                                <button
                                    key={`${feature.step}-${index}`}
                                    type="button"
                                    onClick={() => setCurrentFeature(index)}
                                    aria-pressed={isActive}
                                    className={cn(
                                        "group flex w-full items-start gap-5 rounded-2xl border p-5 text-left transition-all duration-300 md:p-6",
                                        isActive
                                            ? "border-orange-200 bg-white shadow-lg shadow-orange-100/60"
                                            : "border-transparent bg-white/60 hover:border-orange-100 hover:bg-white"
                                    )}
                                >
                                    <div
                                        className={cn(
                                            "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300",
                                            isActive
                                                ? "bg-[#F5820B] text-white"
                                                : "bg-orange-100 text-[#F5820B] group-hover:bg-orange-200"
                                        )}
                                    >
                                        <Icon size={23} />
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex items-center justify-between gap-3">
                                            <h3 className="text-lg font-bold text-[#333333] md:text-xl">
                                                {feature.title || feature.step}
                                            </h3>

                                            <span className="text-xs font-bold text-[#F5820B]">
                                                0{index + 1}
                                            </span>
                                        </div>

                                        <p className="mt-2 text-sm leading-7 text-[#777777] md:text-base">
                                            {feature.content}
                                        </p>

                                        {isActive && (
                                            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-orange-100">
                                                <motion.div
                                                    key={currentFeature}
                                                    className="h-full rounded-full bg-[#F5820B]"
                                                    initial={{ width: "0%" }}
                                                    animate={{ width: "100%" }}
                                                    transition={{
                                                        duration: autoPlayInterval / 1000,
                                                        ease: "linear",
                                                    }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Feature Image */}
                    <div className="order-1 md:order-2">
                        <div className="relative h-[300px] overflow-hidden rounded-3xl bg-orange-50 shadow-xl shadow-orange-100/50 md:h-[450px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentFeature}
                                    className="absolute inset-0"
                                    initial={{
                                        y: 40,
                                        opacity: 0,
                                        scale: 1.03,
                                    }}
                                    animate={{
                                        y: 0,
                                        opacity: 1,
                                        scale: 1,
                                    }}
                                    exit={{
                                        y: -30,
                                        opacity: 0,
                                    }}
                                    transition={{
                                        duration: 0.4,
                                    }}
                                >
                                    <Image
                                        src={activeFeature.image}
                                        alt={
                                            activeFeature.alt ||
                                            activeFeature.title ||
                                            activeFeature.step
                                        }
                                        fill
                                        unoptimized
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                                    <div className="absolute bottom-0 left-0 right-0 p-7 text-white md:p-10">
                                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
                                            {activeFeature.step}
                                        </span>

                                        <h3 className="mt-3 text-2xl font-bold md:text-3xl">
                                            {activeFeature.title || activeFeature.step}
                                        </h3>

                                        <p className="mt-3 max-w-md text-sm leading-7 text-white/85">
                                            {activeFeature.content}
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Navigation Dots */}
                        <div className="mt-6 flex justify-center gap-3">
                            {features.map((feature, index) => (
                                <button
                                    key={`${feature.step}-${index}`}
                                    type="button"
                                    onClick={() => setCurrentFeature(index)}
                                    aria-label={`Show ${feature.title || feature.step}`}
                                    className={cn(
                                        "h-2.5 rounded-full transition-all duration-300",
                                        currentFeature === index
                                            ? "w-8 bg-[#F5820B]"
                                            : "w-2.5 bg-orange-200 hover:bg-orange-400"
                                    )}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
