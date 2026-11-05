
"use client";

import * as React from "react";
import Link from "next/link";
import {
    ArrowUpRight,
    MapPin,
    Phone,
    Mail,
    Send,
    Plane,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const offices = [
    {
        name: "Kolkata",
        type: "Main Office",
        address: "Add your complete Kolkata office address",
        phone: "Add official phone number",
    },
    {
        name: "Siliguri",
        type: "Regional Office",
        address: "Add your complete Siliguri office address",
        phone: "Add official phone number",
    },
    {
        name: "Darjeeling",
        type: "Regional Office",
        address: "Add your complete Darjeeling office address",
        phone: "Add official phone number",
    },
];

const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Destinations", href: "/destinations" },
    { label: "Tour Packages", href: "/packages" },
    { label: "Special Offers", href: "/offers" },
    { label: "Contact Us", href: "/contact" },
];

export default function AnimatedWaveFooter() {
    const [email, setEmail] = React.useState("");

    function handleSubscribe(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // Connect your newsletter API here.
        console.log("Newsletter subscription:", email);
        setEmail("");
    }

    return (
        <footer className="relative isolate overflow-hidden bg-gradient-to-b from-white to-[#FFFAF5] pt-20">

            {/* Animated Wave Background */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[420px] overflow-hidden text-[#F5820B]">
                <div className="absolute bottom-0 h-full w-[200%] animate-wave">
                    <svg
                        className="h-full w-full"
                        viewBox="0 0 1800 500"
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0 250C200 150 400 50 600 100C800 150 1000 350 1200 300C1400 250 1600 150 1800 250V500H0Z"
                            fill="currentColor"
                            opacity="0.04"
                        />
                        <path
                            d="M0 300C200 200 400 120 600 160C800 200 1000 350 1200 320C1400 280 1600 200 1800 300V500H0Z"
                            fill="currentColor"
                            opacity="0.06"
                        />
                    </svg>
                </div>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">

                {/* Brand & Newsletter */}
                <div className="mb-14 grid gap-10 border-b border-orange-100 pb-12 lg:grid-cols-2 lg:items-center">

                    <div>
                        <Link href="/" className="inline-flex items-center gap-3">
                            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F5820B] text-white">
                                <Plane size={25} />
                            </span>

                            <span className="text-3xl font-extrabold tracking-tight text-[#333333]">
                                Swapna<span className="text-[#F5820B]">yatra</span>
                            </span>
                        </Link>

                        <p className="mt-5 max-w-lg text-sm leading-7 text-gray-600">
                            Discover new destinations, experience different cultures,
                            and create unforgettable memories with Swapnayatra.
                            Your next adventure starts here.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-orange-100 bg-white/80 p-6 shadow-sm backdrop-blur-sm">
                        <h3 className="text-xl font-bold text-[#333333]">
                            Stay Connected
                        </h3>

                        <p className="mt-2 text-sm text-gray-500">
                            Subscribe to receive travel inspiration, exclusive offers
                            and exciting updates.
                        </p>

                        <form onSubmit={handleSubscribe} className="mt-5 space-y-3">
                            <Label htmlFor="footer-email" className="text-gray-700">
                                Your Email Address
                            </Label>

                            <div className="flex flex-col gap-3 sm:flex-row">
                                <Input
                                    id="footer-email"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    placeholder="Enter your email"
                                    className="h-12 border-orange-100 bg-white focus-visible:ring-[#F5820B]"
                                />

                                <Button
                                    type="submit"
                                    className="h-12 shrink-0 bg-[#F5820B] px-6 text-white hover:bg-[#E66B00]"
                                >
                                    Subscribe <Send size={16} className="ml-2" />
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Footer Columns */}
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-5 text-lg font-bold text-[#333333]">
                            Quick Links
                        </h3>

                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="group inline-flex items-center gap-2 text-sm text-gray-600 transition hover:text-[#F5820B]"
                                    >
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#F5820B] opacity-0 transition group-hover:opacity-100" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Three Offices */}
                    <div className="sm:col-span-2 lg:col-span-3">
                        <h3 className="mb-5 text-lg font-bold text-[#333333]">
                            Our Office Locations
                        </h3>

                        <div className="grid gap-4 md:grid-cols-3">
                            {offices.map((office) => (
                                <div
                                    key={office.name}
                                    className="rounded-xl border border-orange-100 bg-white/80 p-4 transition hover:-translate-y-1 hover:shadow-md"
                                >
                                    <div className="mb-3 flex items-center gap-2">
                                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-[#F5820B]">
                                            <MapPin size={18} />
                                        </span>

                                        <div>
                                            <h4 className="font-bold text-[#333333]">
                                                {office.name}
                                            </h4>
                                            <p className="text-xs text-[#F5820B]">
                                                {office.type}
                                            </p>
                                        </div>
                                    </div>

                                    <p className="min-h-[42px] text-xs leading-5 text-gray-500">
                                        {office.address}
                                    </p>

                                    <p className="mt-3 flex items-start gap-2 text-xs text-gray-600">
                                        <Phone size={14} className="mt-0.5 shrink-0 text-[#F5820B]" />
                                        {office.phone}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact & Social */}
                    <div>
                        <h3 className="mb-5 text-lg font-bold text-[#333333]">
                            Get In Touch
                        </h3>

                        <div className="space-y-4 text-sm text-gray-600">
                            <p className="flex items-start gap-3">
                                <Mail size={17} className="mt-0.5 shrink-0 text-[#F5820B]" />
                                Add your official email
                            </p>

                            <p className="flex items-start gap-3">
                                <Phone size={17} className="mt-0.5 shrink-0 text-[#F5820B]" />
                                Add your contact number
                            </p>
                        </div>

                        <h4 className="mb-4 mt-7 font-bold text-[#333333]">
                            Follow Our Journey
                        </h4>

                        {/* <div className="flex flex-wrap gap-2">
                            {[
                                { name: "Facebook", icon: Facebook, href: "#" },
                                { name: "Instagram", icon: Instagram, href: "#" },
                                { name: "YouTube", icon: Youtube, href: "#" },
                                { name: "LinkedIn", icon: Linkedin, href: "#" },
                            ].map((social) => {
                                const Icon = social.icon;

                                return (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        aria-label={social.name}
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-100 bg-white text-gray-600 transition hover:border-[#F5820B] hover:bg-[#F5820B] hover:text-white"
                                    >
                                        <Icon size={18} />
                                    </a>
                                );
                            })}
                        </div> */}
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-orange-100 py-7 text-center sm:flex-row sm:text-left">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} Swapnayatra. All rights reserved.
                    </p>

                    <div className="flex flex-wrap justify-center gap-5 text-sm text-gray-500">
                        <Link href="/privacy-policy" className="transition hover:text-[#F5820B]">
                            Privacy Policy
                        </Link>

                        <Link href="/terms" className="transition hover:text-[#F5820B]">
                            Terms & Conditions
                        </Link>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-1 transition hover:text-[#F5820B]"
                        >
                            Need Help? <ArrowUpRight size={14} />
                        </Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
