"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QrCode, CheckCircle2 } from "lucide-react";

const STAGES = ["Picked Up", "At Facility", "Washing", "Drying & Press", "Quality Check", "Delivered"];

export function TrackingStrip({
  trackingId = "BLN-7K2Q-0931",
  className,
}: {
  trackingId?: string;
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % STAGES.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  const percent = Math.round((index / (STAGES.length - 1)) * 100);

  return (
    <div className={className}>
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand/10 text-brand">
            <QrCode className="h-4 w-4" />
          </span>
          <div>
            <p className="font-data text-[11px] uppercase tracking-widest text-muted">Tracking ID</p>
            <p className="font-data text-sm font-medium text-foreground">{trackingId}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-data text-[11px] uppercase tracking-widest text-muted">Progress</p>
          <p className="font-data text-sm font-semibold text-brand">{percent}%</p>
        </div>
      </div>

      <div className="relative mt-5 h-1.5 rounded-full bg-border-soft">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-brand to-accent"
          animate={{ width: `${percent}%` }}
          transition={{ type: "spring", stiffness: 90, damping: 20 }}
        />
        <motion.div
          className="absolute top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-2 border-accent bg-surface shadow-[0_0_0_4px_rgba(201,162,76,0.18)]"
          animate={{ left: `calc(${percent}% - 7px)` }}
          transition={{ type: "spring", stiffness: 90, damping: 20 }}
        />
      </div>

      <div className="mt-4 flex items-center gap-1.5 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-1.5 text-sm font-medium text-foreground"
          >
            <CheckCircle2 className="h-4 w-4 text-brand" />
            {STAGES[index]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
