import Link from "next/link";
import { Mail, MapPin, Phone, Leaf } from "lucide-react";
import { Logo } from "./logo";
import { Container } from "@/components/shared/container";
import { footerCompanyLinks, footerServiceLinks } from "@/lib/data/nav";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border-soft bg-surface">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Professional laundry &amp; dry cleaning services delivered to your doorstep — solar-powered,
            tracked in real time, from Abuja and beyond.
          </p>
          <div className="mt-5 flex items-center gap-2 rounded-full bg-surface-2 px-3 py-1.5 text-xs font-medium text-foreground w-fit">
            <Leaf className="h-3.5 w-3.5 text-brand" />
            Solar-powered facility
          </div>
        </div>

        <div>
          <p className="font-display text-sm font-semibold text-foreground">Services</p>
          <ul className="mt-4 space-y-2.5">
            {footerServiceLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-muted hover:text-brand">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-semibold text-foreground">Company</p>
          <ul className="mt-4 space-y-2.5">
            {footerCompanyLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-muted hover:text-brand">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-semibold text-foreground">Get in touch</p>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-2.5 text-sm text-muted">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              Plot 14, Adetokunbo Ademola Crescent, Wuse II, Abuja, Nigeria
            </li>
            <li className="flex items-center gap-2.5 text-sm text-muted">
              <Phone className="h-4 w-4 shrink-0 text-brand" />
              +234 800 000 0000
            </li>
            <li className="flex items-center gap-2.5 text-sm text-muted">
              <Mail className="h-4 w-4 shrink-0 text-brand" />
              hello@bernitlaundry.com
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-border-soft py-6">
        <Container className="flex flex-col items-center justify-between gap-3 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Bernit Global Limited. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/about" className="hover:text-brand">
              Sustainability
            </Link>
            <Link href="/blog" className="hover:text-brand">
              Blog
            </Link>
            <Link href="/pricing" className="hover:text-brand">
              Pricing
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
