export type Testimonial = {
  name: string;
  location: string;
  rating: number;
  quote: string;
  service: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Amaka O.",
    location: "Wuse II, Abuja",
    rating: 5,
    quote:
      "I schedule a pickup on my way to work and the tracking updates are so accurate I know exactly when to expect delivery. It's changed how I plan my week.",
    service: "Wash & Fold Subscription",
  },
  {
    name: "Tunde B.",
    location: "Maitama, Abuja",
    rating: 5,
    quote:
      "Sent my wedding suit in for dry cleaning the week of the event and it came back perfectly pressed a full day early. Genuinely reassuring service.",
    service: "Dry Cleaning",
  },
  {
    name: "Grace N.",
    location: "Garki, Abuja",
    rating: 4,
    quote:
      "Our clinic switched to Bernit for scrubs and linens last quarter. Consistent hygiene standards and the billing is refreshingly simple.",
    service: "Hospital Laundry",
  },
  {
    name: "Ifeoma C.",
    location: "Jabi, Abuja",
    rating: 5,
    quote:
      "The QR code on my order let the front desk verify pickup in seconds. Small detail, but it tells you the whole system was actually thought through.",
    service: "Express Laundry",
  },
  {
    name: "Daniel K.",
    location: "Asokoro, Abuja",
    rating: 5,
    quote:
      "My rug had a sentimental stain I thought was permanent. The specialists explained the process up front and it came back looking new.",
    service: "Rug Cleaning",
  },
  {
    name: "Bisola A.",
    location: "Life Camp, Abuja",
    rating: 4,
    quote:
      "Corporate account for our front-office uniforms has been seamless — one invoice a month and pickups that never slip the schedule.",
    service: "Corporate Laundry",
  },
];
