import MoreProjects from "@/components/More-projects";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Script from "next/script";

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
  {
    id: "ona",
    title: "Ọ̀nà",
    description: "Brand Identity · Graphic Design · Motion Design · Travel",
    image: "/ona-thumb.png",
    showcaseType: "standard",
    overview: {
      title: "A complete brand identity system for Ọ̀nà — a travel brand built around the Yoruba concept of 'the way'.",
      description:
        "Ọ̀nà (pronounced 'oh-nah') is the Yoruba word for 'way' or 'path'. The brand was built for a travel company that believes finding your way — to a new city, a new culture, or a new experience — should be simpler. Digital Ninja Technologies designed the complete brand identity system: the mark, all lockup variants, colour palette, typography, motion assets, social media system, and brand guidelines.",
      features: {
        mockupImage1: "/ona-1.png",
        mockupImage2: "/ona-2.png",
      },
      liveUrl: "",
      overviewVideo: "https://www.youtube.com/embed/YW-OGI4mznI?autoplay=1&loop=1&playlist=YW-OGI4mznI&controls=0&mute=1&modestbranding=1&rel=0&showinfo=0",
      role: "Brand Identity & Motion Designer",
      responsibilities: [
        "Brand Strategy & Naming Context",
        "Logo Mark & Wordmark Design",
        "Full Lockup System (4 colourways)",
        "Colour Palette & Typography System",
        "Motion Design (Logo & Icon Animation)",
        "Social Media Asset System",
        "App Icon & Platform Assets",
        "Brand Guidelines Documentation",
      ],
      problem: {
        intro: "Ọ̀nà needed a brand identity that could:",
        points: [
          { label: "Honour the name's meaning", detail: "The mark, colour, and typography needed to carry the weight of a Yoruba word — rooted in culture, elegant in execution, and legible to a global audience." },
          { label: "Work across every touchpoint", detail: "From a 48px app icon to a LinkedIn banner to an animated splash screen — the identity needed to be fully system-ready from day one." },
          { label: "Feel premium without feeling cold", detail: "Travel brands often default to either sterile minimalism or busy maximalism. Ọ̀nà needed warmth, depth, and confidence — earthy, not generic." },
          { label: "Come alive in motion", detail: "The route line at the heart of the mark — the path through the O — was designed from the start to animate. Logo and icon animations were a core deliverable, not an afterthought." },
        ],
        summary: "The brief was to build a complete, ready-to-deploy brand system that could launch the company across digital and physical touchpoints simultaneously.",
      },
      goals: [
        "Design a mark rooted in the brand name's cultural meaning",
        "Build a full lockup system across four colourways",
        "Define an earthy, premium colour palette (Deep Green, Sand, Way Gold)",
        "Select and pair a typography system (Space Grotesk + Outfit)",
        "Deliver animated logo and icon as production-ready motion assets",
        "Create a complete social media asset suite (profile, headers, OG)",
        "Document the brand system for consistent independent use",
      ],
      uxStrategy: [
        {
          step: "01",
          title: "The mark — the O is the route",
          desc: "A geometric circle, stroked at 1/5 of its diameter, is also the first letter of the wordmark. A single winding line crosses the ring from top to bottom — the route through the O. It always sits in front. Gold, always the only gold line in the mark. The Yoruba dot-below becomes the destination: the brand's signature, the smallest element, the one never removed.",
        },
        {
          step: "02",
          title: "Earth, ink, one gold",
          desc: "Deep Green is the primary surface. Sand is for documents, light print, and warmth. Charcoal is the body text colour. Way Gold is the accent — used only, and never more than 15% of any surface. The palette signals premium travel without the coldness of grey-and-white minimalism.",
        },
        {
          step: "03",
          title: "Motion from the beginning",
          desc: "The route line was always going to animate. The logo animation draws the route through the O before the wordmark appears. The icon animation pulses the dot-below — the destination point. Both were built in After Effects and exported as production-ready files for digital and app use.",
        },
      ],
      challenges:
        "The diacritic in Ọ̀nà — the dot below the O and the grave accent — presented a typographic challenge at small sizes. The solution was a 'small-size cut' where the route is dropped and the mark becomes a plain circle with the gold dot only, preserving legibility at favicon and notification badge sizes without sacrificing the system.",
      outcome: {
        summary: "Ọ̀nà launched with a fully production-ready brand system — mark, motion, social media assets, app icons, and brand guidelines — ready to deploy across every touchpoint from day one.",
        points: [
          "Complete mark system with four lockup colourways and six mark variants",
          "Animated logo and icon in After Effects, exported for production use",
          "Full social media suite: LinkedIn header, X header, profile avatar",
          "App icon system at 1024px, 180px, 120px, and 48px",
          "Colour palette and typography system fully documented",
          "Brand guidelines covering clearance, don'ts, and usage rules",
        ],
      },
      gallery: [
        "/ona-1.png",
        "/ona-2.png",
        "/ona-3.png",
        "/ona-4.png",
        "/ona-5.png",
      ],
    },
  },
  {
    id: "thazlo",
    title: "Thazlo",
    description: "Web Development · Design Support · Consumer App · Home Services",
    image: "/thazlo-1.png",
    showcaseType: "standard",
    overview: {
      title: "Website development for Thazlo — Nigeria's 24/7 gas refill and laundry delivery app.",
      description:
        "Thazlo is a consumer app connecting households across Nigeria with certified vendors for gas refills and laundry pickup. Digital Ninja Technologies developed the full marketing website, supporting the Thazlo team's design process and bringing their vision to life in code — fast, responsive, and launch-ready.",
      features: {
        mockupImage1: "/thazlo-1.png",
        mockupImage2: "/thazlo-2.png",
      },
      liveUrl: "https://www.thazloapp.com",
      role: "Website Developer",
      responsibilities: [
        "Frontend Website Development",
        "Design Support & Implementation",
        "Dark Mode & Light Mode Design",
        "Responsive Mobile Development",
        "Performance Optimisation",
        "SEO Foundation Setup",
        "App Store Link Integration",
        "Deployment & Launch Support",
      ],
      problem: {
        intro: "Thazlo needed their designed website built accurately and performantly:",
        points: [
          { label: "Pixel-perfect build", detail: "Translating the Thazlo team's UI designs into clean, production-ready code without losing detail or visual fidelity." },
          { label: "Mobile-first performance", detail: "The majority of Thazlo's audience discovers services on their phones. The build needed to be fast and flawless on mobile across all screen sizes." },
          { label: "App download integration", detail: "App Store, Google Play, and QR code CTAs needed to be correctly wired and placed throughout every section of the site." },
          { label: "Launch readiness", detail: "From SEO foundations and metadata to deployment configuration, the site needed to be production-ready from day one." },
        ],
        summary: "Our job was to execute the vision the Thazlo team designed — accurately, efficiently, and on time.",
      },
      goals: [
        "Build the designed website to pixel-perfect standards",
        "Deliver a fast, responsive experience across all devices",
        "Integrate App Store and Google Play CTAs correctly",
        "Set up SEO foundations for organic discoverability",
        "Support the design process with technical guidance",
        "Deploy the site and support the go-live process",
      ],
      uxStrategy: [
        {
          step: "01",
          title: "Faithful implementation of the design",
          desc: "We worked closely with the Thazlo design team to ensure every section was built exactly as intended — from typography and spacing to interactions and responsive behaviour.",
        },
        {
          step: "02",
          title: "Dark mode and light mode support",
          desc: "We built the site with a full dark mode and light mode toggle. Both themes were designed from the ground up — not just inverted colours — ensuring the brand, typography, and visuals look polished in either mode.",
        },
        {
          step: "03",
          title: "Performance-first development",
          desc: "Images were optimised, scripts deferred, and the build structured for fast load times on mobile connections — critical for a Nigerian consumer audience.",
        },
        {
          step: "04",
          title: "Technical support throughout the design process",
          desc: "We provided ongoing technical input during the design phase — advising on what was buildable, how components should behave on smaller screens, and what would affect performance.",
        },
      ],
      challenges:
        "Building a dual-theme experience was the most technically demanding aspect of the project. Every component — hero, service cards, testimonials, FAQ, and footer — had to be designed and tested in both dark and light mode to ensure visual consistency and brand accuracy across both states. The dual-service layout also required careful hierarchy decisions so neither gas nor laundry felt secondary.",
      outcome: {
        summary: "Thazlo launched with a well-built website that accurately reflects the brand's design vision and consistently drives visitors toward app downloads.",
        points: [
          "Full dark mode and light mode — both themes designed from the ground up, not just inverted",
          "Pixel-accurate build matching the Thazlo design",
          "Fast mobile performance optimised for Nigerian connectivity",
          "App Store and Google Play CTAs integrated throughout",
          "App Store and Google Play CTAs integrated throughout every section",
          "Site live and fully operational across all major devices and browsers",
        ],
      },
      gallery: [
        "/thazlo-1.png",
        "/thazlo-2.png",
        "/thazlo-3.png",
        "/thazlo-4.png",
        "/thazlo-5.png",
      ],
    },
  },
  {
    id: "brandface",
    title: "Brandface",
    description: "Web Design · Lead Conversion · Marketing Website",
    image: "/brandface-1.png",
    showcaseType: "standard",
    overview: {
      title: "A conversion-focused website that positions Brandface as a credible digital marketing agency and turns visitors into leads.",
      description:
        "Brandface is a digital marketing and IT solutions agency that needed a modern website to clearly communicate their expertise, showcase their work, and generate qualified leads. The challenge was designing a site that answers the three questions every visitor asks within seconds: who are you, what do you do, and why should I trust you. The result is a fast, responsive, visually polished website with strategic calls-to-action throughout.",
      features: {
        mockupImage1: "/brandface-1.png",
        mockupImage2: "/brandface-2.png",
      },
      liveUrl: "https://brandface-eta.vercel.app",
      role: "Website Developer",
      responsibilities: [
        "Frontend Website Development",
        "Information Architecture",
        "Responsive Website Development",
        "Interaction & Animation Design",
        "Performance Optimisation",
        "Cross-browser Testing & Deployment",
      ],
      problem: {
        intro: "Many agency websites overwhelm visitors with excessive content or unclear messaging. Brandface needed a site that could:",
        points: [
          { label: "Communicate clearly", detail: "Deliver the value proposition within seconds of landing on the page." },
          { label: "Present services cleanly", detail: "Showcase multiple service offerings without overwhelming users or burying the key message." },
          { label: "Build trust", detail: "Use project showcases and testimonials to establish credibility with potential clients." },
          { label: "Convert visitors", detail: "Generate qualified leads through strategically placed calls-to-action without disrupting the browsing experience." },
        ],
        summary: "The goal was a website that works as hard as the agency itself — credible, clear, and consistently pointing visitors toward a conversation.",
      },
      goals: [
        "Establish a professional and credible online presence",
        "Communicate service offerings clearly without overwhelming visitors",
        "Generate qualified inbound leads through strategic CTAs",
        "Deliver a seamless experience across all devices",
        "Build a scalable architecture for future content growth",
      ],
      uxStrategy: [
        {
          step: "01",
          title: "Clear information hierarchy",
          desc: "Content was organised to answer three questions immediately: who is Brandface, what do they do, and why should clients trust them. Every section earns the scroll to the next.",
        },
        {
          step: "02",
          title: "Conversion-focused layout",
          desc: "Every major section guides visitors toward contacting the agency through strategically placed CTAs — without interrupting the browsing experience or creating friction.",
        },
        {
          step: "03",
          title: "Consistent visual language",
          desc: "A unified typography system, spacing scale, iconography, and colour palette creates a polished brand experience from the first scroll to the final CTA.",
        },
      ],
      challenges:
        "Balancing visual ambition with performance was the central tension. The site needed to feel premium and modern while loading fast on any connection. Every animation and interaction was evaluated for whether it added to the experience or just added weight.",
      outcome: {
        summary: "The completed website gives Brandface a professional digital home that reflects the quality of their work and consistently guides visitors toward a conversation.",
        points: [
          "Professional online presence that matches the agency's quality of work",
          "Improved brand credibility through consistent visual design",
          "Clear service presentation that helps visitors self-qualify",
          "Enhanced mobile experience across all screen sizes",
          "Fast page loading through performance optimisation",
          "Scalable architecture ready for future growth",
        ],
      },
      gallery: [
        "/brandface-1.png",
        "/brandface-2.png",
        "/brandface-3.png",
        "/brandface-4.png",
      ],
    },
  },
  {
    id: "veritas",
    title: "Veritas",
    description: "Web Design · Mobile App Development · Fintech · Escrow",
    image: "/veritas-1.png",
    showcaseType: "standard",
    overview: {
      title: "A waitlist landing page that builds trust and drives signups for Africa's cross-border escrow payment app.",
      description:
        "Veritas is a cross-border escrow payment platform built for freelancers and clients doing modern, borderless work. It holds every payment safely in escrow and settles in the user's local currency — NGN, GHS, KES, ZAR, USD and more. As the designer and developer behind the waitlist landing page, the goal was to communicate a complex fintech product clearly, build trust with an unproven audience, and convert visitors into waitlist signups before launch. Mobile app development is currently ongoing.",
      features: {
        mockupImage1: "/veritas-1.png",
        mockupImage2: "/veritas-2.png",
      },
      liveUrl: "https://www.useveritasapp.com",
      role: "Web Designer & Developer · Mobile App Developer",
      responsibilities: [
        "Landing page design and copywriting",
        "Waitlist flow and conversion optimisation",
        "Mobile app UI/UX design",
        "Flutter mobile app development",
        "Brand identity and visual language",
        "Performance and SEO setup",
      ],
      problem: {
        intro: "Launching a fintech product without an existing user base means every visitor arrives sceptical. Three core challenges shaped the design:",
        points: [
          { label: "Trust", detail: "Freelancers have been burned before. The product needed to feel credible, safe, and serious from the first second." },
          { label: "Clarity", detail: "Escrow is a complex concept. The page had to explain it simply without losing the sophistication that makes it trustworthy." },
          { label: "Conversion", detail: "Getting an email address before launch requires a compelling reason. The waitlist pitch had to feel exclusive, not desperate." },
        ],
        summary: "The challenge was to make a pre-launch fintech product feel like a product people could already trust with their money.",
      },
      goals: [
        "Drive early waitlist signups before public launch",
        "Communicate escrow protection clearly and simply",
        "Build brand credibility in the freelance and fintech space",
        "Create a scalable design system for the mobile app",
        "Establish Veritas as the go-to escrow tool for African freelancers",
      ],
      uxStrategy: [
        {
          step: "01",
          title: "Lead with the problem, not the product",
          desc: "The hero section opens with the freelancer's pain: getting paid, every time, without worry. The product is the answer, not the introduction. This immediately resonates with the target audience.",
        },
        {
          step: "02",
          title: "Use social proof early",
          desc: "The waitlist counter showing 51+ freelancers already waiting, combined with stacked avatar circles, creates a sense of momentum and community before anyone has to commit.",
        },
        {
          step: "03",
          title: "Make the escrow concept visual",
          desc: "Instead of explaining escrow in text, the app mockup screens show it in action: funds locked, milestone approved, money released. Seeing is believing when trust is the product.",
        },
      ],
      challenges:
        "The hardest part was balancing a bold, expressive visual identity — bright yellow, chunky type, playful 3D assets — with the seriousness required to ask someone to trust you with their money. The solution was to let the visuals be bold while keeping the copy grounded, honest, and specific about how the product actually works.",
      outcome: {
        summary: "Veritas will launch with freelancers on the waitlist before a single line of app code shipped, validating both the product and the design direction.",
        points: [
          "Client can easily capture emails for marketing campaign before public launch",
          "Clear communication of a complex fintech concept",
          "Strong brand identity carried from web to mobile",
          "Waitlist conversion optimised through social proof and exclusivity",
          "Mobile app design system ready for Flutter development",
        ],
      },
      gallery: [
        "/veritas-1.png",
        "/veritas-2.png",
        "/veritas-3.png",
        "/veritas-4.png",
        "/veritas-5.png",
        "/veritas-6.png",
        "/veritas-7.png",
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

      {/* Overview video — shown below overview text if present */}
      {(o as any).overviewVideo && (
        <div className="flex justify-center">
          <div
            className="rounded-3xl overflow-hidden shadow-2xl shadow-black/20 relative"
            style={{ width: "320px", height: "320px" }}
          >
            <iframe
              src={(o as any).overviewVideo}
              allow="autoplay; encrypted-media; loop"
              style={{
                border: "none",
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "320px",
                height: "568px",
                transform: "translate(-50%, -42%)",
                pointerEvents: "none",
              }}
            />
          </div>
        </div>
      )}

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
          <img
            src={o.features.mockupImage1}
            alt={`${project.title} landing page`}
            className="w-full rounded-2xl shadow-md border border-[#F2F2F2]"
          />
          <img
            src={o.features.mockupImage2}
            alt={`${project.title} product screen`}
            className="w-full rounded-2xl shadow-md border border-[#F2F2F2]"
          />
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
                <img
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
  const description = project?.overview?.description
    ? project.overview.description.slice(0, 160).trimEnd() + "..."
    : "Explore this case study by Digital Ninja Technologies — a global design and software development agency building websites, apps, and digital products for startups and businesses worldwide.";
  const metaTitle = project
    ? `${project.title} | ${project.description} | Digital Ninja Technologies`
    : "Case Study | Digital Ninja Technologies";
  const url = `https://www.thedigitalninjatech.com/works/${id}`;

  return {
    title: metaTitle,
    description,
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
    alternates: { canonical: url },
    openGraph: {
      title: metaTitle,
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
          <h1 className="text-3xl sm:text-4xl md:text-[40px] font-[600] text-gray-900 mb-4">
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
