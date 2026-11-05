
import Image from "next/image";
import hero from "../../public/images/hero-bg.jpg";

export default function HeroBackground() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden">

            {/* Background Image - Anchored to 80%-100% right so the hiker and landscape are fully visible */}
            <Image
                src={hero}
                alt="Swapnayatra mountain sunrise landscape"
                fill
                priority
                sizes="100vw"
                className="object-cover object-[80%_center] sm:object-[83%_center] md:object-[86%_center] lg:object-[90%_center] xl:object-right"
            />

            {/* Subtle top light gradient for navbar readability */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/60 via-white/20 to-transparent pointer-events-none" />

            {/* Left dark gradient for white text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/40 to-transparent w-full md:w-3/4 lg:w-3/5 pointer-events-none" />

            {/* Subtle bottom vignette */}
            <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

        </div>
    );
}
