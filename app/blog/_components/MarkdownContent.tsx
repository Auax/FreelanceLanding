import Link from "next/link";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

const components: Components = {
  h1: ({ children }) => (
    <h2 className="mt-12 scroll-mt-28 text-3xl font-medium leading-tight tracking-[-0.025em] text-text-primary">
      {children}
    </h2>
  ),
  h2: ({ children }) => (
    <h2 className="mt-12 scroll-mt-28 text-3xl font-medium leading-tight tracking-[-0.025em] text-text-primary">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-9 scroll-mt-28 text-xl font-medium leading-snug text-text-primary">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mt-5 text-[17px] leading-8 text-text-strong">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="mt-5 list-disc space-y-2 pl-6 text-[17px] leading-8 text-text-strong marker:text-primary">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-5 list-decimal space-y-2 pl-6 text-[17px] leading-8 text-text-strong marker:font-medium marker:text-primary">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="pl-1">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="mt-7 border-l-2 border-primary bg-surface-raised px-6 py-1 text-text-strong">
      {children}
    </blockquote>
  ),
  a: ({ href = "", children }) => {
    const classes =
      "font-medium text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

    if (href.startsWith("/")) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  },
  table: ({ children }) => (
    <div className="mt-7 overflow-x-auto rounded-2xl border border-border">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm leading-6">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-surface-raised">{children}</thead>,
  th: ({ children }) => (
    <th className="border-b border-border px-4 py-3 font-medium text-text-primary">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border-b border-border-subtle px-4 py-3 align-top text-text-strong last:[tr:last-child_&]:border-b-0">
      {children}
    </td>
  ),
  hr: () => <hr className="my-12 border-border" />,
  code: ({ children }) => (
    <code className="rounded bg-surface-hover px-1.5 py-0.5 text-[0.9em] text-text-primary">
      {children}
    </code>
  ),
};

export function MarkdownContent({ content }: { content: string }) {
  return (
    <div>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
