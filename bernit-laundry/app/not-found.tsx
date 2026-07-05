import { Truck } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/shared/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center py-20">
      <Container className="text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand">
          <Truck className="h-6 w-6" />
        </span>
        <h1 className="mt-6 font-display text-3xl font-bold text-foreground sm:text-4xl">
          This order took a wrong turn
        </h1>
        <p className="mx-auto mt-3 max-w-sm text-base text-muted">
          We couldn&apos;t find the page you&apos;re looking for. It may have been moved or the link is out of date.
        </p>
        <Button href="/" className="mt-8">
          Back to Home
        </Button>
      </Container>
    </section>
  );
}
