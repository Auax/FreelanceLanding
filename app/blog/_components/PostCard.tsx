import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import type { BlogPost } from "@/lib/blog";
import { formatBlogDate, getClusterLabel } from "@/lib/blog";

type PostCardProps = {
  post: BlogPost;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="group flex h-full flex-col border-t border-border pt-6">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-text-secondary">
        <span>{getClusterLabel(post.cluster)}</span>
        {post.datePublished ? (
          <>
            <span aria-hidden="true">·</span>
            <time dateTime={post.datePublished}>{formatBlogDate(post.datePublished)}</time>
          </>
        ) : null}
      </div>
      <h2 className="mt-4 text-2xl font-medium leading-tight tracking-[-0.025em] text-text-primary">
        <Link
          href={`/blog/${post.slug}`}
          className="transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          {post.title}
        </Link>
      </h2>
      <p className="mt-3 flex-1 text-[15px] leading-7 text-text-secondary">
        {post.description}
      </p>
      <Link
        href={`/blog/${post.slug}`}
        className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        aria-label={`Leer: ${post.title}`}
      >
        Leer artículo
        <ArrowUpRight
          className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </Link>
    </article>
  );
}
