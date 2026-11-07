
import NavigationBar from "./NavigationBar";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";

export default function HeroSection() {
    return (
        <section className="relative flex min-h-[640px] md:min-h-[720px] lg:min-h-[780px] xl:min-h-[820px] xl:max-h-[880px] xl:h-screen items-center overflow-hidden bg-slate-950">

            {/* Hero Background */}
            <HeroBackground />

            {/* Navigation Bar */}
            <NavigationBar />

            {/* Hero Left Content */}
            <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-14 pt-32 lg:px-16 lg:pt-36">

                <HeroContent />

            </div>

        </section>
    );
}
