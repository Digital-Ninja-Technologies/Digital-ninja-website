import MoreProjects from "@/components/More-projects";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Script from "next/script";

// ── Skeleton image component ───────────────────────────────────────────────
function SkeletonImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  "use client";
  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#F5F5F3]">
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent z-10" />
      <img src={src} alt={alt} className={className} loading="lazy" />
    </div>
  );
}

// Project data
const projects = [
  {
    id: "moducode",
    title: "Moducode",
    description: "UX UI Design • B2B SaaS • Talent Platform",
    image: "/moducode-cover.png",
    showcaseType: "standard",
    overview: {
      title: "A trust driven hiring platform connecting global companies with Africa's best engineers.",
      description:
        "Moducode is a talent matching platform focused on helping companies hire vetted remote software and data engineers from Africa. The product positions itself as a bridge between global companies and high quality African tech talent, while simplifying recruitment, onboarding, and management. As the UX UI designer, my role was to design a modern, trust driven experience that communicates professionalism, reduces hiring friction, and guides potential clients toward booking a consultation call.",
      features: {
        mockupImage1: "/moducode-2.png",
        mockupImage2: "/moducode-3.png",
      },
      gallery: [
        "/moducode-cover.png",
        "/moducode-1.png",
        "/moducode-4.png",
        "/moducode-5.png",
        "/moducode-6.png",
        "/moducode-7.png",
        "/moducode-8.png",
      ],
      liveUrl: "https://krevops.com/",
      role: "UX UI Designer",
      responsibilities: [
        "Product discovery and UX direction",
        "User flow planning",
        "Information architecture",
        "Wireframing",
        "High-fidelity UI design",
        "Responsive experience design",
        "Design system consistency",
        "Conversion-focused landing page optimisation",
      ],
      problem: {
        intro:
          "Many companies interested in hiring remote tech talents from emerging markets often face three major concerns:",
        points: [
          { label: "Trust", detail: "Uncertainty around talent quality and professionalism." },
          { label: "Speed", detail: "Long recruitment and onboarding processes." },
          { label: "Clarity", detail: "Unclear understanding of how hiring actually works." },
        ],
        summary:
          "The challenge was to create a website experience that immediately builds confidence while simplifying the path from curiosity to conversion.",
      },
      goals: [
        "Increase consultation bookings",
        "Build instant credibility",
        "Clearly communicate the hiring process",
        "Showcase professionalism without overwhelming users",
        "Create a scalable visual identity for future platform expansion",
      ],
      uxStrategy: [
        {
          step: "01",
          title: "Establish Trust Quickly",
          desc: "The hero section immediately communicates what Moducode does, who it serves, and the value proposition. Reducing cognitive load and helping visitors quickly self identify.",
        },
        {
          step: "02",
          title: "Simplify the Hiring Journey",
          desc: "Instead of presenting complex recruitment workflows, the process was reduced to a clear 3-step system: Book a call → Get matched with talent → Start work. This made the service feel approachable and fast.",
        },
        {
          step: "03",
          title: "Reinforce Credibility",
          desc: "Testimonials and social validation were strategically placed before key conversion sections to reduce hesitation and increase confidence before the ask.",
        },
      ],
      challenges:
        "One of the biggest challenges was balancing startup energy with enterprise-level trust. The platform needed to feel modern and ambitious while still reassuring companies that they were hiring dependable professionals. Another challenge was simplifying a relatively complex recruitment process into an experience that users could understand within seconds.",
      outcome: {
        summary:
          "The design successfully positioned Moducode as a modern African tech talent platform capable of serving global companies professionally.",
        points: [
          "A cleaner and more conversion focused hiring experience",
          "Stronger trust in communication",
          "Clearer user flow",
          "Improved readability and structure",
          "A scalable UI foundation for future platform growth",
        ],
      },
    },
  },
  {
    id: "korlodworks",
    title: "Korlod Works",
    description: "Web Design · Brand Identity · Agency Website",
    image: "/korlod-1.jpg",
    showcaseType: "standard",
    overview: {
      title: "A bold agency website that communicates creativity, builds trust, and converts visitors into clients.",
      description:
        "Korlod Works is a creative agency that builds unique brand experiences through identity design, video, messaging, and web design. The brief was to design and build a website that instantly communicates their creative depth, positions them as a premium agency, and guides visitors toward booking a consultation. The design balances bold visual identity with clear information hierarchy, ensuring the site works as both a portfolio and a lead generation tool.",
      features: {
        mockupImage1: "/korlod-1.jpg",
        mockupImage2: "/korlod-2.jpg",
      },
      liveUrl: "https://korlodworks.com/",
      role: "Web Designer & Developer",
      responsibilities: [
        "Brand direction and visual strategy",
        "Information architecture",
        "UI design and design system",
        "Responsive web development",
        "Conversion rate optimisation",
        "Performance and SEO setup",
      ],
      problem: {
        intro: "Korlod Works needed a digital presence that matched the quality of the brand work they do for clients. The key challenges were:",
        points: [
          { label: "Trust", detail: "Prospective clients needed to immediately trust them as a premium creative partner." },
          { label: "Clarity", detail: "The services and process needed to be communicated quickly and clearly." },
          { label: "Conversion", detail: "The site had to guide visitors toward a consultation call or direct engagement." },
        ],
        summary: "The goal was a website that felt as crafted as the work Korlod Works delivers for its own clients.",
      },
      goals: [
        "Position Korlod Works as a premium creative agency",
        "Drive consultation bookings and direct enquiries",
        "Clearly communicate services and past work",
        "Build instant credibility through design quality",
        "Create a scalable web foundation for future growth",
      ],
      uxStrategy: [
        {
          step: "01",
          title: "Lead with credibility",
          desc: "The hero section immediately communicates what Korlod Works does, who they serve, and the value they bring. Social proof and client logos are placed early to build trust before the ask.",
        },
        {
          step: "02",
          title: "Simplify the service offering",
          desc: "Instead of overwhelming visitors with a long list of services, we organised their offering into clear categories with concise descriptions that help visitors self-identify quickly.",
        },
        {
          step: "03",
          title: "Make next steps obvious",
          desc: "Every section leads to a clear call to action. The consultation booking flow was designed to be as frictionless as possible, reducing drop-off at the most critical conversion point.",
        },
      ],
      challenges: "The biggest challenge was balancing a strong visual personality with clear, structured content. Creative agencies risk websites that look impressive but do not convert. The solution was to let the work speak loudly while keeping the navigation and structure clean and conventional.",
      outcome: {
        summary: "The final site positioned Korlod Works as a credible, premium creative agency with a web presence that reflects the quality of their output.",
        points: [
          "A bold, conversion-focused website that reflects the brand",
          "Clear service structure that helps visitors self-qualify",
          "Streamlined consultation booking flow",
          "Strong visual identity carried consistently across all pages",
          "Improved organic discoverability through SEO-optimised structure",
        ],
      },
      gallery: [
        "/korlod-1.jpg",
        "/korlod-2.jpg",
        "/korlod-3.jpg",
        "/korlod-4.jpg",
      ],
    },
  },
];

function ProjectOverview({ project }: { project: (typeof projects)[0] }) {
  if (!project.overview) return null;
  const o = project.overview;

  return (
    <div className="mt-16 px-4 space-y-20">

      {/* Overview */}
      <div className="flex flex-col md:flex-row gap-12 justify-between">
        <p className="text-[#ff7e29] font-[600] text-sm tracking-wider uppercase shrink-0">
          PROJECT OVERVIEW
        </p>
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-[36px] font-[600] text-gray-900 mb-6 leading-tight">
            {o.title}
          </h2>
          <p className="text-[#4D4C4C] text-lg font-[400] leading-relaxed">
            {o.description}
          </p>
          {o.liveUrl && (
            <a
              href={o.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-[#FF7E29] font-semibold hover:underline text-sm">
              Visit Live Project →
            </a>
          )}
        </div>
      </div>

      {/* Role + Responsibilities */}
      {o.role && o.responsibilities && (
        <div className="flex flex-col md:flex-row gap-12 justify-between">
          <p className="text-[#ff7e29] font-[600] text-sm tracking-wider uppercase shrink-0">
            MY ROLE
          </p>
          <div className="max-w-3xl w-full">
            <p className="font-[600] text-xl text-gray-900 mb-4">{o.role}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {o.responsibilities.map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-[#4D4C4C] text-[15px]">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF7E29] shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Hero screens */}
      {o.features && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[o.features.mockupImage1, o.features.mockupImage2].map((src, i) => (
            <SkeletonImage key={i} src={src} alt={`${project.title} screen ${i + 1}`} className="w-full rounded-2xl shadow-md border border-[#F2F2F2]" />
          ))}
        </div>
      )}

      {/* The Problem */}
      {o.problem && (
        <div className="flex flex-col md:flex-row gap-12 justify-between">
          <p className="text-[#ff7e29] font-[600] text-sm tracking-wider uppercase shrink-0">
            THE PROBLEM
          </p>
          <div className="max-w-3xl w-full">
            <p className="text-[#4D4C4C] text-lg leading-relaxed mb-8">{o.problem.intro}</p>
            <div className="space-y-4">
              {o.problem.points.map((pt, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-2xl border border-[#F2F2F2] bg-[#FAFAFA]">
                  <span className="font-[700] text-[#FF7E29] text-sm shrink-0 mt-0.5">{pt.label}</span>
                  <p className="text-[#4D4C4C] text-[15px] leading-relaxed">{pt.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-[#4D4C4C] text-lg leading-relaxed">{o.problem.summary}</p>
          </div>
        </div>
      )}

      {/* Goals */}
      {o.goals && (
        <div className="flex flex-col md:flex-row gap-12 justify-between">
          <p className="text-[#ff7e29] font-[600] text-sm tracking-wider uppercase shrink-0">
            GOALS
          </p>
          <div className="max-w-3xl w-full">
            <ul className="space-y-3">
              {o.goals.map((g, i) => (
                <li key={i} className="flex items-start gap-3 text-[#4D4C4C] text-[16px]">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#FFF0E5] text-[#FF7E29] text-xs font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* UX Strategy */}
      {o.uxStrategy && (
        <div className="flex flex-col md:flex-row gap-12 justify-between">
          <p className="text-[#ff7e29] font-[600] text-sm tracking-wider uppercase shrink-0">
            UX STRATEGY
          </p>
          <div className="max-w-3xl w-full space-y-6">
            {o.uxStrategy.map((s, i) => (
              <div key={i} className="p-6 rounded-2xl border border-[#F2F2F2] bg-white">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#FF7E29] font-[700] text-sm">{s.step}</span>
                  <h3 className="font-[600] text-gray-900 text-lg">{s.title}</h3>
                </div>
                <p className="text-[#4D4C4C] text-[15px] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* More screens gallery */}
      {o.gallery && o.gallery.length > 0 && (
        <div>
          <p className="text-[#ff7e29] font-[600] text-sm tracking-wider uppercase mb-8">
            MORE SCREENS
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {o.gallery.map((img, i) => (
              <div
                key={i}
                className={`rounded-2xl overflow-hidden shadow-sm border border-[#F2F2F2] ${
                  i === 0 ? "md:col-span-2" : ""
                }`}>
                <SkeletonImage
                  src={img}
                  alt={`${project.title} screen ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Challenges */}
      {o.challenges && (
        <div className="flex flex-col md:flex-row gap-12 justify-between">
          <p className="text-[#ff7e29] font-[600] text-sm tracking-wider uppercase shrink-0">
            CHALLENGES
          </p>
          <div className="max-w-3xl">
            <p className="text-[#4D4C4C] text-lg leading-relaxed">{o.challenges}</p>
          </div>
        </div>
      )}

      {/* Outcome */}
      {o.outcome && (
        <div className="flex flex-col md:flex-row gap-12 justify-between">
          <p className="text-[#ff7e29] font-[600] text-sm tracking-wider uppercase shrink-0">
            OUTCOME
          </p>
          <div className="max-w-3xl w-full">
            <ul className="space-y-3 mb-8">
              {o.outcome.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-3 text-[#4D4C4C] text-[16px]">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF7E29] shrink-0" />
                  {pt}
                </li>
              ))}
            </ul>
            <p className="text-[#4D4C4C] text-lg leading-relaxed italic border-l-4 border-[#FF7E29] pl-5">
              {o.outcome.summary}
            </p>
          </div>
        </div>
      )}

    </div>
  );
}

// Single reusable ProjectShowcase component
function ProjectShowcase({ project }: { project: (typeof projects)[0] }) {
  if (project.showcaseType === "featured") {
    return (
      <div className="flex mt-1 justify-center max-w-[75rem] mx-auto">
        <div className="relative">
          <div className="space-y-6">
            {/* Image Container */}
            <div className="p-8 flex items-center justify-center">
              <img
                src={project.image || "/placeholder.svg"}
                alt={`${project.title} project mockup`}
                className="object-contain transition-transform duration-300 shadow-md rounded-[40px] ease-in-out hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Standard showcase layout
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <img
          src={project.image || "/placeholder.svg"}
          alt={`${project.title} project mockup`}
          className="object-contain max-h-full rounded-xl"
        />

        <div className="prose max-w-none">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {project.title}
          </h3>
          <p className="text-gray-600 mb-6">{project.description}</p>
        </div>
      </div>
    </div>
  );
}

// Generate per-project OG metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  const title = project ? project.title : "Project";
  const description = project?.overview.description ??
    "Explore this project by Digital Ninja Technologies. A full service digital agency in Nigeria.";
  const url = `https://www.thedigitalninjatech.com/works/${id}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | Digital Ninja Technologies`,
      description,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: title }],
      url,
      siteName: "Digital Ninja Technologies",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Digital Ninja Technologies`,
      description,
      images: ["/og-image.jpg"],
    },
  };
}

// 🔥 THE KEY FIX: Make the component async and await params
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Await the params Promise
  const { id } = await params;

  // Find the project by id
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.thedigitalninjatech.com" },
      { "@type": "ListItem", position: 2, name: "Works", item: "https://www.thedigitalninjatech.com/works" },
      { "@type": "ListItem", position: 3, name: project.title, item: `https://www.thedigitalninjatech.com/works/${id}` },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${project.title} | Case Study`,
    description: project.overview.description,
    image: `https://www.thedigitalninjatech.com/og-image.jpg`,
    author: { "@type": "Organization", name: "Digital Ninja Technologies", url: "https://www.thedigitalninjatech.com" },
    publisher: {
      "@type": "Organization",
      name: "Digital Ninja Technologies",
      logo: { "@type": "ImageObject", url: "https://www.thedigitalninjatech.com/Digital-Ninja-Logo.png" },
    },
    url: `https://www.thedigitalninjatech.com/works/${id}`,
    mainEntityOfPage: `https://www.thedigitalninjatech.com/works/${id}`,
  };

  return (
    <div className="min-h-screen max-w-[75rem] mx-auto mt-20 py-12">
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {/* Header */}
      <div className="mb-4">
        <Link
          href="/"
          className="text-orange-500 hover:text-orange-600 flex items-center gap-2 text-sm font-medium mb-8">
          <button className="bg-[#FFF9F5] p-3 px-8 rounded-[2rem]">
            Go back
          </button>
        </Link>

        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-[40px] font-[600] text-gray-900 mb-4">
            {project.title}
          </h1>
          <p className="text-[#4D4C4C] font-[400] text-[14px]">
            {project.description}
          </p>
          {project.overview.liveUrl && (
            <a
              href={project.overview.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 bg-[#FF7E29] hover:bg-[#FF6602] text-white font-medium text-sm py-3 px-7 rounded-full transition-colors duration-200">
              View Live Site
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Project Showcase - Now using single component */}
      <ProjectShowcase project={project} />

      {/* Project Overview Section */}
      <ProjectOverview project={project} />

      <MoreProjects currentProjectId={project.id} allProjects={projects} />
    </div>
  );
}
