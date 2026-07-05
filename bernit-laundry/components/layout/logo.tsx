import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2 group", className)}>
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-white">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M8 3.5c0 2-2 2.6-2 5.2 0 3 2.7 4.3 2.7 4.3S7 14.5 7 16.8C7 19.9 9.2 22 12 22s5-2.1 5-5.2c0-3.2-2.7-5-2.7-8.1 0-2 1.7-2.8 1.7-5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="16.6" r="2.1" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      </span>
      <span className="font-display text-lg font-bold tracking-tight text-foreground">
        Bernit<span className="text-brand">.</span>
      </span>
    </Link>
  );
}
