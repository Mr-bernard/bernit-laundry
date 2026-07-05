import {
  serviceTypeOptions,
  urgencyOptions,
  distanceConfig,
  specialCareFee,
  type ServiceTypeId,
  type UrgencyId,
} from "@/lib/data/pricing-config";

export type PricingInput = {
  serviceType: ServiceTypeId;
  weightKg: number;
  itemCount: number;
  pickupDistanceKm: number;
  deliveryDistanceKm: number;
  urgency: UrgencyId;
  specialCare: boolean;
};

export type PricingBreakdown = {
  serviceLabel: string;
  baseAmount: number;
  distanceFee: number;
  urgencyFee: number;
  specialCareFee: number;
  subtotal: number;
  total: number;
  quantityLabel: string;
};

export function estimatePrice(input: PricingInput): PricingBreakdown {
  const service = serviceTypeOptions.find((s) => s.id === input.serviceType) ?? serviceTypeOptions[0];
  const urgency = urgencyOptions.find((u) => u.id === input.urgency) ?? urgencyOptions[0];

  const quantity = service.unit === "kg" ? Math.max(input.weightKg, 0) : Math.max(input.itemCount, 0);
  const rawBase = quantity * service.baseRate;
  const baseAmount = Math.max(rawBase, service.minCharge);

  const totalDistance = Math.max(input.pickupDistanceKm, 0) + Math.max(input.deliveryDistanceKm, 0);
  const billableDistance = Math.max(totalDistance - distanceConfig.freeRadiusKm, 0);
  const distanceFee = Math.round(billableDistance * distanceConfig.feePerKmBeyondFree);

  const preUrgencySubtotal = baseAmount + distanceFee;
  const urgencyFee = Math.round(preUrgencySubtotal * (urgency.multiplier - 1));

  const specialCareAmount = input.specialCare ? specialCareFee : 0;

  const subtotal = baseAmount + distanceFee;
  const total = subtotal + urgencyFee + specialCareAmount;

  return {
    serviceLabel: service.label,
    baseAmount,
    distanceFee,
    urgencyFee,
    specialCareFee: specialCareAmount,
    subtotal,
    total,
    quantityLabel:
      service.unit === "kg" ? `${quantity.toFixed(1)} kg` : `${quantity} item${quantity === 1 ? "" : "s"}`,
  };
}

export function formatNaira(amount: number): string {
  return `₦${Math.round(amount).toLocaleString("en-NG")}`;
}
