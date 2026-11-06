export const caseStudies = [
  {
    id: "accor-restaurants-bars",
    title: "Accor Restaurants & Bars",
    subtitle: "Global Dining & Culinary Experience Discovery Platform",
    client: "Accor Group",
    service: "Custom Websites",
    category: "Hospitality & Gastronomy",
    url: "https://restaurantsandbars.accor.com/",
    domain: "restaurantsandbars.accor.com",
    image: "/images/portfolio-accor.jpg",
    tags: ["Custom Website", "Global Multi-Language", "Interactive Directory", "Enterprise Architecture"],
    metricHighlight: "+145% Mobile Bookings",
    stats: [
      { label: "Global Reach", value: "110+ Countries" },
      { label: "Venues Indexed", value: "3,000+ Venues" },
      { label: "Page Load Speed", value: "< 0.8s FCP" },
      { label: "UX Rating", value: "4.9 / 5.0" }
    ],
    overview:
      "Accor is one of the world's largest hospitality groups. They required a global, multi-lingual culinary directory to connect international travelers with thousands of luxury hotel restaurants, rooftop bars, and Michelin-starred dining destinations.",
    challenge:
      "The existing discovery experience suffered from high latency across international regions, fragmented mobile booking funnels, and difficulty searching across thousands of venues across 110+ countries with varied currencies and languages.",
    solution:
      "We engineered a bespoke, headless web architecture paired with edge caching and dynamic geo-location routing. Every page loads in sub-second time worldwide, featuring instant filterable venue directories and intuitive reservation triggers.",
    architecture: [
      "Next.js & React headless component architecture",
      "Dynamic location-aware discovery filter for worldwide destinations",
      "Global CDN edge caching delivering sub-second response times",
      "Multi-currency & multi-lingual content delivery network",
      "Mobile-first responsive booking funnels"
    ],
    results: [
      "145% increase in mobile reservation start rates within 90 days",
      "Sub-0.8s First Contentful Paint globally",
      "Over 3,000 dining venues seamlessly indexed with zero downtime"
    ]
  },
  {
    id: "the-hogarth-club",
    title: "The Hogarth Health Club",
    subtitle: "Luxury London Health, Wellness & Tennis Club Portal",
    client: "The Hogarth Club",
    service: "Custom Websites",
    category: "Health, Wellness & Luxury Fitness",
    url: "https://www.thehogarth.co.uk/",
    domain: "thehogarth.co.uk",
    image: "/images/portfolio-hogarth.jpg",
    tags: ["Custom Website", "Membership Portal", "Timetable Booking", "Luxury Branding"],
    metricHighlight: "+42% Membership Enquiries",
    stats: [
      { label: "Enquiry Lift", value: "+42%" },
      { label: "Page Load Speed", value: "< 0.7s" },
      { label: "Member Engagement", value: "88% Active" },
      { label: "Mobile Traffic", value: "74% Share" }
    ],
    overview:
      "The Hogarth Club is Chiswick's premier private health, wellness, squash, and tennis facility. The club required a digital experience that mirrors its luxury West London reputation while making class bookings and membership applications effortless.",
    challenge:
      "Legacy website was slow, failed to reflect the premium luxury physical atmosphere of the club, and caused high friction when members attempted to view timetables or submit high-value membership applications.",
    solution:
      "We built a tailored, jet-black and emerald luxury web experience featuring interactive real-time studio timetables, instant class filters, and an automated membership qualification pipeline that directly routes qualified prospects to the sales team.",
    architecture: [
      "Bespoke luxury UI/UX design system with smooth micro-interactions",
      "Interactive studio timetable and class reservation system",
      "Automated lead capture & CRM notification pipeline",
      "Core Web Vitals tuning achieving 99+ mobile performance",
      "Optimized media delivery for high-resolution facility tours"
    ],
    results: [
      "42% increase in high-ticket qualified membership applications",
      "88% active monthly member engagement on class timetables",
      "Page load speed reduced from 3.8s down to under 0.7s"
    ]
  },
  {
    id: "247-fitness",
    title: "24/7 Fitness",
    subtitle: "High-Volume Nationwide Gym Chain Platform",
    client: "24/7 Fitness",
    service: "Custom Websites",
    category: "Fitness & Automated Memberships",
    url: "https://247.fitness/en",
    domain: "247.fitness",
    image: "/images/portfolio-247fitness.jpg",
    tags: ["Custom Website", "Direct Joining Funnel", "Gym Locator", "High Conversion"],
    metricHighlight: "+65% MoM Signups",
    stats: [
      { label: "Direct Signups", value: "+65% MoM" },
      { label: "Bounce Rate", value: "-28%" },
      { label: "System Uptime", value: "99.99%" },
      { label: "Checkout Steps", value: "Reduced to 3" }
    ],
    overview:
      "24/7 Fitness operates around-the-clock fitness centers nationwide. The platform needed to convert high volumes of mobile search traffic into instant automated monthly memberships with automated direct debit enrollment.",
    challenge:
      "Previous multi-step checkout had a 48% drop-off rate on mobile devices, club locator maps loaded sluggishly, and promotional discount campaigns required developer intervention to update.",
    solution:
      "Engineered a frictionless 3-step membership enrollment flow with instant address autofill, real-time club locators with GPS geolocation, and an administrative campaign engine for rapid promotional rollout.",
    architecture: [
      "High-conversion 3-step checkout funnel with integrated payment gateways",
      "Real-time gym locator with dynamic operating hours & facility maps",
      "Failover-safe webhook architecture for membership card creation",
      "Sub-second asset caching tuned for 4G/5G mobile gym visitors",
      "Automated member onboarding email sequences"
    ],
    results: [
      "65% month-over-month increase in direct online membership signups",
      "28% reduction in checkout abandonment rate",
      "99.99% automated payment and membership sync uptime"
    ]
  },
  {
    id: "omniflow-automation",
    title: "OmniFlow Autonomous Lead & Ops Routing",
    subtitle: "Automated Multi-Channel CRM & Invoicing Pipeline",
    client: "Vanguard Growth Partners",
    service: "Workflow Automation",
    category: "Enterprise Automation & Operations",
    url: "https://autoagenix.com",
    domain: "internal-ops.vanguard.com",
    image: "/images/service-workflow-automation.jpg",
    tags: ["Workflow Automation", "CRM Sync", "Webhook Architecture", "Auto Invoicing"],
    metricHighlight: "30+ Hours Saved / Week",
    stats: [
      { label: "Hours Saved", value: "30+ hrs/wk" },
      { label: "Lead Response", value: "< 45 secs" },
      { label: "Error Rate", value: "0.00%" },
      { label: "Pipelines Active", value: "12 Automated" }
    ],
    overview:
      "A fast-growing enterprise advisory firm was losing over 30 hours weekly to manual data re-entry across HubSpot, Google Sheets, Slack, Stripe, and client onboarding documentation.",
    challenge:
      "High-value inbound leads waited an average of 4 hours for first contact. Manual invoicing mistakes caused delayed payments, and client onboarding emails frequently suffered from missing contracts.",
    solution:
      "We architected an autonomous event-driven workflow engine. Inbound leads are instantly enriched, scored, and routed to Slack within 45 seconds. Contracts, Stripe invoices, and private client folders are generated autonomously.",
    architecture: [
      "Autonomous webhook dispatcher with automatic retry and failover alerts",
      "Bi-directional synchronization between HubSpot CRM, Stripe, and Slack",
      "Automated contract generation and electronic signature tracking",
      "Real-time executive KPI dashboard and automated weekly summaries"
    ],
    results: [
      "Reclaimed 30+ operational hours per week across the executive team",
      "Reduced average inbound lead contact time from 4 hours to 45 seconds",
      "Completely eliminated billing errors and late contract dispatches"
    ]
  },
  {
    id: "aurora-digital-engine",
    title: "Aura Luxe Headless Commerce Engine",
    subtitle: "Sub-Second DTC Storefront & Warehouse Fulfillment Pipeline",
    client: "Aura Home Living",
    service: "Custom Websites",
    category: "Luxury E-Commerce & DTC",
    url: "https://autoagenix.com",
    domain: "aurahomeliving.com",
    image: "/images/service-custom-websites.jpg",
    tags: ["Custom Website", "Headless Commerce", "Shopify Storefront", "Micro-Animations"],
    metricHighlight: "3.2x Conversion Velocity",
    stats: [
      { label: "Conversion Lift", value: "+220%" },
      { label: "Mobile Speed", value: "99/100" },
      { label: "Cart Add Rate", value: "+34%" },
      { label: "Checkout Time", value: "< 25 secs" }
    ],
    overview:
      "Aura is a luxury interior architecture and artisanal home decor brand. They required an editorial, magazine-grade headless web experience to showcase high-ticket collections and deliver instant international purchasing.",
    challenge:
      "Standard monolithic e-commerce themes were bloated, leading to 4.5-second load times on mobile, poor Google Core Web Vitals, and an inability to deliver custom 3D micro-animations.",
    solution:
      "We engineered a custom headless React storefront coupled with automated inventory synchronization, instant cart drawer micro-interactions, and sub-second page transitions.",
    architecture: [
      "Custom React frontend with Tailwind and Framer Motion micro-interactions",
      "Edge-rendered product catalog with instant instant search and filters",
      "Automated warehouse inventory and international duty calculation API",
      "Optimized imagery with responsive WebP/AVIF generation"
    ],
    results: [
      "3.2x increase in mobile conversion velocity",
      "Google Lighthouse score elevated from 41 to 99/100",
      "Average session duration increased by 65%"
    ]
  }
];
