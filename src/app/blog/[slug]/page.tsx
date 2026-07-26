import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts, getPostBySlug, getAllSlugs } from "../posts";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Tag, Calendar } from "lucide-react";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
    alternates: { canonical: `https://www.thedigitalninjatech.com/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://www.thedigitalninjatech.com/blog/${post.slug}`,
      siteName: "Digital Ninja Technologies",
      type: "article",
      publishedTime: post.publishDate,
      authors: [post.author],
      tags: post.tags,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: ["/og-image.jpg"],
    },
  };
}

function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) { elements.push(<div key={key++} className="h-2" />); continue; }

    if (line.startsWith("## ")) {
      elements.push(<h2 key={key++} className="text-[22px] md:text-[26px] font-semibold text-[#2E2D2D] mt-10 mb-4 tracking-[-0.02em] leading-tight">{line.slice(3)}</h2>);
    } else if (line.startsWith("### ")) {
      elements.push(<h3 key={key++} className="text-lg md:text-xl font-semibold text-[#2E2D2D] mt-7 mb-3 tracking-[-0.02em]">{line.slice(4)}</h3>);
    } else if (line.startsWith("---")) {
      elements.push(<hr key={key++} className="border-[#F2F2F2] my-8" />);
    } else if (line.startsWith("**") && line.endsWith("**") && !line.slice(2, -2).includes("**")) {
      elements.push(<p key={key++} className="font-semibold text-[#2E2D2D] text-base leading-[170%] mb-3">{line.slice(2, -2)}</p>);
    } else if (line.startsWith("| ")) {
      // Table
      const tableLines = [line];
      let j = i + 1;
      while (j < lines.length && lines[j].trim().startsWith("|")) { tableLines.push(lines[j].trim()); j++; }
      i = j - 1;
      const rows = tableLines.filter(l => !l.match(/^\|[-| ]+\|$/));
      elements.push(
        <div key={key++} className="overflow-x-auto my-6 rounded-xl border border-[#F2F2F2]">
          <table className="w-full text-sm">
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri} className={ri === 0 ? "bg-[#FFF0E5]" : ri % 2 === 0 ? "bg-[#FAFAFA]" : "bg-white"}>
                  {row.split("|").filter(Boolean).map((cell, ci) => (
                    ri === 0
                      ? <th key={ci} className="px-4 py-3 text-left font-semibold text-[#FF6602] text-xs uppercase tracking-wide">{cell.trim()}</th>
                      : <td key={ci} className="px-4 py-3 text-[#4D4C4C] border-t border-[#F2F2F2]">{cell.trim()}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else if (line.startsWith("- ")) {
      const items = [line.slice(2)];
      let j = i + 1;
      while (j < lines.length && lines[j].trim().startsWith("- ")) { items.push(lines[j].trim().slice(2)); j++; }
      i = j - 1;
      elements.push(
        <ul key={key++} className="space-y-2 my-4 pl-2">
          {items.map((item, ii) => (
            <li key={ii} className="flex items-start gap-3 text-[#4D4C4C] text-base leading-[170%]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF7E29] shrink-0 mt-2.5" />
              <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-[#FF7E29] hover:underline font-medium">$1</a>') }} />
            </li>
          ))}
        </ul>
      );
    } else if (line.match(/^\d+\. /)) {
      const num = parseInt(line.split(".")[0]);
      const items = [line.slice(line.indexOf(". ") + 2)];
      let j = i + 1;
      while (j < lines.length && lines[j].trim().match(/^\d+\. /)) { items.push(lines[j].trim().slice(lines[j].trim().indexOf(". ") + 2)); j++; }
      i = j - 1;
      elements.push(
        <ol key={key++} className="space-y-2 my-4 pl-2" start={num}>
          {items.map((item, ii) => (
            <li key={ii} className="flex items-start gap-3 text-[#4D4C4C] text-base leading-[170%]">
              <span className="text-[#FF7E29] font-bold text-sm shrink-0 w-5 mt-0.5">{num + ii}.</span>
              <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
            </li>
          ))}
        </ol>
      );
    } else {
      const html = line
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-[#FF7E29] hover:underline font-medium">$1</a>');
      elements.push(<p key={key++} className="text-[#4D4C4C] text-base md:text-[17px] leading-[175%] mb-4" dangerouslySetInnerHTML={{ __html: html }} />);
    }
  }
  return elements;
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const currentIndex = posts.findIndex((p) => p.slug === slug);
  const prev = posts[currentIndex - 1];
  const next = posts[currentIndex + 1];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    author: { "@type": "Organization", name: "Digital Ninja Technologies", url: "https://www.thedigitalninjatech.com" },
    publisher: { "@type": "Organization", name: "Digital Ninja Technologies", url: "https://www.thedigitalninjatech.com" },
    datePublished: post.publishDate,
    url: `https://www.thedigitalninjatech.com/blog/${post.slug}`,
    keywords: post.tags.join(", "),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-white">

        {/* Hero */}
        <div className="bg-[#0A0E1A] pt-32 pb-16 px-4">
          <div className="max-w-3xl mx-auto">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[#6B6A6A] hover:text-white text-sm mb-8 transition-colors duration-200">
              <ArrowLeft className="w-4 h-4" /> Back to blog
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF7E29] bg-[#FF7E29]/10 border border-[#FF7E29]/30 px-3 py-1.5 rounded-full">
                <Tag className="w-3 h-3" />{post.category}
              </span>
              <span className="text-[#6B6A6A] text-xs flex items-center gap-1.5"><Clock className="w-3 h-3" />{post.readTime}</span>
              <span className="text-[#6B6A6A] text-xs flex items-center gap-1.5"><Calendar className="w-3 h-3" />{new Date(post.publishDate).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</span>
            </div>
            <h1 className="text-[28px] sm:text-[36px] md:text-[44px] font-semibold leading-[112%] tracking-[-0.03em] text-white mb-6">
              {post.title}
            </h1>
            <p className="text-[#8A8888] text-lg leading-[170%]">{post.excerpt}</p>
          </div>
        </div>

        {/* Content */}
        <div className="px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="prose-custom">
              {renderContent(post.content)}
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-[#F2F2F2]">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#999797] mb-3">Tags</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-[#F5F5F3] text-[#6B6A6A] px-3 py-1.5 rounded-full">{tag}</span>
                ))}
              </div>
            </div>

            {/* CTA box */}
            <div className="mt-12 bg-gradient-to-r from-[#FF6602] to-[#FF7E29] rounded-3xl p-8 text-center">
              <p className="text-white/80 text-sm font-semibold uppercase tracking-widest mb-3">Work with us</p>
              <h3 className="text-white text-2xl font-semibold leading-tight mb-4">
                Need help building your digital presence?
              </h3>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                Digital Ninja Technologies builds websites, mobile apps, and digital products for businesses and startups worldwide.
              </p>
              <Link href="/booking">
                <button className="inline-flex items-center gap-2 bg-white text-[#FF6602] font-semibold text-sm py-3 px-8 rounded-full hover:bg-[#FFF0E5] transition-colors duration-200">
                  Book a free 15min call <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>

            {/* Prev / Next */}
            {(prev || next) && (
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
                {prev && (
                  <Link href={`/blog/${prev.slug}`} className="group p-6 rounded-2xl border border-[#F2F2F2] hover:border-[#FFE0CC] transition-colors duration-200">
                    <p className="text-xs text-[#999797] mb-2 flex items-center gap-1"><ArrowLeft className="w-3 h-3" /> Previous</p>
                    <p className="font-semibold text-[#2E2D2D] text-sm leading-snug group-hover:text-[#FF6602] transition-colors">{prev.title}</p>
                  </Link>
                )}
                {next && (
                  <Link href={`/blog/${next.slug}`} className="group p-6 rounded-2xl border border-[#F2F2F2] hover:border-[#FFE0CC] transition-colors duration-200 text-right ml-auto w-full">
                    <p className="text-xs text-[#999797] mb-2 flex items-center gap-1 justify-end">Next <ArrowRight className="w-3 h-3" /></p>
                    <p className="font-semibold text-[#2E2D2D] text-sm leading-snug group-hover:text-[#FF6602] transition-colors">{next.title}</p>
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
