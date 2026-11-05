
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

export default function NavigationBar() {
    const links = [
        { name: "Home", href: "/", active: true },
        { name: "Packages", href: "/packages" },
        { name: "Destinations", href: "/destinations" },
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="absolute top-0 left-0 z-30 w-full bg-gradient-to-b from-white/70 via-white/30 to-transparent backdrop-blur-[2px]">
            <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 lg:px-16">

                {/* Logo */}
                <Link href="/" className="relative h-14 w-52 md:h-16 md:w-60 shrink-0 transition-opacity hover:opacity-95">
                    <Image
                        src="/images/swapnayatra-logo.png"
                        alt="Swapnayatra"
                        fill
                        priority
                        className="object-contain object-left"
                    />
                </Link>

                {/* Navigation Links */}
                <div className="hidden items-center gap-8 lg:flex">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`relative text-[15px] transition-colors duration-200 ${
                                link.active
                                    ? "font-bold text-slate-900 after:absolute after:-bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:h-[2.5px] after:w-7 after:rounded-full after:bg-[#F5820B]"
                                    : "font-semibold text-slate-700 hover:text-[#F5820B]"
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Right Side: Search Icon + CTA Button */}
                <div className="flex items-center gap-3">
                    {/* Search Icon Button */}
                    <button
                        type="button"
                        aria-label="Search destinations"
                        className="flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full bg-white/95 text-slate-700 shadow-sm ring-1 ring-black/5 backdrop-blur-sm transition-all duration-200 hover:bg-white hover:text-[#F5820B] hover:shadow-md hover:scale-105"
                    >
                        <Search size={18} strokeWidth={2.2} />
                    </button>

                    {/* CTA Button */}
                    <Link
                        href="/contact"
                        className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#F5820B] to-[#FF8A00] px-6 py-2.5 md:px-7 md:py-3 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(245,130,11,0.35)] transition-all duration-200 hover:from-[#E66B00] hover:to-[#F5820B] hover:shadow-[0_6px_22px_rgba(245,130,11,0.45)] hover:-translate-y-0.5"
                    >
                        <span>Plan Your Trip</span>
                        <span className="text-base leading-none transition-transform group-hover:translate-x-0.5">→</span>
                    </Link>
                </div>

            </div>
        </nav>
    );
}
