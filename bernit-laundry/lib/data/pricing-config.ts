export const CURRENCY = "₦";

export type ServiceTypeId = "wash-fold" | "dry-cleaning" | "ironing" | "specialty";

export const serviceTypeOptions: {
  id: ServiceTypeId;
  label: string;
  unit: "kg" | "item";
  baseRate: number;
  minCharge: number;
  helper: string;
}[] = [
  {
    id: "wash-fold",
    label: "Laundry — Wash & Fold",
    unit: "kg",
    baseRate: 700,
    minCharge: 3500,
    helper: "Priced per kilogram, 5kg minimum charge applies.",
  },
  {
    id: "dry-cleaning",
    label: "Dry Cleaning",
    unit: "item",
    baseRate: 1800,
    minCharge: 1800,
    helper: "Priced per garment.",
  },
  {
    id: "ironing",
    label: "Ironing & Pressing",
    unit: "item",
    baseRate: 500,
    minCharge: 2000,
    helper: "Priced per garment, finished on hangers.",
  },
  {
    id: "specialty",
    label: "Specialty — rugs, curtains, wedding & suits",
    unit: "item",
    baseRate: 6000,
    minCharge: 6000,
    helper: "Priced per item; final quote confirmed after inspection.",
  },
];

export type UrgencyId = "standard" | "express" | "same-day";

export const urgencyOptions: { id: UrgencyId; label: string; multiplier: number; helper: string }[] = [
  { id: "standard", label: "Standard (48–72 hrs)", multiplier: 1, helper: "No rush fee." },
  { id: "express", label: "Express (24 hrs)", multiplier: 1.4, helper: "+40% rush fee." },
  { id: "same-day", label: "Same-Day", multiplier: 1.8, helper: "+80% rush fee, subject to slot availability." },
];

export const distanceConfig = {
  freeRadiusKm: 5,
  feePerKmBeyondFree: 150,
};

export const specialCareFee = 1000;
