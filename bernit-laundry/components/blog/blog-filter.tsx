"use client";

import { useState } from "react";
import { BlogCard } from "./blog-card";
import type { BlogPost, BlogCategory } from "@/lib/data/blog-posts";
import { cn } from "@/lib/utils";

const categories: (BlogCategory | "All")[] = [
  "All",
  "Laundry Tips",
  "Fabric Care",
  "Stain Removal",
  "Company News",
  "Promotions",
];

export function BlogFilter({ posts }: { posts: BlogPost[] }) {
  const [active, setActive] = useState<(BlogCategory | "All")>("All");
  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              active === category
                ? "border-brand bg-brand text-white"
                : "border-border-soft bg-surface text-muted hover:border-brand/40 hover:text-foreground"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-sm text-muted">No posts in this category yet.</p>
      )}
    </div>
  );
}
