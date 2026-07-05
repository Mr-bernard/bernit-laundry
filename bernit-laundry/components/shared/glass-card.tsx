import { cn } from "@/lib/utils";

export function GlassCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/20 bg-white/70 shadow-[0_20px_60px_-15px_rgba(10,23,48,0.25)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]",
        className
      )}
    >
      {children}
    </div>
  );
}
