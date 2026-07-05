"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Sparkles, ArrowRight } from "lucide-react";
import { GlassCard } from "@/components/shared/glass-card";
import { Button } from "@/components/shared/button";
import { cn } from "@/lib/utils";
import {
  serviceTypeOptions,
  urgencyOptions,
  distanceConfig,
  specialCareFee,
  type ServiceTypeId,
  type UrgencyId,
} from "@/lib/data/pricing-config";
import { estimatePrice, formatNaira } from "@/lib/pricing";

export function PricingCalculator() {
  const [serviceType, setServiceType] = useState<ServiceTypeId>("wash-fold");
  const [weightKg, setWeightKg] = useState(6);
  const [itemCount, setItemCount] = useState(3);
  const [pickupDistanceKm, setPickupDistanceKm] = useState(4);
  const [deliveryDistanceKm, setDeliveryDistanceKm] = useState(4);
  const [urgency, setUrgency] = useState<UrgencyId>("standard");
  const [specialCare, setSpecialCare] = useState(false);

  const service = serviceTypeOptions.find((s) => s.id === serviceType)!;

  const breakdown = useMemo(
    () =>
      estimatePrice({
        serviceType,
        weightKg,
        itemCount,
        pickupDistanceKm,
        deliveryDistanceKm,
        urgency,
        specialCare,
      }),
    [serviceType, weightKg, itemCount, pickupDistanceKm, deliveryDistanceKm, urgency, specialCare]
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-start">
      {/* Inputs */}
      <div className="space-y-8">
        {/* Service type */}
        <fieldset>
          <legend className="font-display text-sm font-semibold text-foreground">Service type</legend>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {serviceTypeOptions.map((option) => (
              <label
                key={option.id}
                className={cn(
                  "cursor-pointer rounded-xl border p-4 transition-colors",
                  serviceType === option.id
                    ? "border-brand bg-brand/5"
                    : "border-border-soft bg-surface hover:border-brand/30"
                )}
              >
                <input
                  type="radio"
                  name="serviceType"
                  value={option.id}
                  checked={serviceType === option.id}
                  onChange={() => setServiceType(option.id)}
                  className="sr-only"
                />
                <p className="text-sm font-medium text-foreground">{option.label}</p>
                <p className="mt-1 text-xs text-muted">{option.helper}</p>
              </label>
            ))}
          </div>
        </fieldset>

        {/* Quantity */}
        <fieldset>
          {service.unit === "kg" ? (
            <>
              <legend className="flex items-center justify-between font-display text-sm font-semibold text-foreground">
                <span>Estimated weight</span>
                <span className="font-data text-brand">{weightKg.toFixed(1)} kg</span>
              </legend>
              <input
                type="range"
                min={1}
                max={30}
                step={0.5}
                value={weightKg}
                onChange={(e) => setWeightKg(Number(e.target.value))}
                className="mt-3 w-full accent-[var(--color-brand)]"
              />
              <div className="mt-1 flex justify-between text-xs text-muted">
                <span>1 kg</span>
                <span>30 kg</span>
              </div>
            </>
          ) : (
            <>
              <legend className="flex items-center justify-between font-display text-sm font-semibold text-foreground">
                <span>Number of items</span>
                <span className="font-data text-brand">{itemCount}</span>
              </legend>
              <input
                type="range"
                min={1}
                max={20}
                step={1}
                value={itemCount}
                onChange={(e) => setItemCount(Number(e.target.value))}
                className="mt-3 w-full accent-[var(--color-brand)]"
              />
              <div className="mt-1 flex justify-between text-xs text-muted">
                <span>1 item</span>
                <span>20 items</span>
              </div>
            </>
          )}
        </fieldset>

        {/* Distance */}
        <fieldset className="grid gap-6 sm:grid-cols-2">
          <div>
            <legend className="flex items-center justify-between font-display text-sm font-semibold text-foreground">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-brand" /> Pickup distance
              </span>
              <span className="font-data text-brand">{pickupDistanceKm} km</span>
            </legend>
            <input
              type="range"
              min={0}
              max={25}
              step={1}
              value={pickupDistanceKm}
              onChange={(e) => setPickupDistanceKm(Number(e.target.value))}
              className="mt-3 w-full accent-[var(--color-brand)]"
            />
          </div>
          <div>
            <legend className="flex items-center justify-between font-display text-sm font-semibold text-foreground">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-brand" /> Delivery distance
              </span>
              <span className="font-data text-brand">{deliveryDistanceKm} km</span>
            </legend>
            <input
              type="range"
              min={0}
              max={25}
              step={1}
              value={deliveryDistanceKm}
              onChange={(e) => setDeliveryDistanceKm(Number(e.target.value))}
              className="mt-3 w-full accent-[var(--color-brand)]"
            />
          </div>
          <p className="col-span-full text-xs text-muted">
            First {distanceConfig.freeRadiusKm} km combined is free. {formatNaira(distanceConfig.feePerKmBeyondFree)}
            /km beyond that.
          </p>
        </fieldset>

        {/* Urgency */}
        <fieldset>
          <legend className="font-display text-sm font-semibold text-foreground">Urgency</legend>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {urgencyOptions.map((option) => (
              <label
                key={option.id}
                className={cn(
                  "cursor-pointer rounded-xl border p-4 text-center transition-colors",
                  urgency === option.id
                    ? "border-brand bg-brand/5"
                    : "border-border-soft bg-surface hover:border-brand/30"
                )}
              >
                <input
                  type="radio"
                  name="urgency"
                  value={option.id}
                  checked={urgency === option.id}
                  onChange={() => setUrgency(option.id)}
                  className="sr-only"
                />
                <p className="text-sm font-medium text-foreground">{option.label}</p>
                <p className="mt-1 text-xs text-muted">{option.helper}</p>
              </label>
            ))}
          </div>
        </fieldset>

        {/* Special care */}
        <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-border-soft bg-surface p-4">
          <input
            type="checkbox"
            checked={specialCare}
            onChange={(e) => setSpecialCare(e.target.checked)}
            className="mt-0.5 h-4 w-4 accent-[var(--color-brand)]"
          />
          <span>
            <span className="flex items-center gap-1.5 text-sm font-medium text-foreground">
              <Sparkles className="h-3.5 w-3.5 text-brand" /> Special care (+{formatNaira(specialCareFee)})
            </span>
            <span className="mt-0.5 block text-xs text-muted">
              Delicate fabrics, stain pre-treatment, or hand-finishing.
            </span>
          </span>
        </label>
      </div>

      {/* Summary */}
      <div className="lg:sticky lg:top-24">
        <GlassCard className="p-6 sm:p-7">
          <p className="font-display text-sm font-semibold text-foreground">Estimated total</p>
          <p className="text-xs text-muted">{breakdown.serviceLabel} · {breakdown.quantityLabel}</p>

          <AnimatePresence mode="wait">
            <motion.p
              key={breakdown.total}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="mt-3 font-display text-4xl font-bold text-brand"
            >
              {formatNaira(breakdown.total)}
            </motion.p>
          </AnimatePresence>

          <div className="mt-6 space-y-2.5 border-t border-border-soft pt-5 text-sm">
            <Row label="Base charge" value={formatNaira(breakdown.baseAmount)} />
            <Row label="Distance fee" value={formatNaira(breakdown.distanceFee)} />
            <Row label="Urgency fee" value={formatNaira(breakdown.urgencyFee)} />
            <Row label="Special care" value={formatNaira(breakdown.specialCareFee)} />
          </div>

          <Button href="#contact" className="mt-6 w-full justify-center">
            Book this order
            <ArrowRight className="h-4 w-4" />
          </Button>
          <p className="mt-3 text-center text-xs text-muted">
            Estimate only — final price confirmed at pickup after inspection.
          </p>
        </GlassCard>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-muted">
      <span>{label}</span>
      <span className="font-data text-foreground">{value}</span>
    </div>
  );
}
