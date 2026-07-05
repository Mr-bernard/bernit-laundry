"use client";

import { motion } from "framer-motion";
import { Truck, CalendarClock, Sparkles, MessageCircle, Sun } from "lucide-react";
import { Container } from "@/components/shared/container";
import { GlassCard } from "@/components/shared/glass-card";
import { TrackingStrip } from "@/components/shared/tracking-strip";
import { Button } from "@/components/shared/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-14 sm:pt-20 lg:pb-28 lg:pt-24">
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 right-[-10%] h-[420px] w-[420px] animate-drift rounded-full bg-royal-500/20 blur-[110px]" />
        <div className="absolute -bottom-40 left-[-10%] h-[420px] w-[420px] animate-drift rounded-full bg-gold-500/10 blur-[110px] [animation-delay:-9s]" />
      </div>

      <Container className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-surface px-3.5 py-1.5 text-xs font-medium text-muted"
          >
            <Sun className="h-3.5 w-3.5 text-accent" />
            Solar-powered · Real-time tracking · Doorstep service
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 text-balance text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl"
          >
            Fresh laundry,
            <br />
            <span className="text-brand">delivered</span> on your time.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 max-w-lg text-balance text-lg leading-relaxed text-muted"
          >
            Professional laundry and dry cleaning, picked up from your door and tracked every step
            back — washed by a facility that never stops for a power cut.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button href="/pricing" size="lg">
              <Truck className="h-4 w-4" />
              Book a Pickup
            </Button>
            <Button href="/pricing" variant="outline" size="lg">
              <CalendarClock className="h-4 w-4" />
              Schedule Delivery
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 flex flex-wrap items-center gap-3"
          >
            <Button href="/pricing" variant="ghost" size="md" className="!px-0 hover:!bg-transparent">
              <Sparkles className="h-4 w-4 text-brand" />
              Get an instant quote
            </Button>
            <span className="text-border-soft">·</span>
            <Button href="#contact" variant="ghost" size="md" className="!px-0 hover:!bg-transparent">
              <MessageCircle className="h-4 w-4 text-brand" />
              Contact us
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <GlassCard className="p-6 sm:p-7">
            <div className="flex items-center justify-between">
              <p className="font-display text-sm font-semibold text-foreground">Order #BLN-40218</p>
              <span className="rounded-full bg-brand/10 px-2.5 py-1 text-[11px] font-medium text-brand">
                In Progress
              </span>
            </div>
            <TrackingStrip className="mt-6" />
          </GlassCard>

          <GlassCard className="absolute -bottom-8 -left-6 hidden w-52 p-4 sm:block">
            <p className="font-data text-[11px] uppercase tracking-widest text-muted">This week</p>
            <p className="mt-1 font-display text-2xl font-bold text-foreground">1,248</p>
            <p className="text-xs text-muted">orders delivered on time</p>
          </GlassCard>
        </motion.div>
      </Container>
    </section>
  );
}
