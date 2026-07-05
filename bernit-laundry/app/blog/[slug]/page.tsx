import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { BlogCard } from "@/components/blog/blog-card";
import { blogPosts } from "@/lib/data/blog-posts";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: "article" },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2);

  return (
    <article className="py-14 sm:py-20">
      <Container className="max-w-3xl">
        <Reveal>
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-brand">
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to blog
          </Link>

          <div className="mt-6 flex items-center gap-3 font-data text-xs uppercase tracking-wide text-brand">
            <span>{post.category}</span>
            <span className="text-border-soft">·</span>
            <time dateTime={post.date} className="text-muted normal-case tracking-normal">
              {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
            </time>
            <span className="text-border-soft">·</span>
            <span className="text-muted normal-case tracking-normal">{post.readTime}</span>
          </div>

          <h1 className="mt-4 text-balance font-display text-3xl font-bold text-foreground sm:text-4xl">
            {post.title}
          </h1>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="prose-none mt-8 space-y-5">
            {post.body.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-foreground/90">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
      </Container>

      {related.length > 0 && (
        <Container className="mt-16 max-w-3xl border-t border-border-soft pt-12">
          <p className="font-display text-sm font-semibold text-foreground">More on {post.category}</p>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {related.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </Container>
      )}
    </article>
  );
}
