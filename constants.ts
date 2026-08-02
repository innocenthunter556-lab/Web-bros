import type { LucideIcon } from "lucide-react";
import {
  Globe, Bot, TrendingUp, MessageCircle, Film, ShoppingBag, Search, Palette,
} from "lucide-react";

export const WA_NUMBER = "916300424639";

export const waLink = (msg: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#footer" },
];

export const ROTATING_WORDS: string[] = [
  "premium websites",
  "AI automation",
  "Meta & Google ads",
  "brand growth",
  "professional content",
];

export interface Service {
  code: string;
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const SERVICES: Service[] = [
  { code: "WEB", icon: Globe, title: "Websites & Web Apps", desc: "Custom-built, fast websites and web apps engineered to convert visitors into customers." },
  { code: "AI", icon: Bot, title: "AI Chatbots & Voice Assistants", desc: "Round-the-clock AI chat and voice assistants that qualify leads and answer customers instantly." },
  { code: "ADS", icon: TrendingUp, title: "Meta & Google Ads", desc: "Performance-driven ad campaigns that turn budget into booked customers, not just clicks." },
  { code: "WA", icon: MessageCircle, title: "WhatsApp Automation", desc: "Automated order, support and follow-up flows on the channel your customers already use." },
  { code: "VID", icon: Film, title: "Video Editing & Colour Grading", desc: "Cinematic editing and luxury colour grading for reels, ads and product films." },
  { code: "SHOP", icon: ShoppingBag, title: "E-commerce & Order Systems", desc: "Full-stack online stores with inventory, payments and order management built in." },
  { code: "SEO", icon: Search, title: "SEO & Google Business Rank", desc: "Rank higher on Google Search and Maps with technical SEO and local optimisation." },
  { code: "BRAND", icon: Palette, title: "Brand Identity & Social Growth", desc: "Complete brand identity plus Instagram and YouTube growth strategy that builds trust fast." },
];

export const TRUST_ITEMS: string[] = [
  "Fast Delivery",
  "Latest Technology",
  "Transparent Pricing",
  "AI Powered",
  "Lifetime Support",
];

export interface WorkSample {
  title: string;
  tag: string;
  note: string;
}

/**
 * Labelled concept builds — not real client work. Swap these for genuine case
 * studies as projects ship; see README for why this matters.
 */
export const WORK_SAMPLES: WorkSample[] = [
  { title: "Boutique & Bridal Wear", tag: "Concept · Fashion", note: "Product catalog, size guide, WhatsApp checkout flow." },
  { title: "Fine Dining Reservations", tag: "Concept · Hospitality", note: "Live table booking, seasonal menu, chef's story." },
  { title: "Clinic Appointment System", tag: "Concept · Healthcare", note: "Doctor calendars, WhatsApp reminders, patient intake." },
  { title: "Real Estate Listings", tag: "Concept · Property", note: "Property walkthroughs, lead capture, EMI calculator." },
  { title: "Salon & Spa Booking", tag: "Concept · Wellness", note: "Slot booking, stylist profiles, loyalty rewards." },
];
