import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/lib/data/blog-posts";

const categoryColor: Record<string, string> = {
  "Laundry Tips": "bg-brand/10 text-brand",
  "Fabric Care": "bg-accent/15 text-gold-600 dark:text-gold-300",
  "Stain Removal": "bg-royal-500/10 text-royal-500",
  "Company News": "bg-navy-900/10 text-navy-900 dark:bg-white/10 dark:text-white",
  Promotions: "bg-accent/15 text-gold-600 dark:text-gold-300",
};

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-border-soft bg-surface p-6 transition-all hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg"
    >
      <div className="flex items-center justify-between">
        <span className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${categoryColor[post.category]}`}>
          {post.category}
        </span>
        <ArrowUpRight className="h-4 w-4 text-muted transition-colors group-hover:text-brand" />
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-foreground">
        {post.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
      <div className="mt-5 flex items-center gap-2 font-data text-xs text-muted">
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
        </time>
        <span>·</span>
        <span>{post.readTime}</span>
      </div>
    </Link>
  );
}
