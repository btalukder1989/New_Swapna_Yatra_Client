
"use client";

import PolaroidLineCarousel, {
    type Slide,
} from "@/components/ui/polaroid-line-carousel";

const destinations: Slide[] = [
    {
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200",
        title: "Himalayan Escape",
        caption: "Explore the beautiful mountain ranges.",
        alt: "Himalayan mountains",
    },
    {
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200",
        title: "Kashmir Paradise",
        caption: "Experience nature at its finest.",
        alt: "Beautiful alpine lake",
    },
    {
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200",
        title: "Darjeeling Hills",
        caption: "Discover peaceful mountain views.",
        alt: "Mountain landscape",
    },
    {
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200",
        title: "Sikkim Adventure",
        caption: "Explore the beauty of the Himalayas.",
        alt: "Snow covered mountains",
    },
    {
        image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200",
        title: "Meghalaya Escape",
        caption: "Discover breathtaking natural beauty.",
        alt: "Nature landscape",
    },
    {
        image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1200",
        title: "Waterfall Trails",
        caption: "Find your next adventure.",
        alt: "Waterfall landscape",
    },
];

export default function PopularDestinations() {
    return (
        <section className="overflow-hidden bg-white py-20 md:py-28">

            {/* Section Heading */}
            <div className="mx-auto max-w-7xl px-6 text-center">

                <span className="text-sm font-bold tracking-[0.2em] text-[#F5820B]">
                    EXPLORE THE WORLD
                </span>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#333333] md:text-5xl">
                    Discover Your Next{" "}
                    <span className="italic text-[#F5820B]">
                        Adventure
                    </span>
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#777777] md:text-lg">
                    From peaceful mountain escapes to breathtaking natural
                    wonders, discover destinations that create unforgettable
                    memories.
                </p>

            </div>

            {/* Polaroid Carousel */}
            <div className="mt-10 md:mt-14">
                <PolaroidLineCarousel
                    slides={destinations}
                    height="620px"
                    cardWidth={260}
                    sag={45}
                    swing={1}
                    autoplay={4500}
                    string="#F5820B"
                    background="#FFFFFF"
                    ink="#555555"
                    ariaLabel="Popular travel destinations"
                />
            </div>

            {/* Explore Button */}
            <div className="mt-8 text-center">
                <a
                    href="/destinations"
                    className="inline-flex items-center gap-3 rounded-full bg-[#F5820B] px-8 py-4 font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-1 hover:bg-[#E66B00]"
                >
                    Explore All Destinations
                    <span>→</span>
                </a>
            </div>

        </section>
    );
}
