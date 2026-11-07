"use client";

import React, { useState } from "react";
import Link from "next/link";
import NavigationBar from "@/components/NavigationBar";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageSquare,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  ArrowRight,
  Calendar,
  Users,
  Compass,
  Headphones,
  Check,
  HelpCircle,
  ExternalLink,
  Heart,
} from "lucide-react";

interface OfficeInfo {
  id: string;
  name: string;
  city: string;
  type: string;
  address: string;
  phone: string;
  rawPhone: string;
  email: string;
  hours: string;
  mapEmbedUrl: string;
  highlight: string;
}

export default function ContactView() {
  // Inquiry Categories
  const inquiryTypes = [
    { id: "custom", label: "Custom Holiday Plan", desc: "Tailor-made itineraries for you & family" },
    { id: "booking", label: "Existing Booking Query", desc: "Inquire about an ongoing reservation" },
    { id: "group", label: "Group / Corporate Tour", desc: "College, corporate or family reunions" },
    { id: "general", label: "General Question", desc: "Pricing, dates, visa or general assistance" },
  ];

  const [activeCategory, setActiveCategory] = useState("custom");

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "Kashmir",
    travelMonth: "Next Month",
    adults: "2",
    children: "0",
    budget: "Deluxe (Standard Comfort)",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Active Office Selection
  const offices: OfficeInfo[] = [
    {
      id: "kolkata",
      name: "Kolkata Central Office",
      city: "Dum Dum, Kolkata",
      type: "Headquarters & Booking Desk",
      address:
        "Shiv Shakti Apartments, 3rd Floor, Surer Math, Melabagan Estate, Basak Bagan, South Dum Dum, Kolkata, West Bengal 700074",
      phone: "+91 7439099124",
      rawPhone: "917439099124",
      email: "kolkata@swapnayatra.com",
      hours: "Monday – Saturday: 10:00 AM – 7:30 PM",
      mapEmbedUrl:
        "https://maps.google.com/maps?q=Dum%20Dum,%20Kolkata,%20West%20Bengal%20700074&t=&z=14&ie=UTF8&iwloc=&output=embed",
      highlight: "Central team for Kashmir, Ladakh, South India & International custom bookings.",
    },
    {
      id: "coochbehar",
      name: "Mathabhanga Regional Hub",
      city: "Cooch Behar, North Bengal",
      type: "Regional Operations & Ground Fleet",
      address:
        "10 No Ward Pachagarh, Mathabhanga, Cooch Behar, West Bengal 736146",
      phone: "+91 9832883361",
      rawPhone: "919832883361",
      email: "coochbehar@swapnayatra.com",
      hours: "Monday – Saturday: 9:30 AM – 7:00 PM",
      mapEmbedUrl:
        "https://maps.google.com/maps?q=Mathabhanga,%20Cooch%20Behar,%20West%20Bengal%20736146&t=&z=14&ie=UTF8&iwloc=&output=embed",
      highlight: "Direct coordination for North Bengal, Dooars, Sikkim, Meghalaya & Bhutan.",
    },
    {
      id: "bangladesh",
      name: "Bangladesh Regional Liaison",
      city: "Noakhali, Bangladesh",
      type: "Cross-Border Tourism Office",
      address: "Near BishoNath Majidee, Noakhali, Bangladesh",
      phone: "+88 01788363935",
      rawPhone: "8801788363935",
      email: "bangladesh@swapnayatra.com",
      hours: "Sunday – Thursday: 10:00 AM – 6:30 PM",
      mapEmbedUrl:
        "https://maps.google.com/maps?q=Maijdee,%20Noakhali,%20Bangladesh&t=&z=14&ie=UTF8&iwloc=&output=embed",
      highlight: "Cross-border travel, India tourist visa assistance & inbound travelers.",
    },
  ];

  const [activeOfficeId, setActiveOfficeId] = useState("kolkata");
  const selectedOffice =
    offices.find((o) => o.id === activeOfficeId) || offices[0];

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "How soon will I receive a customized itinerary after submitting?",
      a: "Our destination experts typically curate and send your customized plan with itemized hotel, transport, and meal breakdowns within 2 to 4 business hours. If you need it urgently, you can also connect directly via WhatsApp.",
    },
    {
      q: "Can I modify destinations, dates, or hotels after getting the quote?",
      a: "Yes, absolutely! Every itinerary we propose is completely flexible. You can add extra days, upgrade to luxury boutique stays, change meal plans, or adjust sightseeing at no additional alteration fee.",
    },
    {
      q: "What are your payment terms and advance booking requirements?",
      a: "We only require a minimal booking token (usually 25% to 30%) to confirm your hotels and private vehicles. The remaining balance can be settled in installments or right before the tour commences.",
    },
    {
      q: "Do you arrange flight tickets, train reservations, and regional permits?",
      a: "Yes! For destinations like North Sikkim (Gurudongmar / Yumthang), Ladakh, and Arunachal Pradesh, all inner line permits (ILP) and mountain passes are completely managed by our local ground operations team at zero stress to you.",
    },
    {
      q: "What support is provided during our actual trip if roads or flights are disrupted?",
      a: "You will have a dedicated Tour Concierge and local ground logistics supervisor on call 24 hours a day. In the rare event of weather disruptions or roadblocks, our fleet immediately arranges alternative routes and warm stays.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg("Please provide your name and contact phone number.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const randomRef = `SY-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedRef(randomRef);
    }, 800);
  };

  const generateWhatsAppUrl = () => {
    const text = `Hello Swapnayatra Team! 👋\nI would like to inquire about a ${activeCategory.toUpperCase()} travel plan.\n\n*Name:* ${formData.name || "Traveler"}\n*Phone:* ${formData.phone}\n*Destination:* ${formData.destination}\n*Approx. Dates:* ${formData.travelMonth}\n*Travelers:* ${formData.adults} Adults, ${formData.children} Children\n*Budget:* ${formData.budget}\n*Note:* ${formData.message || "Please share best options and quote."}`;
    return `https://wa.me/917439099124?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#333333]">
      {/* Sticky Solid Navigation */}
      <NavigationBar variant="solid" currentPath="/contact" />

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/80 via-white to-[#FDFBF7] py-16 sm:py-20 lg:py-24">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-orange-200/30 blur-3xl" />
        <div className="absolute top-1/2 -right-32 h-96 w-96 rounded-full bg-amber-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#F5820B]">
            <Sparkles size={14} />
            Let's Connect & Plan
          </span>

          <h1 className="mt-5 font-serif text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            We're Here to Bring Your <br className="hidden sm:inline" />
            <span className="text-[#F5820B]">Dream Journey</span> to Life
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base text-gray-600 sm:text-lg leading-relaxed">
            Have questions about a destination, need a customized holiday quote,
            or looking for in-person travel guidance? Our destination curators are just a call, message, or office visit away.
          </p>

          {/* Quick Stats / Assurances */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-gray-600">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 shadow-sm border border-orange-100">
              <Clock size={14} className="text-[#F5820B]" />
              Response Under 2 Hours
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 shadow-sm border border-orange-100">
              <ShieldCheck size={14} className="text-[#F5820B]" />
              100% Free Consultations
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 shadow-sm border border-orange-100">
              <CheckCircle2 size={14} className="text-[#F5820B]" />
              No Hidden Charges
            </span>
          </div>
        </div>
      </section>

      {/* Quick Direct Reach Channels */}
      <section className="relative -mt-6 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1: WhatsApp */}
          <a
            href="https://wa.me/917439099124?text=Hello%20Swapnayatra!%20I%20would%20like%20to%20plan%20a%20tour."
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/10 hover:border-emerald-300"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                <MessageSquare size={22} />
              </div>
              <span className="mt-4 inline-block text-[11px] font-bold uppercase tracking-wider text-emerald-600">
                Instant Chat
              </span>
              <h3 className="mt-1 text-base font-bold text-slate-900">
                WhatsApp Desk
              </h3>
              <p className="mt-1 text-xs text-gray-500">
                Chat directly with our trip planning desk. Fast response time.
              </p>
            </div>
            <div className="mt-5 flex items-center gap-1.5 text-xs font-bold text-emerald-600">
              <span>Start WhatsApp Chat</span>
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </div>
          </a>

          {/* Card 2: Phone */}
          <a
            href="tel:+917439099124"
            className="group flex flex-col justify-between rounded-3xl border border-orange-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-300"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-[#F5820B] transition-colors group-hover:bg-[#F5820B] group-hover:text-white">
                <Phone size={22} />
              </div>
              <span className="mt-4 inline-block text-[11px] font-bold uppercase tracking-wider text-[#F5820B]">
                Direct Calling
              </span>
              <h3 className="mt-1 text-base font-bold text-slate-900">
                +91 7439099124
              </h3>
              <p className="mt-1 text-xs text-gray-500">
                Daily 9:00 AM – 9:00 PM for booking and custom queries.
              </p>
            </div>
            <div className="mt-5 flex items-center gap-1.5 text-xs font-bold text-[#F5820B]">
              <span>Call Now</span>
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </div>
          </a>

          {/* Card 3: Email */}
          <a
            href="mailto:info@swapnayatra.com"
            className="group flex flex-col justify-between rounded-3xl border border-blue-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-300"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                <Mail size={22} />
              </div>
              <span className="mt-4 inline-block text-[11px] font-bold uppercase tracking-wider text-blue-600">
                Written Quotes
              </span>
              <h3 className="mt-1 text-base font-bold text-slate-900">
                info@swapnayatra.com
              </h3>
              <p className="mt-1 text-xs text-gray-500">
                Send your detailed group requirements, flight schedules & preferences.
              </p>
            </div>
            <div className="mt-5 flex items-center gap-1.5 text-xs font-bold text-blue-600">
              <span>Send An Email</span>
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </div>
          </a>

          {/* Card 4: 24/7 On-Tour Help */}
          <div className="group flex flex-col justify-between rounded-3xl border border-purple-100 bg-white p-6 shadow-sm">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-600">
                <Headphones size={22} />
              </div>
              <span className="mt-4 inline-block text-[11px] font-bold uppercase tracking-wider text-purple-600">
                On-Tour Concierge
              </span>
              <h3 className="mt-1 text-base font-bold text-slate-900">
                24/7 Road Support
              </h3>
              <p className="mt-1 text-xs text-gray-500">
                Dedicated active helpline for travelers currently on ground.
              </p>
            </div>
            <div className="mt-5 text-xs font-semibold text-purple-700">
              Available 24x7 for Guests
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Form & Travel Consultation Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-orange-100 bg-white p-6 sm:p-10 shadow-xl shadow-orange-500/5">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#F5820B]">
                <Compass size={14} />
                Trip Customizer & Inquiry
              </span>

              <h2 className="mt-2 font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                Tell Us About Your Dream Trip
              </h2>

              <p className="mt-2 text-xs sm:text-sm text-gray-500">
                Fill out the details below. We'll send you an itemized itinerary with transparent pricing in a few hours.
              </p>

              {/* Inquiry Category Pills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {inquiryTypes.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
                      activeCategory === cat.id
                        ? "bg-[#F5820B] text-white shadow-md shadow-orange-500/20"
                        : "bg-orange-50/70 text-gray-700 hover:bg-orange-100/70"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Form Content */}
              {submittedRef ? (
                /* Success Confirmation State */
                <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-6 sm:p-8 text-center animate-fade-in">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <Check size={28} />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">
                    Thank You, {formData.name || "Traveler"}!
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
                    Your inquiry has been logged under reference{" "}
                    <strong className="text-slate-900">{submittedRef}</strong>. Our destination specialist will review your request and get back to you shortly.
                  </p>

                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-2.5 text-xs font-bold text-white shadow-md transition hover:bg-emerald-700 hover:gap-2.5"
                    >
                      <MessageSquare size={14} />
                      <span>Chat on WhatsApp with this Inquiry</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmittedRef(null);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          destination: "Kashmir",
                          travelMonth: "Next Month",
                          adults: "2",
                          children: "0",
                          budget: "Deluxe (Standard Comfort)",
                          message: "",
                        });
                      }}
                      className="rounded-full border border-gray-300 bg-white px-5 py-2.5 text-xs font-bold text-gray-700 hover:bg-gray-50"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </div>
              ) : (
                /* Active Form */
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  {errorMsg && (
                    <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-xs font-semibold text-red-700">
                      {errorMsg}
                    </div>
                  )}

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g., Anirban Mukherjee"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full rounded-xl border border-gray-200 bg-[#FDFBF7] px-4 py-3 text-sm text-slate-800 placeholder-gray-400 focus:border-[#F5820B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/10"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g., +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full rounded-xl border border-gray-200 bg-[#FDFBF7] px-4 py-3 text-sm text-slate-800 placeholder-gray-400 focus:border-[#F5820B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/10"
                      />
                    </div>
                  </div>

                  {/* Email & Destination */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="e.g., you@domain.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full rounded-xl border border-gray-200 bg-[#FDFBF7] px-4 py-3 text-sm text-slate-800 placeholder-gray-400 focus:border-[#F5820B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/10"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Preferred Destination
                      </label>
                      <select
                        value={formData.destination}
                        onChange={(e) =>
                          setFormData({ ...formData, destination: e.target.value })
                        }
                        className="w-full rounded-xl border border-gray-200 bg-[#FDFBF7] px-4 py-3 text-sm text-slate-800 focus:border-[#F5820B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/10"
                      >
                        <option value="Kashmir & Ladakh">Kashmir & Ladakh</option>
                        <option value="Meghalaya & Cherrapunji">Meghalaya & Cherrapunji</option>
                        <option value="Darjeeling & North Sikkim">Darjeeling & North Sikkim</option>
                        <option value="Himachal (Manali/Shimla)">Himachal (Manali/Shimla)</option>
                        <option value="Kerala Backwaters & Munnar">Kerala Backwaters & Munnar</option>
                        <option value="Goa Coastal Circuit">Goa Coastal Circuit</option>
                        <option value="Bhutan or Nepal Cross-Border">Bhutan or Nepal</option>
                        <option value="Other Customized Destination">Other Destination</option>
                      </select>
                    </div>
                  </div>

                  {/* Travel Month & Guest Counts */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Estimated Month
                      </label>
                      <select
                        value={formData.travelMonth}
                        onChange={(e) =>
                          setFormData({ ...formData, travelMonth: e.target.value })
                        }
                        className="w-full rounded-xl border border-gray-200 bg-[#FDFBF7] px-4 py-3 text-sm text-slate-800 focus:border-[#F5820B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/10"
                      >
                        <option value="This Month">This Month (Immediate)</option>
                        <option value="Next Month">Next Month</option>
                        <option value="In 2 - 3 Months">In 2 - 3 Months</option>
                        <option value="Autumn / Puja Vacations">Puja / Autumn Holidays</option>
                        <option value="Winter / Snow Season">Winter / Snow Season</option>
                        <option value="Summer Holidays">Summer Holidays</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Adults (12+ yrs)
                      </label>
                      <select
                        value={formData.adults}
                        onChange={(e) =>
                          setFormData({ ...formData, adults: e.target.value })
                        }
                        className="w-full rounded-xl border border-gray-200 bg-[#FDFBF7] px-4 py-3 text-sm text-slate-800 focus:border-[#F5820B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/10"
                      >
                        <option value="1">1 Person (Solo)</option>
                        <option value="2">2 Adults (Couple)</option>
                        <option value="3-4">3 - 4 Adults (Family)</option>
                        <option value="5-8">5 - 8 Adults (Small Group)</option>
                        <option value="9+">9+ Adults (Large Group)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Children (Under 12)
                      </label>
                      <select
                        value={formData.children}
                        onChange={(e) =>
                          setFormData({ ...formData, children: e.target.value })
                        }
                        className="w-full rounded-xl border border-gray-200 bg-[#FDFBF7] px-4 py-3 text-sm text-slate-800 focus:border-[#F5820B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/10"
                      >
                        <option value="0">0 Children</option>
                        <option value="1">1 Child</option>
                        <option value="2">2 Children</option>
                        <option value="3+">3+ Children</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget Level */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Stay & Comfort Preference
                    </label>
                    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                      {[
                        { title: "Standard", desc: "Clean 3-star stays & scenic cab" },
                        { title: "Deluxe", desc: "Premium 4-star, views & private car" },
                        { title: "Luxury", desc: "5-star luxury resorts & heritage suites" },
                      ].map((b) => (
                        <button
                          key={b.title}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: b.title })}
                          className={`rounded-2xl border p-3 text-left transition ${
                            formData.budget.startsWith(b.title)
                              ? "border-[#F5820B] bg-orange-50/60 ring-1 ring-[#F5820B]"
                              : "border-gray-200 bg-[#FDFBF7] hover:border-gray-300"
                          }`}
                        >
                          <div className="text-xs font-bold text-slate-900">
                            {b.title}
                          </div>
                          <div className="text-[11px] text-gray-500 mt-0.5">
                            {b.desc}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message & Requests */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Specific Wishes or Questions
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g., Need ground-floor rooms for elderly parents, vegetarian meals, romantic houseboat dinner in Kashmir, etc."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full rounded-xl border border-gray-200 bg-[#FDFBF7] px-4 py-3 text-sm text-slate-800 placeholder-gray-400 focus:border-[#F5820B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/10"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#F5820B] to-[#FF8A00] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:from-[#E66B00] hover:to-[#F5820B] hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          <span>Request Custom Itinerary</span>
                        </>
                      )}
                    </button>

                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-emerald-300 bg-emerald-50/60 px-6 py-3.5 text-xs font-bold text-emerald-700 shadow-sm transition hover:bg-emerald-100 hover:border-emerald-400"
                    >
                      <MessageSquare size={14} className="text-emerald-600" />
                      <span>Chat Directly on WhatsApp</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Why Book with Swapnayatra & Direct Contacts (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Trust Highlights */}
            <div className="rounded-3xl border border-orange-100 bg-white p-7 shadow-sm">
              <h3 className="font-serif text-lg font-bold text-slate-900">
                The Swapnayatra Promise
              </h3>
              <p className="mt-1 text-xs text-gray-500">
                Why thousands of families across Eastern India trust our planning:
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-[#F5820B]">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      100% Verified Cabs & Drivers
                    </h4>
                    <p className="mt-0.5 text-[11px] text-gray-500 leading-relaxed">
                      Experienced hill drivers with verified licenses, mountain experience, and clean private vehicles.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-[#F5820B]">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      Flexible Rescheduling
                    </h4>
                    <p className="mt-0.5 text-[11px] text-gray-500 leading-relaxed">
                      Sudden emergency? We work with our partner hotels to adjust your dates with minimal or zero penalty.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-[#F5820B]">
                    <Heart size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      Zero Hidden Extras
                    </h4>
                    <p className="mt-0.5 text-[11px] text-gray-500 leading-relaxed">
                      Every toll, parking, driver allowance, and meal inclusion is clearly documented before payment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Consultation Call Box */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#333333] to-[#1F2937] p-7 text-white shadow-lg">
              <div className="relative z-10">
                <span className="inline-block rounded-full bg-orange-500/20 px-3 py-1 text-[11px] font-bold text-orange-400">
                  Prefer Calling?
                </span>
                <h3 className="mt-3 text-lg font-bold">
                  Speak Directly With Our Senior Planner
                </h3>
                <p className="mt-1 text-xs text-gray-300 leading-relaxed">
                  Call Debraj or our guest desk to discuss tailored holiday circuits over the phone.
                </p>

                <div className="mt-5 flex flex-col gap-2.5">
                  <a
                    href="tel:+917439099124"
                    className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 text-xs font-bold text-white transition hover:bg-[#F5820B]"
                  >
                    <span className="flex items-center gap-2">
                      <Phone size={14} className="text-orange-400" />
                      <span>+91 7439099124</span>
                    </span>
                    <span className="text-[11px] text-orange-200">Kolkata Desk</span>
                  </a>

                  <a
                    href="tel:+919832883361"
                    className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 text-xs font-bold text-white transition hover:bg-[#F5820B]"
                  >
                    <span className="flex items-center gap-2">
                      <Phone size={14} className="text-orange-400" />
                      <span>+91 9832883361</span>
                    </span>
                    <span className="text-[11px] text-orange-200">North Bengal Hub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Physical Offices & Map Explorer */}
      <section className="bg-gradient-to-b from-[#FFFDF9] via-orange-50/30 to-[#FFFDF9] py-20 border-t border-orange-100/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#F5820B]">
              <MapPin size={14} />
              Visit In Person
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Our Physical Branch Offices
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
              Walk into any of our regional service centers for a cup of tea and a face-to-face holiday planning session.
            </p>

            {/* Office Tabs */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {offices.map((office) => (
                <button
                  key={office.id}
                  type="button"
                  onClick={() => setActiveOfficeId(office.id)}
                  className={`rounded-full px-5 py-2.5 text-xs font-bold transition-all ${
                    activeOfficeId === office.id
                      ? "bg-[#F5820B] text-white shadow-md shadow-orange-500/20"
                      : "bg-white text-gray-700 border border-gray-200 hover:border-[#F5820B] hover:text-[#F5820B]"
                  }`}
                >
                  {office.name}
                </button>
              ))}
            </div>
          </div>

          {/* Active Office Details & Map Card */}
          <div className="mt-12 overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-xl shadow-orange-500/5">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Office Details (5 cols) */}
              <div className="p-8 sm:p-10 lg:col-span-5 flex flex-col justify-between">
                <div>
                  <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-extrabold text-[#F5820B]">
                    {selectedOffice.type}
                  </span>

                  <h3 className="mt-3 text-2xl font-bold text-slate-900">
                    {selectedOffice.name}
                  </h3>

                  <p className="mt-1 text-xs font-semibold text-[#F5820B]">
                    {selectedOffice.highlight}
                  </p>

                  <div className="mt-8 space-y-4 text-xs text-gray-600">
                    <div className="flex items-start gap-3">
                      <MapPin size={18} className="text-[#F5820B] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{selectedOffice.address}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone size={17} className="text-[#F5820B] shrink-0" />
                      <a
                        href={`tel:${selectedOffice.rawPhone}`}
                        className="font-bold text-slate-900 hover:text-[#F5820B] transition-colors"
                      >
                        {selectedOffice.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail size={17} className="text-[#F5820B] shrink-0" />
                      <a
                        href={`mailto:${selectedOffice.email}`}
                        className="font-semibold text-gray-700 hover:text-[#F5820B]"
                      >
                        {selectedOffice.email}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock size={17} className="text-gray-400 shrink-0" />
                      <span>{selectedOffice.hours}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-orange-50 flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/${selectedOffice.rawPhone}?text=Hello%20Swapnayatra%20${encodeURIComponent(selectedOffice.name)}!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-700"
                  >
                    <MessageSquare size={13} />
                    <span>WhatsApp This Branch</span>
                  </a>

                  <a
                    href={`tel:${selectedOffice.rawPhone}`}
                    className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-2.5 text-xs font-bold text-gray-800 transition hover:border-[#F5820B] hover:text-[#F5820B]"
                  >
                    <Phone size={13} />
                    <span>Call Desk</span>
                  </a>
                </div>
              </div>

              {/* Embedded Map (7 cols) */}
              <div className="relative min-h-[360px] lg:min-h-[460px] lg:col-span-7 bg-gray-100">
                <iframe
                  title={`Map of ${selectedOffice.name}`}
                  src={selectedOffice.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "360px" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#F5820B]">
            <HelpCircle size={14} />
            Quick Answers
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-gray-600">
            Got questions before reaching out? Here are the most common things travelers ask us.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm transition"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-5 text-left text-sm font-bold text-slate-900 hover:text-[#F5820B]"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-gray-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#F5820B]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-orange-50 bg-[#FDFBF7] px-5 py-4 text-xs sm:text-sm leading-relaxed text-gray-600">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#F5820B] via-[#FF8A00] to-[#F5820B] p-10 text-center text-white shadow-2xl shadow-orange-500/20 sm:p-14">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md">
              Start Planning Today
            </span>

            <h2 className="mt-4 font-serif text-3xl font-extrabold sm:text-4xl">
              Ready to Explore Without the Hassle?
            </h2>

            <p className="mt-3 text-sm text-orange-50 sm:text-base leading-relaxed">
              Browse our handcrafted tour packages or message our trip designers for a custom itinerary made just for you.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/packages"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#F5820B] shadow-lg transition hover:bg-orange-50 hover:scale-105"
              >
                <span>Browse All Packages</span>
                <ArrowRight size={16} />
              </Link>

              <a
                href="https://wa.me/917439099124?text=Hello%20Swapnayatra!%20I%20want%20to%20plan%20a%20tour."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-black/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                <MessageSquare size={16} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
