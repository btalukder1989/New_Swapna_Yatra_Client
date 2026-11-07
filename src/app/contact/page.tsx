import { Metadata } from "next";
import ContactView from "@/components/contact/ContactView";

export const metadata: Metadata = {
  title: "Contact Us - Swapnayatra | Plan Your Tour, Booking & Inquiries",
  description:
    "Get in touch with Swapnayatra travel planners for custom tour itineraries, booking inquiries, or branch visits. Call +91 7439099124 or chat on WhatsApp.",
  openGraph: {
    title: "Contact Us - Swapnayatra | Plan Your Tour, Booking & Inquiries",
    description:
      "Get in touch with Swapnayatra travel planners for custom tour itineraries, booking inquiries, or branch visits.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1200",
      },
    ],
  },
};

export default function ContactPage() {
  return <ContactView />;
}
