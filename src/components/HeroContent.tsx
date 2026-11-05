
import Link from "next/link";
import {
    ShieldCheck,
    Luggage,
    Headset,
    ArrowRight,
    Plane,
    Play,
} from "lucide-react";

export default function HeroContent() {
    const features = [
        {
            icon: Luggage,
            title: "Curated",
            subtitle: "Tour Packages",
        },
        {
            icon: ShieldCheck,
            title: "Safe &",
            subtitle: "Reliable Travel",
        },
        {
            icon: Headset,
            title: "Expert",
            subtitle: "Travel Support",
        },
    ];

    return (
        <div className="max-w-3xl text-white">

            {/* Eyebrow */}
            <p className="mb-4 flex items-center gap-2.5 text-xs font-bold tracking-[0.25em] text-white md:text-sm drop-shadow-sm">
                <span>EXPLORE</span>
                <span className="text-[#F5820B] text-xs">•</span>
                <span>TRAVEL</span>
                <span className="text-[#F5820B] text-xs">•</span>
                <span>DISCOVER</span>
            </p>

            {/* Heading */}
            <h1 className="font-serif text-5xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[76px] drop-shadow-md">
                Turn Your
                <br />
                Travel Dreams
                <br />
                into{" "}
                <span className="italic font-serif text-[#F5820B]">
                    Reality
                </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base font-normal leading-relaxed text-white/90 md:text-lg drop-shadow-sm">
                Discover handpicked destinations, curated tour packages,
                and hassle-free travel experiences with Swapnayatra.
            </p>

            {/* Action Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-4">

                {/* Primary Button */}
                <Link
                    href="/packages"
                    className="group flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#F5820B] to-[#FF8A00] px-7 py-3.5 text-sm md:text-base font-semibold text-white shadow-[0_8px_25px_rgba(245,130,11,0.35)] transition-all duration-300 hover:from-[#E66B00] hover:to-[#F5820B] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(245,130,11,0.45)]"
                >
                    <Plane size={18} className="transition-transform group-hover:scale-110" />
                    <span>Explore Packages</span>
                    <ArrowRight
                        size={17}
                        className="transition-transform group-hover:translate-x-1"
                    />
                </Link>

                {/* Secondary Button */}
                <Link
                    href="/about"
                    className="group flex items-center gap-3 rounded-full bg-slate-900/40 backdrop-blur-md border border-white/25 px-6 py-3.5 text-sm md:text-base font-semibold text-white shadow-sm transition-all duration-300 hover:bg-slate-900/60 hover:border-white/40 hover:-translate-y-0.5"
                >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-slate-900 transition-transform group-hover:scale-105">
                        <Play size={11} fill="currentColor" className="ml-0.5" />
                    </span>
                    <span>Watch Our Story</span>
                </Link>

            </div>

            {/* Features Row with Vertical Separators */}
            <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-4 md:mt-16">

                {features.map((feature, index) => {
                    const Icon = feature.icon;

                    return (
                        <div key={index} className="flex items-center gap-6">
                            <div className="flex items-center gap-3">
                                <Icon
                                    size={28}
                                    strokeWidth={1.8}
                                    className="text-[#F5820B] shrink-0"
                                />

                                <div className="text-left leading-tight">
                                    <p className="text-sm font-bold text-white md:text-base tracking-tight">
                                        {feature.title}
                                    </p>
                                    <p className="text-xs font-normal text-white/80 md:text-sm">
                                        {feature.subtitle}
                                    </p>
                                </div>
                            </div>

                            {/* Divider between items (hidden on the last item) */}
                            {index < features.length - 1 && (
                                <div className="hidden h-9 w-[1px] bg-white/25 sm:block" />
                            )}
                        </div>
                    );
                })}

            </div>

        </div>
    );
}
