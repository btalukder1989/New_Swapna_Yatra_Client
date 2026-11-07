import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import NavigationBar from "@/components/NavigationBar";
import {
  Compass,
  Heart,
  ShieldCheck,
  Sparkles,
  Users,
  Award,
  Globe2,
  MapPin,
  Phone,
  Clock,
  ArrowRight,
  CheckCircle2,
  Star,
  Quote,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us - Swapnayatra | Handcrafted Travel & Memorable Journeys",
  description:
    "Learn about Swapnayatra's story, values, and experienced team. We craft personalized, transparent, and unforgettable tour packages across Kashmir, Northeast India, Himachal, and beyond.",
  openGraph: {
    title: "About Us - Swapnayatra | Handcrafted Travel & Memorable Journeys",
    description:
      "Turning dream journeys into reality. Meet the team and story behind Swapnayatra.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200",
      },
    ],
  },
};

export default function AboutPage() {
  const stats = [
    { number: "12,500+", label: "Happy Travelers", subtext: "From across India & abroad" },
    { number: "150+", label: "Curated Circuits", subtext: "Handpicked destinations" },
    { number: "99.2%", label: "Satisfaction Rate", subtext: "Verified traveler reviews" },
    { number: "8+ Years", label: "Ground Expertise", subtext: "Local presence & guides" },
  ];

  const coreValues = [
    {
      icon: Compass,
      title: "Uncompromised Authenticity",
      description:
        "We believe in real travel. From heritage Dal Lake houseboats to indigenous village stays in Meghalaya, we connect you to genuine regional soul rather than generic tourist trails.",
      tag: "True Local Spirit",
    },
    {
      icon: ShieldCheck,
      title: "Safety & 24/7 Peace of Mind",
      description:
        "Every driver is verified, mountain guides are certified, and vehicles are safety-audited. Our dedicated operations team tracks your itinerary round-the-clock for effortless safety.",
      tag: "Vetted & Secure",
    },
    {
      icon: Heart,
      title: "Transparent & Fair Value",
      description:
        "No hidden surcharges, no surprise entrance fees, and no deceptive fine print. You receive clear itineraries with honest pricing and flexible payment terms.",
      tag: "Zero Hidden Costs",
    },
    {
      icon: Globe2,
      title: "Sustainable & Respectful Travel",
      description:
        "We prioritize eco-conscious practices in fragile Himalayan valleys, support local community artisans, and strictly practice leave-no-trace travel.",
      tag: "Eco-Conscious",
    },
  ];

  const milestones = [
    {
      year: "2017",
      title: "The First Dream Journey",
      description:
        "Founded by a group of passionate travelers and mountain enthusiasts in Kolkata who wanted to make Himalayan tours transparent, warm, and deeply authentic.",
    },
    {
      year: "2019",
      title: "Expanding to Northeast India",
      description:
        "Established dedicated ground partnerships across Meghalaya, Sikkim, and North Bengal, introducing personalized small-group journeys.",
    },
    {
      year: "2021",
      title: "Tailor-Made Private Circuits",
      description:
        "Pioneered bespoke travel packages designed specifically for families, honeymoon couples, and senior citizens with private sanitised vehicles and handpicked stays.",
    },
    {
      year: "2023",
      title: "Regional Offices in Mathabhanga & Bangladesh",
      description:
        "Opened physical regional service centers in Mathabhanga (Cooch Behar) and Noakhali (Bangladesh) to provide in-person travel consultations.",
    },
    {
      year: "2025+",
      title: "A Pan-India Community of Explorers",
      description:
        "Over 12,000 travelers served with seamless online booking, dynamic package customization, and an expanding network spanning Kashmir to Kerala.",
    },
  ];

  const team = [
    {
      name: "Debraj Sen",
      role: "Founder & Managing Director",
      experience: "12+ Years Travel Industry",
      favDestination: "Ladakh & Kashmir Valleys",
      quote:
        "A journey isn't just distance covered; it's the warmth of a mountain tea and stories shared around evening bonfires.",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500",
    },
    {
      name: "Poulomi Banerjee",
      role: "Head of Experience Design",
      experience: "9+ Years Itinerary Curation",
      favDestination: "Cherrapunji & Living Root Bridges",
      quote:
        "We obsess over the tiny details—the timing of sunset views, the comfort of beds, and local culinary surprises.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500",
    },
    {
      name: "Subir Karmakar",
      role: "Head of Ground Operations & Safety",
      experience: "14+ Years Himalayan Logistics",
      favDestination: "North Sikkim & Gurudongmar",
      quote:
        "Mountain weather can be unpredictable. Our local driver networks and real-time monitoring ensure you're always in safe hands.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500",
    },
    {
      name: "Ananya Mukherjee",
      role: "Guest Delight & Concierge Lead",
      experience: "7+ Years Customer Care",
      favDestination: "Alleppey Backwaters & Munnar",
      quote:
        "From answering late-night inquiries to rearranging transfers on a whim, we treat every traveler like family.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500",
    },
  ];

  const offices = [
    {
      name: "Kolkata (Dum Dum)",
      type: "Headquarters & Central Operations",
      address:
        "Shiv Shakti Apartments, 3rd Floor, Surer Math, Melabagan Estate, Basak Bagan, South Dum Dum, Kolkata, West Bengal 700074",
      phone: "+91 7439099124",
      hours: "Mon - Sat: 10:00 AM - 7:30 PM",
      highlight: "Central Booking & Custom Itinerary Hub",
    },
    {
      name: "Mathabhanga (Cooch Behar)",
      type: "North Bengal Regional Branch",
      address:
        "10 No Ward Pachagarh, Mathabhanga, Cooch Behar, West Bengal 736146",
      phone: "+91 9832883361",
      hours: "Mon - Sat: 9:30 AM - 7:00 PM",
      highlight: "Direct Dooars, Sikkim & Bhutan Ground Support",
    },
    {
      name: "Bangladesh Regional Hub",
      type: "Liaison Office",
      address: "Near BishoNath Majidee, Noakhali, Bangladesh",
      phone: "+88 01788363935",
      hours: "Sun - Thu: 10:00 AM - 6:30 PM",
      highlight: "Cross-Border Tourism & Visa Assistance",
    },
  ];

  const testimonials = [
    {
      quote:
        "Our 6-day Kashmir trip with Swapnayatra was flawlessly planned. The Shikara ride, the houseboat hospitality, and the driver were top-notch. No hidden fees at all!",
      author: "Rajesh & Sumita Ghosh",
      tour: "Kashmir Paradise Tour",
      rating: 5,
    },
    {
      quote:
        "Traveling with elderly parents can be stressful, but Swapnayatra handled everything from gentle walking itineraries to warm meals with immense compassion.",
      author: "Dr. Anirban Dutta",
      tour: "Darjeeling & Sikkim Delight",
      rating: 5,
    },
    {
      quote:
        "The living root bridge trek in Meghalaya was the trip of a lifetime. The local guide arranged by the team was deeply knowledgeable and friendly.",
      author: "Pooja Hegde & Friends",
      tour: "Meghalaya Nature Explorer",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#333333]">
      {/* Sticky Solid Navigation */}
      <NavigationBar variant="solid" currentPath="/about" />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/80 via-white to-[#FDFBF7] py-20 lg:py-28">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-orange-200/30 blur-3xl" />
        <div className="absolute top-1/2 -right-32 h-96 w-96 rounded-full bg-amber-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#F5820B]">
            <Sparkles size={14} />
            Our Journey & Passion
          </span>

          <h1 className="mt-6 font-serif text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Where Dreams Take Flight & <br className="hidden sm:inline" />
            <span className="text-[#F5820B]">Journeys Become Stories</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base text-gray-600 sm:text-lg lg:text-xl leading-relaxed">
            Founded on the belief that travel shouldn't be an expensive mystery
            or a rushed checklist. At <strong className="text-slate-800">Swapnayatra</strong>, we turn your travel dreams
            into life-affirming experiences—with honest pricing, verified stays, and heartfelt hospitality.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F5820B] to-[#FF8A00] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:from-[#E66B00] hover:to-[#F5820B] hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Explore Tour Packages</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-[#F5820B] hover:bg-orange-50/50 hover:text-[#F5820B]"
            >
              <span>Talk to Our Travel Experts</span>
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="relative mx-auto mt-16 max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 rounded-3xl border border-orange-100 bg-white/90 p-6 shadow-xl shadow-orange-500/5 backdrop-blur-sm sm:grid-cols-4 sm:gap-6 sm:p-8">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`text-center ${
                  idx !== stats.length - 1
                    ? "sm:border-r sm:border-orange-100/80"
                    : ""
                }`}
              >
                <div className="text-3xl font-extrabold text-[#F5820B] sm:text-4xl lg:text-5xl">
                  {stat.number}
                </div>
                <div className="mt-2 text-sm font-bold text-slate-900">
                  {stat.label}
                </div>
                <div className="mt-0.5 text-xs text-gray-500">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Story Section */}
      <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Text Narrative */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#F5820B]">
              <Compass size={14} />
              The Swapnayatra Story
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Born from a Passion for <br />
              <span className="text-[#F5820B]">Honest, Soul-Stirring Travel</span>
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-600">
              <p>
                In Bengali and Sanskrit, <em>"Swapna"</em> means Dream, and <em>"Yatra"</em> means a sacred journey. Together, they represent the spirit of our company: turning the travel dreams you hold in your heart into living, breathing memories.
              </p>
              <p>
                Back in 2017, our founders noticed that the travel industry had grown increasingly mechanical—tourists were herded from crowded bus to crowded bus, subjected to hidden commission traps, and left on their own when mountain roads closed or flights got delayed.
              </p>
              <p>
                We decided to build something different: a travel collective rooted in Eastern India with real ground logistics, vetted boutique stays, hand-selected private drivers, and dedicated trip directors available 24 hours a day.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-2xl border border-orange-100 bg-orange-50/50 p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#F5820B]" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">100% Verified Stays</h4>
                  <p className="mt-1 text-xs text-gray-600">
                    Inspected for hygiene, views, private bathrooms, and authentic hospitality.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-orange-100 bg-orange-50/50 p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#F5820B]" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Dedicated Tour Concierge</h4>
                  <p className="mt-1 text-xs text-gray-600">
                    A dedicated travel manager reachable on call and WhatsApp at every hour of your trip.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Collage */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border-4 border-white shadow-2xl shadow-orange-500/10">
                <Image
                  src="https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1200"
                  alt="Kashmir Dal Lake by Swapnayatra"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur-md">
                    <Sparkles size={12} className="text-yellow-300" />
                    Handcrafted Experiences
                  </div>
                  <h3 className="mt-2 text-xl font-bold">
                    Dal Lake Shikaras, Kashmir
                  </h3>
                  <p className="mt-1 text-xs text-gray-200">
                    Private deluxe wooden houseboats curated exclusively for our travelers.
                  </p>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 rounded-2xl border border-orange-100 bg-white p-4 shadow-xl sm:-bottom-8 sm:-left-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-[#F5820B]">
                    <Award size={24} />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-900">Top Rated</div>
                    <div className="text-xs text-gray-500">Eastern India Travel Agency</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-gradient-to-b from-[#FFFDF9] via-orange-50/40 to-[#FFFDF9] py-20 lg:py-24 border-y border-orange-100/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#F5820B]">
              <Heart size={14} />
              Our Principles
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              The Four Pillars Behind Every Trip
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
              We govern every itinerary, every booking, and every traveler interaction with four uncompromising promises.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="group relative flex flex-col rounded-3xl border border-orange-100/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-orange-500/10"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100/80 text-[#F5820B] transition-colors group-hover:bg-[#F5820B] group-hover:text-white">
                    <Icon size={28} />
                  </div>

                  <span className="mt-6 inline-block text-[11px] font-bold uppercase tracking-wider text-[#F5820B]">
                    {val.tag}
                  </span>

                  <h3 className="mt-1.5 text-lg font-bold text-slate-900">
                    {val.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Evolution */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#F5820B]">
            <Clock size={14} />
            Our Milestones
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            From a Local Dream to 12,000+ Journeys
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
            A look back at how we evolved into Eastern India's most trusted travel planning family.
          </p>
        </div>

        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Vertical connecting line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-orange-200 hidden sm:block" />

          <div className="space-y-10">
            {milestones.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.year}
                  className={`relative flex flex-col sm:flex-row items-center gap-6 ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content Box */}
                  <div className="w-full sm:w-1/2">
                    <div
                      className={`rounded-2xl border border-orange-100 bg-white p-6 shadow-sm transition hover:shadow-md ${
                        isEven ? "sm:text-left" : "sm:text-right"
                      }`}
                    >
                      <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-extrabold text-[#F5820B]">
                        {item.year}
                      </span>
                      <h3 className="mt-2 text-lg font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Badge */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-[#F5820B] text-white shadow-md z-10 hidden sm:flex">
                    <div className="h-2 w-2 rounded-full bg-white" />
                  </div>

                  {/* Empty Spacer */}
                  <div className="w-full sm:w-1/2 hidden sm:block" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meet the Curators & Team */}
      <section className="bg-gradient-to-b from-white via-orange-50/30 to-white py-20 lg:py-24 border-t border-orange-100/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#F5820B]">
              <Users size={14} />
              Passionate Travel Curators
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Meet the Faces Behind Swapnayatra
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
              Experienced travelers, mountain experts, and logistics leaders who craft and safeguard your dream vacation.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="group flex flex-col overflow-hidden rounded-3xl border border-orange-100/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10"
              >
                {/* Photo */}
                <div className="relative aspect-[4/5] overflow-hidden bg-orange-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-semibold text-orange-200">
                      {member.experience}
                    </p>
                    <p className="text-[11px] text-gray-300">
                      Favorite: {member.favDestination}
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-slate-900">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#F5820B]">
                    {member.role}
                  </p>

                  <p className="mt-3 text-xs italic text-gray-500 leading-relaxed">
                    "{member.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Physical Offices Showcase */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#F5820B]">
            <MapPin size={14} />
            Our Physical Presence
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Visit Us at Our Service Centers
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
            We are not just a virtual website. Drop by our physical offices for in-person consultations, customized itinerary planning, and face-to-face travel support.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {offices.map((office) => (
            <div
              key={office.name}
              className="flex flex-col justify-between rounded-3xl border border-orange-100 bg-white p-7 shadow-sm transition hover:shadow-lg hover:border-orange-200"
            >
              <div>
                <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-[#F5820B]">
                  {office.type}
                </span>

                <h3 className="mt-3 text-xl font-bold text-slate-900">
                  {office.name}
                </h3>

                <p className="mt-1 text-xs font-semibold text-[#F5820B]">
                  {office.highlight}
                </p>

                <div className="mt-6 space-y-3 text-xs text-gray-600">
                  <div className="flex items-start gap-2.5">
                    <MapPin size={16} className="text-[#F5820B] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{office.address}</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Phone size={15} className="text-[#F5820B] shrink-0" />
                    <a
                      href={`tel:${office.phone.replace(/\s+/g, "")}`}
                      className="font-semibold text-slate-800 hover:text-[#F5820B] transition-colors"
                    >
                      {office.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Clock size={15} className="text-gray-400 shrink-0" />
                    <span>{office.hours}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-orange-50">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F5820B] hover:text-[#E66B00] transition-colors"
                >
                  <span>Connect with this Branch</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Traveler Testimonials */}
      <section className="bg-gradient-to-b from-[#FFFDF9] via-orange-50/20 to-white py-20 lg:py-24 border-t border-orange-100/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#F5820B]">
              <Star size={14} className="fill-orange-400 text-orange-400" />
              Verified Stories
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Loved by Thousands of Explorers
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="relative flex flex-col justify-between rounded-3xl border border-orange-100/80 bg-white p-8 shadow-sm"
              >
                <Quote size={32} className="text-orange-200" />
                <p className="mt-4 text-sm leading-relaxed text-gray-700 italic">
                  "{t.quote}"
                </p>

                <div className="mt-6 pt-4 border-t border-orange-50 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      {t.author}
                    </h4>
                    <p className="text-xs text-[#F5820B]">{t.tour}</p>
                  </div>
                  <div className="flex text-amber-400 text-xs">
                    {"★".repeat(t.rating)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#F5820B] via-[#FF8A00] to-[#F5820B] p-10 text-center text-white shadow-2xl shadow-orange-500/20 sm:p-16">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md">
              Start Your Adventure
            </span>

            <h2 className="mt-4 font-serif text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              Ready to Turn Your Dream Yatra Into Reality?
            </h2>

            <p className="mt-4 text-sm text-orange-50 sm:text-base leading-relaxed">
              Whether you yearn for snow peaks in Kashmir, serene root bridges in Meghalaya, or houseboats in Kerala, our travel designers are here to plan every detail.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/packages"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#F5820B] shadow-lg transition hover:bg-orange-50 hover:scale-105"
              >
                <span>Browse All Tour Packages</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-black/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                <span>Request Custom Quote</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
