import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/shared/container";
import { BlogFilter } from "@/components/blog/blog-filter";
import { Newsletter } from "@/components/home/newsletter";
import { blogPosts } from "@/lib/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Laundry tips, fabric care guides, stain-removal advice, and company news from Bernit Laundry.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Fabric care, stain removal, and what we're building"
        description="Practical laundry knowledge from our processing floor, plus the occasional update on the company itself."
      />
      <section className="py-16 sm:py-20">
        <Container>
          <BlogFilter posts={blogPosts} />
        </Container>
      </section>
      <Newsletter />
    </>
  );
}
