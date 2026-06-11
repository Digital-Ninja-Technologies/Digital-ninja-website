import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        // Allow AI crawlers explicitly
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "Claude-Web",
          "anthropic-ai",
          "PerplexityBot",
          "Googlebot",
          "Bingbot",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://www.thedigitalninjatech.com/sitemap.xml",
    host: "https://www.thedigitalninjatech.com",
  };
}
