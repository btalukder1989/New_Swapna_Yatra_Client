
"use client";

import { FeatureSteps } from "../components/ui/feature-section";

const features = [
    {
        step: "01",
        title: "Expert Travel Guides",
        content:
            "Explore amazing destinations with experienced travel planners who help you enjoy every moment of your journey.",
        image:
            "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1400",
        alt: "Travelers exploring a beautiful mountain landscape",
    },
    {
        step: "02",
        title: "Best Price Guarantee",
        content:
            "Enjoy memorable travel experiences with transparent pricing and carefully planned tour packages.",
        image:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400",
        alt: "Beautiful scenic travel destination",
    },
    {
        step: "03",
        title: "Customized Tour Plans",
        content:
            "Choose your destination, travel dates and preferences. We help create a trip that matches your travel style.",
        image:
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1400",
        alt: "Snow covered Himalayan mountains",
    },
    {
        step: "04",
        title: "24/7 Travel Support",
        content:
            "Travel with peace of mind. Our team is here to help you with your travel questions and assistance.",
        image:
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1400",
        alt: "Peaceful mountain lake surrounded by nature",
    },
];

export default function WhyChooseUs() {
    return (
        <FeatureSteps
            features={features}
            title="Why Choose Swapnayatra?"
            subtitle="More than just a trip. We create meaningful travel experiences with comfort, care and unforgettable memories."
            autoPlayInterval={4000}
        />
    );
}
