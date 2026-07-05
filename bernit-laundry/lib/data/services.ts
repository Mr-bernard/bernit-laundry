import {
  Shirt,
  Sparkles,
  WandSparkles,
  Zap,
  Building2,
  Building,
  HeartPulse,
  Waves,
  LayoutGrid,
  CircleDot,
  Footprints,
  ShoppingBag,
  Gem,
  UserRound,
  Truck,
  Repeat,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  icon: LucideIcon;
  turnaround: string;
  category: "Everyday" | "Specialty" | "Business" | "Plans";
};

export const services: Service[] = [
  {
    slug: "laundry",
    name: "Laundry — Wash & Fold",
    short: "Everyday wash, dry and fold.",
    description:
      "Your everyday clothes and linens washed with premium detergents, dried, folded and returned neatly bagged and ready to put away.",
    icon: Shirt,
    turnaround: "24–48 hrs",
    category: "Everyday",
  },
  {
    slug: "dry-cleaning",
    name: "Dry Cleaning",
    short: "Gentle solvent cleaning for delicate fabrics.",
    description:
      "Professional dry cleaning for suits, silks, wool and other delicate fabrics that can't go through a standard wash cycle.",
    icon: Sparkles,
    turnaround: "48–72 hrs",
    category: "Everyday",
  },
  {
    slug: "ironing",
    name: "Ironing & Pressing",
    short: "Crisp, pressed finishes on every garment.",
    description:
      "Precision pressing for shirts, trousers and formalwear, finished on hangers so they arrive ready to wear.",
    icon: WandSparkles,
    turnaround: "24 hrs",
    category: "Everyday",
  },
  {
    slug: "express-laundry",
    name: "Express Laundry",
    short: "Same-day turnaround for urgent loads.",
    description:
      "Jump the queue with same-day processing for when you need clean clothes back fast — priced transparently for the extra speed.",
    icon: Zap,
    turnaround: "Same day",
    category: "Everyday",
  },
  {
    slug: "corporate-laundry",
    name: "Corporate Laundry",
    short: "Scheduled linen and uniform care for offices.",
    description:
      "Recurring pickups for staff uniforms, office linens and workwear, with consolidated billing for your business.",
    icon: Building2,
    turnaround: "Scheduled",
    category: "Business",
  },
  {
    slug: "hotel-laundry",
    name: "Hotel Laundry",
    short: "High-volume linen turnaround for hospitality.",
    description:
      "Bulk bedding, towels and guest laundry handled on a schedule built around your occupancy, with quality checks on every batch.",
    icon: Building,
    turnaround: "Contract SLA",
    category: "Business",
  },
  {
    slug: "hospital-laundry",
    name: "Hospital Laundry",
    short: "Hygiene-first processing for care facilities.",
    description:
      "Scrubs, linens and patient bedding processed to strict hygiene standards for clinics and hospitals.",
    icon: HeartPulse,
    turnaround: "Contract SLA",
    category: "Business",
  },
  {
    slug: "curtain-cleaning",
    name: "Curtain Cleaning",
    short: "On-site collection for bulky drapes.",
    description:
      "Full curtain and drapery cleaning, including takedown coordination for heavier or fitted window treatments.",
    icon: Waves,
    turnaround: "3–5 days",
    category: "Specialty",
  },
  {
    slug: "carpet-cleaning",
    name: "Carpet Cleaning",
    short: "Deep cleaning that lifts embedded dirt.",
    description:
      "Deep carpet cleaning that lifts dirt, allergens and odours from fitted and loose carpets alike.",
    icon: LayoutGrid,
    turnaround: "3–5 days",
    category: "Specialty",
  },
  {
    slug: "rug-cleaning",
    name: "Rug Cleaning",
    short: "Careful cleaning for treasured rugs.",
    description:
      "Specialist cleaning for wool, silk and heirloom rugs, with fringe and colour-safe handling throughout.",
    icon: CircleDot,
    turnaround: "3–5 days",
    category: "Specialty",
  },
  {
    slug: "shoe-cleaning",
    name: "Shoe Cleaning",
    short: "Restoring sneakers, leather and suede.",
    description:
      "Deep cleaning and restoration for sneakers, leather shoes and suede, including sole and lace refresh.",
    icon: Footprints,
    turnaround: "2–4 days",
    category: "Specialty",
  },
  {
    slug: "bag-cleaning",
    name: "Bag Cleaning",
    short: "Handbags and backpacks, gently refreshed.",
    description:
      "Interior and exterior cleaning for handbags, backpacks and totes, matched to each material's care requirements.",
    icon: ShoppingBag,
    turnaround: "3–5 days",
    category: "Specialty",
  },
  {
    slug: "wedding-dress-cleaning",
    name: "Wedding Dress Cleaning",
    short: "Preservation-grade care for the big day.",
    description:
      "Gentle preservation cleaning for wedding and occasion gowns, with optional archival boxing after cleaning.",
    icon: Gem,
    turnaround: "5–7 days",
    category: "Specialty",
  },
  {
    slug: "suit-cleaning",
    name: "Suit Cleaning",
    short: "Tailored care that holds a suit's shape.",
    description:
      "Two-piece and three-piece suits cleaned and blocked to hold their shape and finished on a structured hanger.",
    icon: UserRound,
    turnaround: "48–72 hrs",
    category: "Everyday",
  },
  {
    slug: "pickup-delivery",
    name: "Pickup & Delivery",
    short: "Doorstep collection and return, every time.",
    description:
      "Every service includes free doorstep pickup and delivery within our coverage area, tracked from your door back to your door.",
    icon: Truck,
    turnaround: "Included",
    category: "Plans",
  },
  {
    slug: "subscription",
    name: "Monthly Laundry Subscription",
    short: "Recurring pickups at a locked-in rate.",
    description:
      "Set a recurring pickup schedule and weight allowance for a flat monthly rate, with rollover for lighter weeks.",
    icon: Repeat,
    turnaround: "Recurring",
    category: "Plans",
  },
];

export const serviceCategories = ["Everyday", "Specialty", "Business", "Plans"] as const;
