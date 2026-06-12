import MoreProjects from "@/components/More-projects";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Script from "next/script";

// Project data
const projects = [
  {
    id: "flex2ride",
    title: "Flex2Ride",
    description: "App Design • Web Design • Design Systems",
    image: "/show1.svg",
    showcaseType: "featured",
    overview: {
      title: "A seamless ride-hailing experience built for flexibility and speed.",
      description:
        "Flex2Ride is a modern mobility platform designed to connect riders and drivers with minimal friction. We handled end-to-end product design — from user research and information architecture through to a complete design system covering the rider app, driver app, and marketing website.",
      features: {
        mockupImage1: "/brand-1.svg",
        mockupImage2: "/brand-2.svg",
      },
    },
  },
  {
    id: "digital-ninja",
    title: "Digital-Ninja",
    description: "Brand Identity • Web Design • Design Systems",
    image: "/Cover-Designv3.svg",
    showcaseType: "standard",
    overview: {
      title: "A bold brand identity built to reflect craft, precision, and innovation.",
      description:
        "Digital Ninja Technologies needed a visual identity that matched the quality of its output. We developed a full brand system — logo, colour palette, typography, iconography, and voice — then carried it through to the company website and a scalable design system used across all digital touchpoints.",
      features: {
        mockupImage1: "/brand-1.svg",
        mockupImage2: "/brand-2.svg",
      },
    },
  },
  {
    id: "mixlr",
    title: "Mixlr",
    description: "App Design • Web Design • Design Systems",
    image: "/Cover-Design4.svg",
    showcaseType: "standard",
    overview: {
      title: "Bringing live audio broadcasting to a wider, more connected audience.",
      description:
        "Mixlr is a live audio platform that lets creators broadcast to their audiences in real time. Our work focused on redesigning the listener and broadcaster experiences — simplifying the core broadcast flow, improving discoverability, and creating a design system that scales across web and mobile.",
      features: {
        mockupImage1: "/brand-1.svg",
        mockupImage2: "/brand-2.svg",
      },
    },
  },
  {
    id: "coinly",
    title: "Coinly",
    description: "App Design • Web Design • Design Systems",
    image: "/Cover-Designv4.svg",
    showcaseType: "standard",
    overview: {
      title: "Making personal finance clear, actionable, and stress-free.",
      description:
        "Coinly is a fintech app that helps users track spending, set savings goals, and understand their financial health at a glance. We designed the full product experience — onboarding, dashboard, transaction history, and goal-setting flows — with a focus on clarity and reducing cognitive load.",
      features: {
        mockupImage1: "/brand-1.svg",
        mockupImage2: "/brand-2.svg",
      },
    },
  },
];

function ProjectOverview({ project }: { project: (typeof projects)[0] }) {
  if (!project.overview) return null;

  return (
    <div className="mt-16 px-4">
      {/* Overview Text Section */}
      <div className="mb-16">
        <div className="mb-8 flex justify-between">
          <p className="text-[#ff7e29] font-[600] text-sm tracking-wider uppercase mb-4">
            PROJECT OVERVIEW
          </p>
          <div className="max-w-[80rem]">
            <h2 className="text-4xl md:text-[40px] font-[600] text-gray-900 mb-6 leading-tight">
              {project.overview.title}
            </h2>
            <p className="text-[#4D4C4C] text-lg font-[400] leading-relaxed max-w-4xl">
              {project.overview.description}
            </p>
          </div>
        </div>
      </div>

      {/* Features Section with Mockup */}
      {project.overview.features && (
        <div className="text-center">
          <div className="relative mb-10 inline-block">
            <img
              src={project.overview.features.mockupImage1 || "/placeholder.svg"}
              alt={`${project.title} app interface`}
              className="mx-auto"
            />
          </div>
          <div className="relative inline-block">
            <img
              src={project.overview.features.mockupImage2 || "/placeholder.svg"}
              alt={`${project.title} app interface`}
              className="mx-auto"
            />
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
    "Explore this project by Digital Ninja Technologies — a full-service digital agency in Nigeria.";
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
    headline: `${project.title} — Case Study`,
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
