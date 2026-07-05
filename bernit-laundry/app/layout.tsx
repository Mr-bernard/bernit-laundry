import type { Metadata } from "next";
import { sora, manrope, jetbrainsMono } from "@/lib/fonts";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const siteUrl = "https://www.bernitlaundry.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bernit Laundry — Professional Laundry & Dry Cleaning, Delivered",
    template: "%s | Bernit Laundry",
  },
  description:
    "Bernit Laundry is a solar-powered, smart laundry and dry cleaning service with real-time order tracking and free doorstep pickup & delivery across Abuja.",
  keywords: [
    "laundry service Abuja",
    "dry cleaning Abuja",
    "laundry pickup and delivery",
    "Bernit Laundry",
    "solar powered laundry",
  ],
  openGraph: {
    title: "Bernit Laundry — Professional Laundry & Dry Cleaning, Delivered",
    description:
      "Solar-powered laundry and dry cleaning with real-time tracking and free doorstep pickup & delivery.",
    url: siteUrl,
    siteName: "Bernit Laundry",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bernit Laundry — Professional Laundry & Dry Cleaning, Delivered",
    description:
      "Solar-powered laundry and dry cleaning with real-time tracking and free doorstep pickup & delivery.",
  },
  robots: { index: true, follow: true },
};

const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('bernit-theme');
    var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (theme === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${manrope.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-screen bg-background font-body text-foreground antialiased" suppressHydrationWarning>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
