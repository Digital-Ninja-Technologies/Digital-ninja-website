import MoreProjects from "@/components/More-projects";
import Link from "next/link";
import { notFound } from "next/navigation";

// Project data
const projects = [
  {
    id: "flex2ride",
    title: "Flex2Ride",
    description: "App Design • Web Design • Design Systems",
    image: "/show1.svg",
    showcaseType: "featured",
    overview: {
      title:
        "Digital-Ninja empowers businesses with cutting-edge digital solutions.",
      description:
        "Digital-Ninja is a comprehensive digital agency platform that specializes in creating modern brand identities and web experiences. Our focus is on delivering innovative solutions that help businesses establish a strong digital presence.",
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
      title:
        "Digital-Ninja empowers businesses with cutting-edge digital solutions.",
      description:
        "Digital-Ninja is a comprehensive digital agency platform that specializes in creating modern brand identities and web experiences. Our focus is on delivering innovative solutions that help businesses establish a strong digital presence.",
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
      title:
        "Digital-Ninja empowers businesses with cutting-edge digital solutions.",
      description:
        "Digital-Ninja is a comprehensive digital agency platform that specializes in creating modern brand identities and web experiences. Our focus is on delivering innovative solutions that help businesses establish a strong digital presence.",
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
      title:
        "Digital-Ninja empowers businesses with cutting-edge digital solutions.",
      description:
        "Digital-Ninja is a comprehensive digital agency platform that specializes in creating modern brand identities and web experiences. Our focus is on delivering innovative solutions that help businesses establish a strong digital presence.",
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

  return (
    <div className="min-h-screen max-w-[75rem] mx-auto mt-20 py-12">
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
