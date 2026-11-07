export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  meals?: string;
  stay?: string;
}

export interface TourReview {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
  location?: string;
}

export interface TourFAQ {
  question: string;
  answer: string;
}

export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  image: string;
  location: string;
  stateCountry: string;
  duration: string;
  durationDays: number;
  durationNights: number;
  price: number;
  originalPrice: number;
  discount?: string;
  badge?: string;
  rating: number;
  reviewsCount: number;
  groupSize: string;
  tourType: string;
  difficulty: "Easy" | "Moderate" | "Challenging";
  languages: string[];
  bestSeason: string;
  gallery: string[];
  overview: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  included: string[];
  excluded: string[];
  faqs: TourFAQ[];
  reviews: TourReview[];
}

export const tourPackages: TourPackage[] = [
  {
    id: "1",
    slug: "kashmir-paradise-tour",
    title: "Kashmir Paradise Tour",
    tagline: "Experience heaven on earth with serene lakes, pine valleys, and snow peaks.",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1200",
    location: "Srinagar, Kashmir",
    stateCountry: "Jammu & Kashmir, India",
    duration: "5 Nights / 6 Days",
    durationDays: 6,
    durationNights: 5,
    price: 12999,
    originalPrice: 16999,
    discount: "24% OFF",
    badge: "Bestseller",
    rating: 4.9,
    reviewsCount: 142,
    groupSize: "2 - 14 Travellers",
    tourType: "Scenic Nature & Romantic",
    difficulty: "Easy",
    languages: ["English", "Hindi", "Urdu", "Bengali"],
    bestSeason: "April to October & Dec-Feb for Snow",
    gallery: [
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1200",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200",
    ],
    overview:
      "Known affectionately as 'Paradise on Earth', Kashmir offers a soul-stirring journey through tranquil waters, aromatic apple orchards, and majestic snow-capped Himalayan peaks. Enjoy an iconic Shikara boat ride on Dal Lake, stay in a heritage wooden houseboat, take the world's second-highest cable car in Gulmarg, and wander through the lush meadows of Pahalgam.",
    highlights: [
      "Relaxing 1-hour sunset Shikara ride across the tranquil waters of Dal Lake.",
      "Traditional luxury houseboat stay with authentic Kashmiri Kahwa tea.",
      "Gulmarg Gondola cable car ride reaching up to 13,780 ft with panoramic snow views.",
      "Scenic river drive and pine forest exploration in Pahalgam & Betaab Valley.",
      "Visit to the world-renowned Mughal Gardens: Nishat Bagh and Shalimar Bagh.",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar & Traditional Shikara Experience",
        description:
          "Arrive at Srinagar Sheikh-ul-Alam International Airport where our tour director warmly greets you. Transfer directly to your deluxe Dal Lake Houseboat. In the late afternoon, embark on an enchanting 1-hour sunset Shikara ride through floating gardens and lotus beds.",
        meals: "Dinner Included",
        stay: "Deluxe Lake Houseboat, Srinagar",
      },
      {
        day: 2,
        title: "Srinagar Heritage & Mughal Garden Tour",
        description:
          "Explore the historic Mughal heritage, visiting Nishat Bagh (Garden of Pleasure) and Shalimar Bagh (Abode of Love) built by Emperor Jahangir. Stop at Shankaracharya Hill temple for a breathtaking 360-degree vista of the Srinagar valley.",
        meals: "Breakfast & Dinner Included",
        stay: "Hotel Pine Spring / Similar, Srinagar",
      },
      {
        day: 3,
        title: "Full Day Gulmarg Meadow of Flowers & Gondola Ride",
        description:
          "Drive to Gulmarg, passing lush rice terraces and walnut groves. Take the famous Gulmarg Gondola ride to Phase 1 (Kongdoori) and Phase 2 (Apharwat Peak) for year-round snow activities and snowboarding views.",
        meals: "Breakfast & Dinner Included",
        stay: "Hotel Pine Spring / Similar, Srinagar",
      },
      {
        day: 4,
        title: "Srinagar to Pahalgam (Valley of Shepherds)",
        description:
          "Depart for Pahalgam along the Lidder River. Stop by saffron fields in Pampore and the ancient Awantipora ruins. Explore the picturesque Betaab Valley, Aru Valley, and Chandanwari pine trails.",
        meals: "Breakfast & Dinner Included",
        stay: "Pahalgam Riverside Resort",
      },
      {
        day: 5,
        title: "Pahalgam Nature Walks & Return to Srinagar",
        description:
          "Spend a leisurely morning along the sparkling Lidder River. Visit local saffron and Kashmiri shawl craftsmen. Journey back to Srinagar for an evening of souvenir shopping at Lal Chowk and the artisan bazaar.",
        meals: "Breakfast & Dinner Included",
        stay: "Deluxe Hotel, Srinagar",
      },
      {
        day: 6,
        title: "Departure from Srinagar",
        description:
          "Enjoy breakfast overlooking the Zabarwan mountain range before our private car transfers you to Srinagar Airport for your onward flight with golden memories of Kashmir.",
        meals: "Breakfast Included",
      },
    ],
    included: [
      "5 Nights accommodation (1 Night Houseboat + 4 Nights Deluxe Hotels)",
      "Daily gourmet buffet breakfast and freshly prepared multi-course dinners",
      "Private sanitized AC/Heated vehicle for all transfers and sightseeing",
      "1-Hour sunset Shikara ride on Dal Lake",
      "All driver allowances, toll taxes, fuel charges, and parking permits",
      "24/7 dedicated on-call tour manager and trip coordinator",
    ],
    excluded: [
      "Flight or train tickets to and from Srinagar",
      "Gulmarg Gondola tickets and pony/horse ride charges",
      "Entrance fees to monuments, Mughal gardens, or adventure activities",
      "Personal expenses such as laundry, phone calls, and tips",
      "Anything not explicitly mentioned in the inclusions list",
    ],
    faqs: [
      {
        question: "When is the best time to see snow in Kashmir?",
        answer: "Snowfall typically begins in late December and continues through February, especially in Gulmarg and Sonamarg. During April-May, snow can still be experienced at Apharwat Peak Phase 2.",
      },
      {
        question: "Is Kashmir safe for families and solo travellers?",
        answer: "Yes, Kashmir welcomes millions of tourists annually and locals are famous for their hospitality (Kashmiriyat). All our transport and hotel partners are certified and experienced.",
      },
      {
        question: "What should I pack for this trip?",
        answer: "In summer (April-September), pack light woollens/jackets for evenings. In winter (November-March), heavy down jackets, thermal innerwear, gloves, and waterproof snow boots are essential.",
      },
    ],
    reviews: [
      {
        id: "r1",
        author: "Ananya Roy",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
        rating: 5,
        date: "October 2025",
        location: "Kolkata, India",
        comment: "Our family trip to Kashmir with Swapnayatra was mesmerizing! The houseboat stay on Dal Lake was serene and the itinerary was paced so comfortably for my parents.",
      },
      {
        id: "r2",
        author: "Rahul Sharma",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
        rating: 5,
        date: "September 2025",
        location: "Delhi, India",
        comment: "Flawless coordination. Our driver was extremely polite and showed us hidden viewpoints in Pahalgam away from crowded tourist spots. 10/10 recommended!",
      },
    ],
  },
  {
    id: "2",
    slug: "darjeeling-mountain-escape",
    title: "Darjeeling Mountain Escape",
    tagline: "Wake up to Kanchenjunga sunrises and world-famous emerald tea gardens.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200",
    location: "Darjeeling, West Bengal",
    stateCountry: "West Bengal, India",
    duration: "3 Nights / 4 Days",
    durationDays: 4,
    durationNights: 3,
    price: 6999,
    originalPrice: 9499,
    discount: "26% OFF",
    badge: "Popular",
    rating: 4.8,
    reviewsCount: 98,
    groupSize: "2 - 12 Travellers",
    tourType: "Hill Station & Tea Heritage",
    difficulty: "Easy",
    languages: ["English", "Bengali", "Hindi", "Nepali"],
    bestSeason: "March to May & October to December",
    gallery: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200",
    ],
    overview:
      "Perched in the Lesser Himalayas, Darjeeling is celebrated as the Queen of the Hills. This curated retreat takes you to the iconic Tiger Hill sunrise over Mt. Kanchenjunga, through aromatic heritage tea estates, along the UNESCO World Heritage Toy Train route, and across the lively Mall Road bazaar.",
    highlights: [
      "Early morning Tiger Hill panoramic sunrise over Mt. Kanchenjunga (8,586 m).",
      "Joyride on the historic Darjeeling Himalayan Railway (Toy Train).",
      "Guided walk and fresh tea-tasting inside an authentic Happy Valley tea estate.",
      "Visit to Himalayan Mountaineering Institute (HMI) & Padmaja Naidu Himalayan Zoo.",
      "Evenings at Chowrasta Mall Road with local cafes and bakeries.",
    ],
    itinerary: [
      {
        day: 1,
        title: "Bagdogra / NJP to Darjeeling Hill Drive",
        description:
          "Arrive at Bagdogra Airport (IXB) or New Jalpaiguri Railway Station (NJP). Enjoy a scenic 3.5-hour uphill drive winding through tea plantations and misty pine slopes. Check in to your heritage hotel and relax with freshly brewed Darjeeling first-flush tea.",
        meals: "Dinner Included",
        stay: "Central Heritage Resort / Similar, Darjeeling",
      },
      {
        day: 2,
        title: "Tiger Hill Sunrise & 7-Points City Tour",
        description:
          "Early morning departure at 4:00 AM to witness the sun cast golden light upon Mt. Kanchenjunga. Visit Ghoom Monastery and Batasia Loop. After breakfast, tour the Himalayan Mountaineering Institute, Padmaja Naidu Zoo (home to Red Pandas and Snow Leopards), and the Japanese Peace Pagoda.",
        meals: "Breakfast & Dinner Included",
        stay: "Central Heritage Resort / Similar, Darjeeling",
      },
      {
        day: 3,
        title: "Tea Garden Excursion & Mirik Lake Drive",
        description:
          "Travel to Mirik Lake surrounded by cardamom groves and Japanese cedar forests. Cross the floating footbridge, visit Sumendu Lake, and stop at the Indo-Nepal border point at Pashupati Market for souvenir hunting.",
        meals: "Breakfast & Dinner Included",
        stay: "Central Heritage Resort / Similar, Darjeeling",
      },
      {
        day: 4,
        title: "Morning Mall Road Stroll & Departure",
        description:
          "Spend your morning strolling Chowrasta, visiting Glenary's vintage bakery for breakfast pastries, and purchasing premium organic tea before your return transfer to Bagdogra / NJP.",
        meals: "Breakfast Included",
      },
    ],
    included: [
      "3 Nights stay in premium view-facing hotel rooms",
      "Daily breakfast and multi-course dinners",
      "All transfers & sightseeing in dedicated SUV/private vehicle",
      "Tiger Hill sunrise excursion permits and driver charges",
      "Guided tea tasting tour experience",
    ],
    excluded: [
      "Toy Train tickets (can be arranged upon request)",
      "Entry fees to museums, monuments, and zoo",
      "Air / train fare to Bagdogra / NJP",
      "Personal gratuities and incidental expenses",
    ],
    faqs: [
      {
        question: "Can I book the Toy Train joy ride in advance?",
        answer: "Yes! Toy train tickets get booked quickly on IRCTC. Let our team know at booking time and we will assist in reserving your tickets.",
      },
      {
        question: "Is Tiger Hill accessible all year?",
        answer: "Yes, though the clearest Kanchenjunga views occur from October to December and March to April when cloud cover is minimal.",
      },
    ],
    reviews: [
      {
        id: "r3",
        author: "Subhashis Dey",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
        rating: 5,
        date: "November 2025",
        location: "Siliguri, India",
        comment: "Tiger Hill sunrise was pure magic! Everything arranged by Swapnayatra was on time and stress-free. Glenary's bakery recommendation was spot on.",
      },
    ],
  },
  {
    id: "3",
    slug: "sikkim-himalayan-adventure",
    title: "Sikkim Himalayan Adventure",
    tagline: "Explore glacial lakes, ancient Buddhist monasteries, and alpine valleys.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200",
    location: "Gangtok, Sikkim",
    stateCountry: "Sikkim, India",
    duration: "4 Nights / 5 Days",
    durationDays: 5,
    durationNights: 4,
    price: 8999,
    originalPrice: 11999,
    discount: "25% OFF",
    badge: "Adventure",
    rating: 4.9,
    reviewsCount: 116,
    groupSize: "2 - 12 Travellers",
    tourType: "Alpine Nature & Culture",
    difficulty: "Moderate",
    languages: ["English", "Hindi", "Bengali", "Nepali"],
    bestSeason: "March to June & September to December",
    gallery: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200",
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1200",
    ],
    overview:
      "Journey deep into India's first 100% organic state. From the vibrant capital of Gangtok and prayer flag-lined ridge walks to the high-altitude glacial waters of Tsomgo Lake (12,400 ft) and Baba Mandir, Sikkim is a sanctuary of peace, spirituality, and wild alpine beauty.",
    highlights: [
      "Excursion to sacred Tsomgo Glacial Lake at 12,400 ft altitude.",
      "Visit to the legendary Baba Harbhajan Singh Memorial Mandir.",
      "Scenic cable car ropeway across Gangtok valley with Kanchenjunga backdrop.",
      "Explore Rumtek and Enchey Monasteries with peaceful chanting ceremonies.",
      "Evening walks along the pedestrian-only MG Marg promenade.",
    ],
    itinerary: [
      {
        day: 1,
        title: "NJP / Bagdogra to Gangtok Mountain Drive",
        description:
          "Scenic 4.5-hour drive alongside the turquoise Teesta River up to Gangtok (5,500 ft). Check into your boutique hotel, freshen up, and take a relaxed evening stroll along bustling MG Marg.",
        meals: "Dinner Included",
        stay: "The Golden Crest / Similar, Gangtok",
      },
      {
        day: 2,
        title: "Sacred Tsomgo Lake & Baba Mandir Excursion",
        description:
          "Ascend the winding mountain highway towards the Indo-China border to witness the crystal-clear waters of Tsomgo Lake. Ride decorated yaks along the shoreline and visit the revered Baba Mandir.",
        meals: "Breakfast & Dinner Included",
        stay: "The Golden Crest / Similar, Gangtok",
      },
      {
        day: 3,
        title: "Gangtok Full Day Sightseeing & Cultural Monasteries",
        description:
          "Visit Tashi View Point, Ganesh Tok, and Hanuman Tok for sunrise views. Tour the Namgyal Institute of Tibetology, Do-Drul Chorten stupa, Ban Jhakri Waterfalls, and the grand Rumtek Dharma Chakra Centre.",
        meals: "Breakfast & Dinner Included",
        stay: "The Golden Crest / Similar, Gangtok",
      },
      {
        day: 4,
        title: "Ravangla Buddha Park & Namchi Char Dham",
        description:
          "Day excursion to South Sikkim. Stand before the monumental 130-ft Buddha statue set against mist-covered peaks at Ravangla Buddha Park, followed by a cultural tour of Siddhesvara Dhaam in Namchi.",
        meals: "Breakfast & Dinner Included",
        stay: "The Golden Crest / Similar, Gangtok",
      },
      {
        day: 5,
        title: "Farewell Sikkim & Departure to NJP / Bagdogra",
        description:
          "After a wholesome breakfast, travel downhill with photo stops along the Teesta River to catch your train or flight back home.",
        meals: "Breakfast Included",
      },
    ],
    included: [
      "4 Nights accommodation in 3-star deluxe view hotels",
      "Daily breakfast and chef-crafted buffet dinners",
      "All high-altitude permits and protected area permissions",
      "Private vehicle transfers for all tours and excursions",
      "Professional local driver-guide throughout the journey",
    ],
    excluded: [
      "Optional Nathu La Pass permit and vehicle supplement fees",
      "Yak ride and ropeway cable car tickets",
      "Travel insurance and personal shopping expenses",
      "Any costs arising from flight delays or landslides",
    ],
    faqs: [
      {
        question: "Do I need special permits to visit Tsomgo Lake?",
        answer: "Yes, Tsomgo Lake and Baba Mandir require Protected Area Permits (PAP). Swapnayatra handles the complete permit paperwork for all guests with valid Indian ID proofs (Voter ID/Passport/Aadhaar).",
      },
    ],
    reviews: [
      {
        id: "r4",
        author: "Pooja Banerjee",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200",
        rating: 5,
        date: "December 2025",
        location: "Kolkata, India",
        comment: "Tsomgo Lake was breathtaking with snow all around. The team handled all our border permits smoothly without any hassle at the checkpoints.",
      },
    ],
  },
  {
    id: "4",
    slug: "meghalaya-nature-explorer",
    title: "Meghalaya Nature Explorer",
    tagline: "Wander through clouds, living root bridges, and crystal clear river canyons.",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1200",
    location: "Shillong, Meghalaya",
    stateCountry: "Meghalaya, India",
    duration: "4 Nights / 5 Days",
    durationDays: 5,
    durationNights: 4,
    price: 9499,
    originalPrice: 12999,
    discount: "27% OFF",
    badge: "Nature Escape",
    rating: 4.8,
    reviewsCount: 84,
    groupSize: "2 - 10 Travellers",
    tourType: "Waterfalls, Trekking & Eco-Travel",
    difficulty: "Moderate",
    languages: ["English", "Khasi", "Hindi", "Bengali"],
    bestSeason: "September to May",
    gallery: [
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1200",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1200",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200",
    ],
    overview:
      "Meghalaya, the 'Abode of the Clouds', is home to the wettest places on earth, UNESCO bio-engineering living root bridges, and the glass-like waters of Umngot River in Dawki. Experience waterfalls cascading down limestone gorges in Cherrapunji and the Scottish highland charm of Shillong.",
    highlights: [
      "Trek to the magnificent centuries-old Double Decker Living Root Bridge in Nongriat.",
      "Crystal-clear transparent boat ride on the Umngot River in Dawki.",
      "Stand above the roaring Nohkalikai Falls, India's tallest plunge waterfall.",
      "Explore prehistoric limestone cave systems at Mawsmai & Arwah Caves.",
      "Visit Mawlynnong, recognized as Asia's Cleanest Village.",
    ],
    itinerary: [
      {
        day: 1,
        title: "Guwahati to Shillong via Umiam Lake",
        description:
          "Arrive at Guwahati Airport (GAU). Drive through pine-covered Khasi hills with a break at massive Umiam Lake (Barapani) for watersports and photography. Arrive in Shillong, the rock capital of India.",
        meals: "Dinner Included",
        stay: "Polo Orchid / Similar, Shillong",
      },
      {
        day: 2,
        title: "Shillong to Cherrapunji (Sohra) Waterfalls",
        description:
          "Travel to Cherrapunji. Visit Elephant Falls, the panoramic Shillong Peak, Mawkdok Dympep Valley Viewpoint, Nohkalikai Falls, and the stalactite passages of Mawsmai Cave.",
        meals: "Breakfast & Dinner Included",
        stay: "Cherrapunji Resort / Similar, Sohra",
      },
      {
        day: 3,
        title: "Living Root Bridge Adventure or Mawlynnong Eco Village",
        description:
          "Choose between an exhilarating trek down into the tropical rainforest to Nongriat's Double Decker Root Bridge, or a gentle cultural day visiting Asia's cleanest village at Mawlynnong with its single root bridge.",
        meals: "Breakfast & Dinner Included",
        stay: "Cherrapunji Resort / Similar, Sohra",
      },
      {
        day: 4,
        title: "Dawki Glass Waters & Return to Shillong",
        description:
          "Drive to Dawki near the Bangladesh border for a boat ride on the Umngot River where boats seem to float on air. Stop at Krang Shuri waterfall for an afternoon dip before returning to Shillong.",
        meals: "Breakfast & Dinner Included",
        stay: "Polo Orchid / Similar, Shillong",
      },
      {
        day: 5,
        title: "Kamakhya Temple Visit & Guwahati Departure",
        description:
          "Drive back to Guwahati. Option to seek blessings at the sacred Kamakhya Temple atop Nilachal Hill before catching your return flight from Guwahati.",
        meals: "Breakfast Included",
      },
    ],
    included: [
      "4 Nights accommodation in boutique eco-resorts & hotels",
      "Daily breakfast and wholesome regional/continental dinners",
      "Private vehicle throughout the entire tour",
      "Guided boat ride on Dawki River",
      "Entry fees to primary waterfalls and cave systems",
    ],
    excluded: [
      "Airfare to Guwahati",
      "Adventure watersports at Umiam Lake or zip-lining at Mawkdok",
      "Guide charges for Double Decker root bridge trek (can be arranged)",
      "Personal snacks, tips, and room service",
    ],
    faqs: [
      {
        question: "How difficult is the Double Decker Root Bridge trek?",
        answer: "The trek involves around 3,500 stone stairs each way. It takes 4-5 hours total and is moderately strenuous. For travellers preferring an easier walk, the single root bridge in Mawlynnong is accessible within a 10-minute flat walk.",
      },
    ],
    reviews: [
      {
        id: "r5",
        author: "Devratn Sengupta",
        avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=200",
        rating: 5,
        date: "January 2026",
        location: "Kolkata, India",
        comment: "Dawki was unreal! The water was so clear we could see pebbles 20 feet below. Swapnayatra's team took care of our luggage and itinerary flawlessly.",
      },
    ],
  },
  {
    id: "5",
    slug: "himachal-valley-retreat",
    title: "Himachal Valley Retreat",
    tagline: "Pine-scented mountains, thrilling mountain passes, and cozy cedar cottages.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200",
    location: "Manali, Himachal Pradesh",
    stateCountry: "Himachal Pradesh, India",
    duration: "5 Nights / 6 Days",
    durationDays: 6,
    durationNights: 5,
    price: 10999,
    originalPrice: 14499,
    discount: "24% OFF",
    badge: "Featured",
    rating: 4.9,
    reviewsCount: 129,
    groupSize: "2 - 14 Travellers",
    tourType: "Mountains, Adventure & Romance",
    difficulty: "Moderate",
    languages: ["English", "Hindi", "Punjabi"],
    bestSeason: "Year Round (Snow in Dec-Feb, Meadows in May-Oct)",
    gallery: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200",
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1200",
    ],
    overview:
      "Escape to the snow-crowned amphitheater of Himachal Pradesh. From the colonial heritage and pine forests of Shimla to the adventurous meadows of Solang Valley and Atal Tunnel in Manali, this tour balances relaxing valley views with adrenaline-filled alpine thrills.",
    highlights: [
      "Drive through the world-famous engineering marvel: Atal Tunnel to Sissu, Lahaul.",
      "Paragliding, zorbing, and ATV quad biking at Solang Valley.",
      "Visit ancient wooden Hadimba Devi Temple amidst giant deodar forests.",
      "Relax in natural hot sulfur springs at Vashisht Village.",
      "Evening cafe hopping and shopping on Old Manali and Mall Road.",
    ],
    itinerary: [
      {
        day: 1,
        title: "Chandigarh / Delhi to Shimla Ridge Drive",
        description:
          "Pickup from Chandigarh or Delhi. Drive up through the Shivalik foothills to Shimla (7,200 ft). Evening stroll on the pedestrian Ridge and heritage Mall Road.",
        meals: "Dinner Included",
        stay: "Pineview Resort, Shimla",
      },
      {
        day: 2,
        title: "Kufri Snow Point & Transfer to Manali",
        description:
          "Morning excursion to Kufri for apple orchards and horse riding trails. Then embark on a breathtaking mountain highway drive along the Beas River to Manali.",
        meals: "Breakfast & Dinner Included",
        stay: "Apple Valley Cottage / Similar, Manali",
      },
      {
        day: 3,
        title: "Manali Local Sightseeing & Old Manali Cafes",
        description:
          "Visit the 450-year-old Hadimba Devi Temple, Manu Temple, Tibetan Monastery, and Vashisht Hot Springs. Spend your afternoon in bohemian Old Manali cafes listening to live acoustic music.",
        meals: "Breakfast & Dinner Included",
        stay: "Apple Valley Cottage / Similar, Manali",
      },
      {
        day: 4,
        title: "Solang Valley & Atal Tunnel to Lahaul Valley",
        description:
          "Adventure day! Drive to Solang Valley for adventure sports, then cross under the Rohtang Ridge via the 9.02 km Atal Tunnel into the dramatically barren, snow-veiled landscapes of Sissu in Lahaul Valley.",
        meals: "Breakfast & Dinner Included",
        stay: "Apple Valley Cottage / Similar, Manali",
      },
      {
        day: 5,
        title: "Naggar Castle Heritage & Kullu River Rafting",
        description:
          "Visit the historic wooden Naggar Castle and Nicholas Roerich Art Gallery. Head to Kullu for thrilling white-water rafting on the Beas River and visit traditional Kullu shawl weaving centers.",
        meals: "Breakfast & Dinner Included",
        stay: "Apple Valley Cottage / Similar, Manali",
      },
      {
        day: 6,
        title: "Departure to Chandigarh / Delhi",
        description:
          "Relish your final breakfast overlooking snow-clad peaks before our vehicle transfers you safely back to Chandigarh or Delhi airport/station.",
        meals: "Breakfast Included",
      },
    ],
    included: [
      "5 Nights accommodation in scenic valley-view hotels",
      "Daily breakfast and multi-course buffet dinners",
      "Private dedicated vehicle for the entire round trip",
      "All interstate permits, toll taxes, and driver charges",
      "Sightseeing excursions to Solang, Atal Tunnel, and Naggar",
    ],
    excluded: [
      "Adventure activities (paragliding, rafting, quad bikes)",
      "Rohtang Pass NGT permit (subject to weather & government portal availability)",
      "Personal shopping and travel insurance",
    ],
    faqs: [
      {
        question: "Can we visit Rohtang Pass during this trip?",
        answer: "Yes, Rohtang Pass is open from May to November depending on snow clearance. A separate permit is issued by the Himachal Tourism portal which our team can help you book.",
      },
    ],
    reviews: [
      {
        id: "r6",
        author: "Vikram Mehta",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
        rating: 5,
        date: "October 2025",
        location: "Mumbai, India",
        comment: "Crossing the Atal Tunnel into Sissu was the highlight of our year! The cottage in Manali had stunning views of apple trees and snow mountains.",
      },
    ],
  },
  {
    id: "6",
    slug: "kerala-backwater-holiday",
    title: "Kerala Backwater Holiday",
    tagline: "Glide past emerald palm canals, tea-carpeted hills, and spice plantations.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200",
    location: "Alleppey, Kerala",
    stateCountry: "Kerala, India",
    duration: "3 Nights / 4 Days",
    durationDays: 4,
    durationNights: 3,
    price: 7999,
    originalPrice: 10999,
    discount: "27% OFF",
    badge: "Relaxation",
    rating: 4.8,
    reviewsCount: 76,
    groupSize: "2 - 12 Travellers",
    tourType: "Tropical Backwaters & Spice Trails",
    difficulty: "Easy",
    languages: ["English", "Hindi", "Malayalam", "Tamil"],
    bestSeason: "September to March",
    gallery: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200",
    ],
    overview:
      "Immerse yourself in 'God's Own Country'. Drift along the timeless palm-fringed lagoons of Alleppey aboard a traditional thatched Kettuvallam houseboat, savor fresh Kerala sadya on banana leaves, and breathe in fresh mountain air amidst Munnar's rolling tea plantations.",
    highlights: [
      "Overnight luxury houseboat cruise along the serene Alleppey backwaters.",
      "Authentic coastal Kerala cuisine prepared fresh onboard by personal chef.",
      "Explore the rolling emerald hills of Munnar and Eravikulam National Park.",
      "Guided tour of organic cardamom, cinnamon, and pepper spice gardens.",
      "Evening performance of traditional Kathakali dance and Kalaripayattu martial arts.",
    ],
    itinerary: [
      {
        day: 1,
        title: "Cochin Arrival & Scenic Drive to Munnar",
        description:
          "Pickup from Cochin International Airport (COK). Drive up to Munnar past Cheeyappara and Valara waterfalls. Check in to your resort nestled in the tea hills.",
        meals: "Dinner Included",
        stay: "Tea Valley Resort / Similar, Munnar",
      },
      {
        day: 2,
        title: "Munnar Tea Estates & Nilgiri Tahr Sanctuary",
        description:
          "Visit Eravikulam National Park, home to the endangered Nilgiri Tahr mountain goat. Tour the Tata Tea Museum for tea tasting and stop by Mattupetty Dam and Echo Point.",
        meals: "Breakfast & Dinner Included",
        stay: "Tea Valley Resort / Similar, Munnar",
      },
      {
        day: 3,
        title: "Munnar to Alleppey Private Houseboat Cruise",
        description:
          "Drive to Alleppey. Board your private luxury houseboat at 12:00 noon. Cruise through Vembanad Lake and narrow palm-shaded village canals while savoring traditional Karimeen fish and Malabar delicacies.",
        meals: "Breakfast, Lunch, Evening Tea & Dinner Included",
        stay: "Private Deluxe Houseboat, Alleppey",
      },
      {
        day: 4,
        title: "Disembark Houseboat & Cochin Sightseeing / Departure",
        description:
          "Watch the sunrise over the lagoon. After breakfast, transfer to Fort Kochi to see ancient Chinese Fishing Nets and St. Francis Church before your drop-off at Cochin Airport.",
        meals: "Breakfast Included",
      },
    ],
    included: [
      "2 Nights luxury resort stay in Munnar + 1 Night private houseboat in Alleppey",
      "All meals onboard houseboat (Lunch, High Tea, Dinner, Breakfast)",
      "Daily buffet breakfast at Munnar resort",
      "Private AC sedan/SUV with experienced local driver",
      "Spice plantation walk and tea tasting session",
    ],
    excluded: [
      "Airfare / Train tickets to Cochin",
      "Entry tickets to Eravikulam National Park and Kathakali cultural shows",
      "Ayurvedic massage treatments (can be booked at resort)",
      "Personal expenditures and tips",
    ],
    faqs: [
      {
        question: "Is the houseboat completely private?",
        answer: "Yes! All our houseboat packages include private houseboats with your own captain, engine driver, and personal chef solely serving your group.",
      },
    ],
    reviews: [
      {
        id: "r7",
        author: "Meera Krishnan",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200",
        rating: 5,
        date: "December 2025",
        location: "Bengaluru, India",
        comment: "The Alleppey houseboat experience was surreal. Waking up to water birds and sipping coconut water while floating along the backwaters was pure bliss.",
      },
    ],
  },
];

export function getAllTours(): TourPackage[] {
  return tourPackages;
}

export function getTourByIdOrSlug(idOrSlug: string): TourPackage | undefined {
  const normalized = decodeURIComponent(idOrSlug).toLowerCase().trim();
  return tourPackages.find(
    (tour) =>
      tour.id.toLowerCase() === normalized ||
      tour.slug.toLowerCase() === normalized
  );
}

export function getRelatedTours(currentId: string, limit: number = 3): TourPackage[] {
  return tourPackages
    .filter((tour) => tour.id !== currentId)
    .slice(0, limit);
}
