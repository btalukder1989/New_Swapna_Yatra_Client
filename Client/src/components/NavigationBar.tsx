"use client";

import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

interface NavigationBarProps {
  variant?: "transparent" | "solid";
  currentPath?: string;
}

export default function NavigationBar({
  variant = "transparent",
  currentPath,
}: NavigationBarProps) {
  const isSolid = variant === "solid";

  const links = [
    { name: "Home", href: "/" },
    { name: "Packages", href: "/packages" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const checkIsActive = (href: string) => {
    if (!currentPath) {
      return href === "/";
    }
    if (href === "/") {
      return currentPath === "/";
    }
    return currentPath.startsWith(href);
  };

  return (
    <nav
      className={`w-full transition-all duration-300 ${isSolid
          ? "sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-orange-100/80 shadow-sm py-2"
          : "absolute top-0 left-0 z-30 bg-gradient-to-b from-white/70 via-white/30 to-transparent backdrop-blur-[2px] py-4"
        }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 lg:px-16">
        {/* Logo */}
        <Link
          href="/"
          className="relative h-14 w-52 md:h-16 md:w-60 shrink-0 transition-opacity hover:opacity-95"
        >
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
          {links.map((link) => {
            const active = checkIsActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-[15px] transition-colors duration-200 ${active
                    ? "font-bold text-slate-900 after:absolute after:-bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:h-[2.5px] after:w-7 after:rounded-full after:bg-[#F5820B]"
                    : "font-semibold text-slate-700 hover:text-[#F5820B]"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right Side: Search Icon + CTA Button */}
        <div className="flex items-center gap-3">
          {/* Search Link Button */}
          <Link
            href="/packages"
            aria-label="Search destinations"
            className="flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full bg-white/95 text-slate-700 shadow-sm ring-1 ring-black/5 backdrop-blur-sm transition-all duration-200 hover:bg-white hover:text-[#F5820B] hover:shadow-md hover:scale-105"
          >
            <Search size={18} strokeWidth={2.2} />
          </Link>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#F5820B] to-[#FF8A00] px-6 py-2.5 md:px-7 md:py-3 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(245,130,11,0.35)] transition-all duration-200 hover:from-[#E66B00] hover:to-[#F5820B] hover:shadow-[0_6px_22px_rgba(245,130,11,0.45)] hover:-translate-y-0.5"
          >
            <span>Plan Your Trip</span>
            <span className="text-base leading-none transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
