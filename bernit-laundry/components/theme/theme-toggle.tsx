"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      suppressHydrationWarning
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-border-soft bg-surface text-foreground transition-colors hover:border-brand/40 hover:text-brand"
    >
      <Sun className="h-[18px] w-[18px] scale-100 dark:scale-0 transition-transform duration-300" />
      <Moon className="absolute h-[18px] w-[18px] scale-0 dark:scale-100 transition-transform duration-300" />
    </button>
  );
}
