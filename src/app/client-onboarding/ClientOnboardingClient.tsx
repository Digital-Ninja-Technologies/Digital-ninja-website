"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// ── Types ────────────────────────────────────────────────────────────────────
type QuestionType = "text" | "textarea" | "checkbox" | "radio" | "email" | "tel" | "url";

interface Question {
  id: string;
  question: string;
  type: QuestionType;
  options?: string[];
  placeholder?: string;
  required?: boolean;
}

interface Section {
  id: string;
  title: string;
  emoji: string;
  tagline: string;
  questions: Question[];
  // Which product types show this section. Undefined = always shown.
  showFor?: ("website" | "mobile" | "saas" | "ecommerce" | "ai" | "internal")[];
}

// ── Questionnaire Data ───────────────────────────────────────────────────────
const SECTIONS: Section[] = [
  {
    id: "s1",
    title: "Client & Business Information",
    emoji: "👋",
    tagline: "Let's get to know you first.",
    questions: [
      { id: "q1", question: "What is your full name?", type: "text", placeholder: "e.g. Ada Okonkwo", required: true },
      { id: "q2", question: "What is your company or business name?", type: "text", placeholder: "e.g. Finova Technologies" },
      { id: "q3", question: "What is your email address?", type: "email", placeholder: "you@company.com", required: true },
      { id: "q4", question: "What is your phone number or preferred contact channel?", type: "tel", placeholder: "+234 800 000 0000" },
      { id: "q5", question: "Do you have an existing website or social media page? If yes, share the links.", type: "textarea", placeholder: "e.g. https://yourwebsite.com, @yourbrand on Instagram" },
      { id: "q6", question: "Briefly describe your business and what it does.", type: "textarea", placeholder: "Tell us what you do and who you serve..." },
      { id: "q7", question: "What industry does your business operate in?", type: "text", placeholder: "e.g. Fintech, Healthcare, E-commerce, Education..." },
      { id: "q8", question: "Who is the primary decision-maker for this project?", type: "text", placeholder: "Name and role" },
    ],
  },
  {
    id: "s2",
    title: "Product Overview",
    emoji: "🚀",
    tagline: "Tell us about what you want to build.",
    questions: [
      { id: "q9", question: "What is the name of the product or project?", type: "text", placeholder: "e.g. NaijaRide, MediTrack..." },
      {
        id: "q10",
        question: "What type of product do you want to build?",
        type: "checkbox",
        options: [
          "Website or web application",
          "Mobile application",
          "SaaS platform",
          "E-commerce platform",
          "AI-powered product or automation",
          "Internal business tool or dashboard",
          "Other",
        ],
      },
      { id: "q11", question: "Describe your product idea in your own words.", type: "textarea", placeholder: "Paint us a picture — what does it look and feel like?" },
      { id: "q12", question: "What problem are you trying to solve?", type: "textarea", placeholder: "What pain point does this product address?" },
      { id: "q13", question: "Why is solving this problem important to you?", type: "textarea", placeholder: "What's the personal or business motivation?" },
      { id: "q14", question: "How do people currently solve this problem?", type: "textarea", placeholder: "What workarounds or alternatives exist today?" },
      { id: "q15", question: "What makes your proposed solution different from existing alternatives?", type: "textarea", placeholder: "What's your unique angle?" },
      {
        id: "q16",
        question: "Is this a new product, an improvement to an existing product, or a redesign?",
        type: "radio",
        options: ["Brand new product", "Improvement to an existing product", "Full redesign of an existing product"],
      },
      { id: "q17", question: "Do you have an existing product, prototype, wireframe, design, or document we should review? Please share the links or files.", type: "textarea", placeholder: "Paste links or describe what you have..." },
    ],
  },
  {
    id: "s3",
    title: "Business Goals & Success Metrics",
    emoji: "🎯",
    tagline: "What does winning look like for you?",
    questions: [
      {
        id: "q18",
        question: "What are the primary goals of this project?",
        type: "checkbox",
        options: [
          "Generate revenue",
          "Acquire new customers",
          "Improve an existing service",
          "Automate business processes",
          "Reduce operational costs",
          "Improve customer experience",
          "Validate a business idea",
          "Other",
        ],
      },
      { id: "q19", question: "What would make this project successful for you?", type: "textarea", placeholder: "Describe your definition of success..." },
      { id: "q20", question: "What are the three most important outcomes you expect?", type: "textarea", placeholder: "1. ...\n2. ...\n3. ..." },
      { id: "q21", question: "How will you measure success? (e.g. revenue, sign-ups, bookings, engagement, or time saved)", type: "textarea", placeholder: "List your key metrics..." },
      { id: "q22", question: "Is there a business model already defined? If yes, explain how the product will generate revenue.", type: "textarea", placeholder: "e.g. Subscription, commission, freemium, one-time purchase..." },
    ],
  },
  {
    id: "s4",
    title: "Target Audience",
    emoji: "👥",
    tagline: "Who are you building this for?",
    questions: [
      { id: "q23", question: "Who are the intended users of this product?", type: "textarea", placeholder: "Describe your target user persona(s)..." },
      { id: "q24", question: "What age group, location, or demographic are you targeting?", type: "textarea", placeholder: "e.g. 25–40 year olds in Lagos and Abuja, urban professionals" },
      { id: "q25", question: "What are your users' biggest challenges or frustrations?", type: "textarea", placeholder: "What keeps them up at night?" },
      { id: "q26", question: "What should users be able to accomplish with your product?", type: "textarea", placeholder: "List the key jobs-to-be-done..." },
      {
        id: "q27",
        question: "Have you spoken to potential users or conducted market research?",
        type: "radio",
        options: ["Yes, extensively", "Yes, a little", "Not yet but planning to", "No"],
      },
      { id: "q28", question: "Are there different types of users with different permissions or responsibilities? (e.g. customers, vendors, admins, staff)", type: "textarea", placeholder: "Describe the user roles..." },
    ],
  },
  {
    id: "s5",
    title: "Features & Functionality",
    emoji: "⚙️",
    tagline: "What should this product be able to do?",
    questions: [
      { id: "q29", question: "What are the most important features you want the product to have?", type: "textarea", placeholder: "List your must-have features..." },
      { id: "q30", question: "Describe the main actions a user should be able to perform.", type: "textarea", placeholder: "e.g. Sign up, browse listings, book a service, track orders..." },
      { id: "q31", question: "What should happen when a user first visits or opens the product?", type: "textarea", placeholder: "Describe the first-time user experience..." },
      {
        id: "q32",
        question: "Will users need to create accounts or log in?",
        type: "radio",
        options: ["Yes", "No", "Optional / Some features require it"],
      },
      { id: "q33", question: "Will the product require payments, subscriptions, bookings, messaging, notifications, file uploads, or other interactive features?", type: "textarea", placeholder: "Check all that apply and give details..." },
      {
        id: "q34",
        question: "Will an administrator need a dashboard to manage users, content, transactions, or other activities?",
        type: "radio",
        options: ["Yes", "No", "Not sure yet"],
      },
      { id: "q35", question: "Does the product need to connect to any third-party services or APIs? (e.g. payment gateways, maps, email services, CRMs, AI models)", type: "textarea", placeholder: "List the integrations you have in mind..." },
      { id: "q36", question: "Are there any features you consider essential for launch?", type: "textarea", placeholder: "Your MVP must-haves..." },
      { id: "q37", question: "Are there any features you would like to add in a later phase?", type: "textarea", placeholder: "Phase 2 ideas..." },
      { id: "q38", question: "Are there any features you explicitly do not want?", type: "textarea", placeholder: "Things to avoid..." },
    ],
  },
  {
    id: "s6",
    title: "User Journey & Workflow",
    emoji: "🗺️",
    tagline: "Walk us through the experience.",
    showFor: ["website", "mobile", "saas", "ecommerce", "ai", "internal"],
    questions: [
      { id: "q39", question: "Walk us through how you imagine a typical user interacting with your product, from start to finish.", type: "textarea", placeholder: "Step by step, paint the picture..." },
      { id: "q40", question: "What is the most important action you want users to take?", type: "textarea", placeholder: "e.g. Complete a booking, make a purchase, invite a friend..." },
      { id: "q41", question: "Are there any approval processes, verification steps, or business rules the product must follow?", type: "textarea", placeholder: "e.g. KYC verification, admin approval, age restriction..." },
      { id: "q42", question: "What should happen when something goes wrong? (e.g. failed payment, incomplete form, rejected request)", type: "textarea", placeholder: "Describe your error-handling expectations..." },
      { id: "q43", question: "Are there any special cases or exceptions we should consider?", type: "textarea", placeholder: "Edge cases, unusual scenarios..." },
    ],
  },
  {
    id: "s7",
    title: "Design & Branding",
    emoji: "🎨",
    tagline: "How should it look and feel?",
    showFor: ["website", "mobile", "saas", "ecommerce", "ai", "internal"],
    questions: [
      { id: "q44", question: "Do you have an existing brand identity, including a logo, colours, fonts, or brand guidelines?", type: "textarea", placeholder: "Describe what you have or share links..." },
      {
        id: "q45",
        question: "What visual style do you prefer?",
        type: "radio",
        options: [
          "Minimal and modern",
          "Corporate and professional",
          "Bold and expressive",
          "Premium and elegant",
          "Friendly and playful",
          "Other",
        ],
      },
      { id: "q46", question: "Are there websites or applications whose design or experience you admire? Share links and explain what you like about them.", type: "textarea", placeholder: "Your design inspirations..." },
      {
        id: "q47",
        question: "Which devices should the product support?",
        type: "checkbox",
        options: ["Mobile", "Tablet", "Desktop", "All devices"],
      },
      { id: "q48", question: "Do you have existing designs or a design system we should follow?", type: "textarea", placeholder: "Share links or describe..." },
      { id: "q49", question: "Are there accessibility, language, or localisation requirements?", type: "textarea", placeholder: "e.g. RTL language support, WCAG compliance, multiple languages..." },
    ],
  },
  {
    id: "s8",
    title: "Technical Requirements",
    emoji: "🔧",
    tagline: "What's under the hood?",
    showFor: ["mobile", "saas", "ai", "internal"],
    questions: [
      { id: "q50", question: "Do you have a preferred technology or platform? If yes, specify it.", type: "textarea", placeholder: "e.g. React, Flutter, Node.js, Wordpress... or no preference" },
      { id: "q51", question: "Do you already own a domain name, hosting account, server, or developer accounts?", type: "textarea", placeholder: "List what you already have..." },
      { id: "q52", question: "Will the product need to integrate with existing software, databases, or business systems?", type: "textarea", placeholder: "e.g. Existing CRM, ERP, payment system, data feeds..." },
      { id: "q53", question: "Are there specific security, privacy, or data protection requirements?", type: "textarea", placeholder: "e.g. GDPR compliance, end-to-end encryption, ISO 27001..." },
      {
        id: "q54",
        question: "Will the product handle sensitive information, financial transactions, or personal data?",
        type: "radio",
        options: ["Yes", "No", "Not sure yet"],
      },
      { id: "q55", question: "Are there expected performance, availability, or scalability requirements?", type: "textarea", placeholder: "e.g. Must handle 10,000 concurrent users, 99.9% uptime..." },
      { id: "q56", question: "Do you need analytics, reporting, backups, or activity logs?", type: "textarea", placeholder: "Describe what you need to track and report..." },
      { id: "q57", question: "Are there any technical limitations or existing infrastructure we need to consider?", type: "textarea", placeholder: "e.g. Legacy systems, specific hosting provider, budget constraints..." },
    ],
  },
  {
    id: "s9",
    title: "Content & Data",
    emoji: "📝",
    tagline: "What content and data does this need?",
    showFor: ["website", "ecommerce", "saas", "ai"],
    questions: [
      {
        id: "q58",
        question: "Who will provide the website copy, product descriptions, images, videos, and other content?",
        type: "radio",
        options: ["We will provide all content", "We need help creating content", "A mix of both"],
      },
      {
        id: "q59",
        question: "Do you already have the required content and data?",
        type: "radio",
        options: ["Yes, fully ready", "Partially ready", "Not yet"],
      },
      { id: "q60", question: "Will users or administrators need to create, edit, import, or export data?", type: "textarea", placeholder: "Describe the data management needs..." },
      { id: "q61", question: "Are there existing records that need to be migrated from another platform?", type: "textarea", placeholder: "What data needs to move and from where?" },
      { id: "q62", question: "Will you need help creating content or using AI to generate or process it?", type: "textarea", placeholder: "Describe any content or AI assistance needs..." },
    ],
  },
  {
    id: "s10",
    title: "Project Timeline & Budget",
    emoji: "📅",
    tagline: "Let's talk timelines and investment.",
    questions: [
      { id: "q63", question: "Is there a target launch date or deadline?", type: "text", placeholder: "e.g. January 2026 or Q1 2026" },
      {
        id: "q64",
        question: "Is this deadline fixed or flexible?",
        type: "radio",
        options: ["Fixed — we cannot miss it", "Flexible — it's a target", "Not sure yet"],
      },
      {
        id: "q65",
        question: "What is your estimated budget for the project?",
        type: "radio",
        options: [
          "Under $1,000",
          "$1,000 – $5,000",
          "$5,000 – $15,000",
          "$15,000 – $50,000",
          "$50,000+",
          "Not defined yet",
        ],
      },
      {
        id: "q66",
        question: "Are you looking for a one-time project, ongoing development, or a long-term technical partner?",
        type: "radio",
        options: ["One-time project", "Ongoing development / retainer", "Long-term technical partner", "Not sure yet"],
      },
      { id: "q67", question: "Do you have any important milestones, events, launches, or dependencies that could affect delivery?", type: "textarea", placeholder: "e.g. Investor demo on March 1st, school term launch..." },
      { id: "q68", question: "Who will review the work and provide feedback?", type: "text", placeholder: "Name(s) and role(s) of approvers" },
      {
        id: "q69",
        question: "How quickly can your team provide feedback or approve deliverables?",
        type: "radio",
        options: ["Within 24 hours", "2–3 business days", "Up to a week", "It depends"],
      },
    ],
  },
  {
    id: "s11",
    title: "Competitors & References",
    emoji: "🔍",
    tagline: "What's the competitive landscape?",
    showFor: ["website", "mobile", "saas", "ecommerce", "ai", "internal"],
    questions: [
      { id: "q70", question: "Who are your main competitors or alternatives?", type: "textarea", placeholder: "List the key players in your space..." },
      { id: "q71", question: "What do you like or dislike about their products?", type: "textarea", placeholder: "Be honest — what are they doing right and wrong?" },
      { id: "q72", question: "What opportunities do you see that competitors are missing?", type: "textarea", placeholder: "Where's the gap they're leaving open?" },
      { id: "q73", question: "Are there industry standards, regulations, or customer expectations we must consider?", type: "textarea", placeholder: "e.g. CBN regulations, NDPC compliance, ISO standards..." },
    ],
  },
  {
    id: "s12",
    title: "Launch & Ongoing Support",
    emoji: "🌍",
    tagline: "How do we get this into the world?",
    showFor: ["website", "mobile", "saas", "ecommerce", "ai", "internal"],
    questions: [
      { id: "q74", question: "Do you need assistance with deployment, app store submission, or domain setup?", type: "textarea", placeholder: "Tell us what launch help you need..." },
      {
        id: "q75",
        question: "Will you require post-launch maintenance, bug fixes, or technical support?",
        type: "radio",
        options: ["Yes, ongoing support", "Just initial bug fixes", "No, we'll handle it ourselves", "Not sure yet"],
      },
      {
        id: "q76",
        question: "Do you need training or documentation for your team?",
        type: "radio",
        options: ["Yes", "No", "Maybe"],
      },
      { id: "q77", question: "Who will manage the product after launch?", type: "text", placeholder: "In-house team, external team, or us?" },
      {
        id: "q78",
        question: "Would you like us to support future improvements, analytics, and feature development?",
        type: "radio",
        options: ["Yes, definitely", "Maybe", "No"],
      },
    ],
  },
  {
    id: "s13",
    title: "Final Thoughts",
    emoji: "💡",
    tagline: "Last chance — anything else?",
    questions: [
      { id: "q79", question: "What is the one thing we absolutely must understand about your vision?", type: "textarea", placeholder: "Your non-negotiable core idea..." },
      { id: "q80", question: "What concerns or risks do you have about this project?", type: "textarea", placeholder: "Be honest — we handle better when we know the concerns upfront." },
      { id: "q81", question: "Is there anything else you would like us to know?", type: "textarea", placeholder: "Anything not covered above..." },
      { id: "q82", question: "What would you like us to deliver at the end of this engagement?", type: "textarea", placeholder: "e.g. A live product, a detailed proposal, a prototype..." },
    ],
  },
];

// ── Helpers ──────────────────────────────────────────────────────────────────
type Answers = Record<string, string | string[]>;

type ProductType = "website" | "mobile" | "saas" | "ecommerce" | "ai" | "internal";

const Q10_MAP: Record<string, ProductType> = {
  "Website or web application": "website",
  "Mobile application": "mobile",
  "SaaS platform": "saas",
  "E-commerce platform": "ecommerce",
  "AI-powered product or automation": "ai",
  "Internal business tool or dashboard": "internal",
};

function getSelectedProductTypes(answers: Answers): ProductType[] {
  const q10 = answers["q10"];
  if (!q10) return [];
  const selections = Array.isArray(q10) ? q10 : [q10];
  return selections
    .map((s) => Q10_MAP[s])
    .filter((t): t is ProductType => Boolean(t));
}

function computeVisibleSections(answers: Answers): Section[] {
  const types = getSelectedProductTypes(answers);
  // Before Section 2 is answered, show all sections so user can navigate freely.
  // After it's answered, filter based on product types.
  if (types.length === 0) return SECTIONS;
  return SECTIONS.filter((s) => {
    if (!s.showFor) return true; // always visible (s1–s5, s10, s13)
    return s.showFor.some((t) => types.includes(t));
  });
}

function getAnswer(answers: Answers, id: string): string | string[] {
  return answers[id] ?? "";
}

function countFilled(section: Section, answers: Answers): number {
  return section.questions.filter((q) => {
    const a = getAnswer(answers, q.id);
    return Array.isArray(a) ? a.length > 0 : a.trim().length > 0;
  }).length;
}

// ── Sub-components ───────────────────────────────────────────────────────────
function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-semibold text-[#FF6602] uppercase tracking-wider">
          Section {current} of {total}
        </span>
        <span className="text-xs font-semibold text-gray-400">{pct}% complete</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: "linear-gradient(90deg, #FF6602, #FD3600)" }}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function QuestionField({
  q,
  value,
  onChange,
}: {
  q: Question;
  value: string | string[];
  onChange: (val: string | string[]) => void;
}) {
  const baseInput =
    "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-[15px] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6602]/30 focus:border-[#FF6602] transition-all duration-200";

  if (q.type === "checkbox" && q.options) {
    const checked = Array.isArray(value) ? value : [];
    return (
      <div className="flex flex-col gap-2">
        {q.options.map((opt) => {
          const isChecked = checked.includes(opt);
          return (
            <label
              key={opt}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-all duration-150 select-none ${
                isChecked
                  ? "border-[#FF6602] bg-orange-50 text-gray-900"
                  : "border-gray-200 bg-white hover:border-gray-300 text-gray-700"
              }`}
            >
              <span
                className={`w-5 h-5 rounded flex-shrink-0 flex items-center justify-center border-2 transition-all duration-150 ${
                  isChecked ? "border-[#FF6602] bg-[#FF6602]" : "border-gray-300 bg-white"
                }`}
              >
                {isChecked && (
                  <svg viewBox="0 0 12 10" fill="none" className="w-3 h-3">
                    <path d="M1 5l3.5 3.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>
              <span className="text-[14px] font-medium">{opt}</span>
              <input
                type="checkbox"
                className="sr-only"
                checked={isChecked}
                onChange={() => {
                  const next = isChecked ? checked.filter((v) => v !== opt) : [...checked, opt];
                  onChange(next);
                }}
              />
            </label>
          );
        })}
      </div>
    );
  }

  if (q.type === "radio" && q.options) {
    const current = typeof value === "string" ? value : "";
    return (
      <div className="flex flex-col gap-2">
        {q.options.map((opt) => {
          const isSelected = current === opt;
          return (
            <label
              key={opt}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-all duration-150 select-none ${
                isSelected
                  ? "border-[#FF6602] bg-orange-50 text-gray-900"
                  : "border-gray-200 bg-white hover:border-gray-300 text-gray-700"
              }`}
            >
              <span
                className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center border-2 transition-all duration-150 ${
                  isSelected ? "border-[#FF6602]" : "border-gray-300"
                }`}
              >
                {isSelected && <span className="w-2.5 h-2.5 rounded-full bg-[#FF6602]" />}
              </span>
              <span className="text-[14px] font-medium">{opt}</span>
              <input
                type="radio"
                className="sr-only"
                checked={isSelected}
                onChange={() => onChange(opt)}
              />
            </label>
          );
        })}
      </div>
    );
  }

  if (q.type === "textarea") {
    return (
      <textarea
        className={`${baseInput} resize-none min-h-[120px]`}
        placeholder={q.placeholder}
        value={typeof value === "string" ? value : ""}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
      />
    );
  }

  return (
    <input
      type={q.type}
      className={baseInput}
      placeholder={q.placeholder}
      value={typeof value === "string" ? value : ""}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

// ── Main Component ───────────────────────────────────────────────────────────
export default function ClientOnboardingClient() {
  const [step, setStep] = useState<"intro" | "form" | "success">("intro");
  const [sectionIndex, setSectionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [direction, setDirection] = useState(1);

  const visibleSections = computeVisibleSections(answers);
  const currentSection = visibleSections[sectionIndex] ?? visibleSections[0];
  const isLast = sectionIndex === visibleSections.length - 1;

  const setAnswer = useCallback((id: string, val: string | string[]) => {
    setAnswers((prev) => {
      const next = { ...prev, [id]: val };
      // If Q10 changes, clamp sectionIndex to new visibleSections length
      if (id === "q10") {
        const newVisible = computeVisibleSections(next);
        setSectionIndex((i) => Math.min(i, newVisible.length - 1));
      }
      return next;
    });
  }, []);

  const goToNext = () => {
    if (isLast) return handleSubmit();
    setDirection(1);
    setSectionIndex((i) => Math.min(i + 1, visibleSections.length - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToPrev = () => {
    if (sectionIndex === 0) return;
    setDirection(-1);
    setSectionIndex((i) => i - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setError("");
    try {
      const payload = {
        sections: visibleSections.map((section) => ({
          title: section.title,
          questions: section.questions.map((q) => ({
            question: q.question,
            answer: answers[q.id] ?? "",
          })),
        })),
        submittedAt: new Date().toISOString(),
      };

      const res = await fetch("/api/client-onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Submission failed");
      setStep("success");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setError("Something went wrong. Please try again or email us directly at thedigitalninjatechnologies@gmail.com");
    } finally {
      setSubmitting(false);
    }
  };

  // Validate required fields in section 1
  const requiredMissing =
    sectionIndex === 0 &&
    currentSection.questions
      .filter((q) => q.required)
      .some((q) => {
        const a = answers[q.id];
        return !a || (typeof a === "string" && !a.trim());
      });

  const productTypes = getSelectedProductTypes(answers);
  const hasProductType = productTypes.length > 0;

  // ── Intro Screen ─────────────────────────────────────────────────────────
  if (step === "intro") {
    return (
      <main className="min-h-screen bg-white">
        {/* Nav */}
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link
              href="/booking"
              className="text-sm font-semibold text-[#FF6602] hover:text-[#FD3600] transition-colors"
            >
              Book a Call Instead →
            </Link>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative overflow-hidden">
          {/* Gradient background blob */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(255,102,2,0.12) 0%, transparent 70%)",
            }}
          />
          <div className="max-w-3xl mx-auto px-6 pt-20 pb-16 text-center relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 bg-orange-50 text-[#FF6602] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-orange-100">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6602] animate-pulse" />
                Client Onboarding
              </span>
              <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-5 leading-tight tracking-tight" style={{ textWrap: "balance" }}>
                Let&apos;s understand your{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(135deg, #FF6602, #FD3600)" }}
                >
                  vision
                </span>{" "}
                before we build it.
              </h1>
              <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto leading-relaxed">
                This questionnaire adapts to your project type — website, mobile app, SaaS, or AI product —
                so you only see the questions relevant to what you&apos;re building. Most clients finish in
                about 15 minutes.
              </p>

              {/* Stats row */}
              <div className="flex flex-wrap justify-center gap-6 mb-10">
                {[
                  { n: "8–13", label: "Sections" },
                  { n: "~15", label: "Min to complete" },
                  { n: "100%", label: "Tailored to you" },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col items-center">
                    <span className="text-3xl font-black text-gray-900">{s.n}</span>
                    <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">{s.label}</span>
                  </div>
                ))}
              </div>

              <motion.button
                onClick={() => setStep("form")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white text-base font-bold shadow-lg shadow-orange-200 transition-all"
                style={{ background: "linear-gradient(135deg, #FF6602, #FD3600)" }}
              >
                Start the Questionnaire
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.button>
              <p className="text-xs text-gray-400 mt-4">
                You can skip any question you&apos;re unsure about.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section overview */}
        <section className="max-w-3xl mx-auto px-6 pb-20">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">
            What we&apos;ll cover
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {SECTIONS.map((s, i) => {
              const isConditional = Boolean(s.showFor);
              return (
                <div
                  key={s.id}
                  className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-200 ${
                    isConditional
                      ? "border-gray-100 bg-gray-50/50 hover:border-orange-100"
                      : "border-gray-100 bg-gray-50 hover:border-orange-200 hover:bg-orange-50/50"
                  }`}
                >
                  <span className="text-xl flex-shrink-0">{s.emoji}</span>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold text-[#FF6602] tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                      {isConditional && (
                        <span className="ml-1 text-gray-300 font-normal">if relevant</span>
                      )}
                    </p>
                    <p className="text-[13px] font-semibold text-gray-700 leading-tight truncate">
                      {s.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    );
  }

  // ── Success Screen ───────────────────────────────────────────────────────
  if (step === "success") {
    return (
      <main className="min-h-screen bg-white flex flex-col">
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-6 h-16 flex items-center">
          </div>
        </nav>
        <div className="flex-1 flex items-center justify-center px-6 py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-lg"
          >
            <div
              className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl shadow-xl shadow-orange-100"
              style={{ background: "linear-gradient(135deg, #FF6602, #FD3600)" }}
            >
              🎉
            </div>
            <h1 className="text-3xl font-black text-gray-900 mb-3">
              We&apos;ve got your answers!
            </h1>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Thank you for taking the time to fill this out. Our team will review your submission
              and reach out shortly to discuss next steps.
            </p>
            <div className="bg-orange-50 rounded-2xl p-6 mb-8 text-left border border-orange-100">
              <p className="text-sm font-bold text-[#FF6602] uppercase tracking-wide mb-3">
                What happens next
              </p>
              <ol className="space-y-2">
                {[
                  "Our team reviews your submission (usually within 24–48 hours)",
                  "We reach out to clarify any gaps or schedule a discovery call",
                  "We prepare a proposed scope, timeline, and quotation",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-[#FF6602] text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/"
                className="px-6 py-3 rounded-xl border border-gray-200 text-gray-700 font-semibold text-sm hover:border-gray-300 transition-colors"
              >
                Back to Home
              </Link>
              <Link
                href="/booking"
                className="px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all"
                style={{ background: "linear-gradient(135deg, #FF6602, #FD3600)" }}
              >
                Book a Discovery Call →
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    );
  }

  // ── Form Screen ──────────────────────────────────────────────────────────
  return (
    <main className="min-h-screen bg-gray-50/70">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-2xl mx-auto px-6 h-16 flex items-center justify-between">
          <ProgressBar current={sectionIndex + 1} total={visibleSections.length} />
          <button
            onClick={() => setStep("intro")}
            className="ml-4 text-xs font-medium text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
          >
            Exit
          </button>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
        {/* Product type badge — shown once Q10 is answered */}
        {hasProductType && (
          <div className="flex flex-wrap gap-2 mb-4">
            {productTypes.map((t) => {
              const labels: Record<ProductType, string> = {
                website: "🌐 Website",
                mobile: "📱 Mobile App",
                saas: "☁️ SaaS",
                ecommerce: "🛒 E-commerce",
                ai: "🤖 AI Product",
                internal: "🔧 Internal Tool",
              };
              return (
                <span
                  key={t}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-[12px] font-semibold text-[#FF6602]"
                >
                  {labels[t]}
                </span>
              );
            })}
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-[12px] font-medium text-gray-500">
              {visibleSections.length} sections for your project
            </span>
          </div>
        )}

        {/* Mini section nav strip */}
        <div className="flex gap-1 mb-8 overflow-x-auto pb-1 scrollbar-hide">
          {visibleSections.map((s, i) => {
            const filled = countFilled(s, answers);
            const done = filled > 0;
            const active = i === sectionIndex;
            return (
              <button
                key={s.id}
                onClick={() => {
                  setDirection(i > sectionIndex ? 1 : -1);
                  setSectionIndex(i);
                }}
                title={s.title}
                className={`flex-shrink-0 w-6 h-2 rounded-full transition-all duration-200 ${
                  active
                    ? "bg-[#FF6602] w-8"
                    : done
                    ? "bg-orange-200"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              />
            );
          })}
        </div>

        {/* Section card */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSection.id}
            custom={direction}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -40 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Section header */}
            <div
              className="rounded-2xl p-6 mb-6 text-white relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #FF6602 0%, #FD3600 100%)" }}
            >
              {/* Decorative circles */}
              <div className="absolute right-4 top-4 w-20 h-20 rounded-full bg-white/10 pointer-events-none" />
              <div className="absolute right-12 top-10 w-12 h-12 rounded-full bg-white/10 pointer-events-none" />
              <div className="flex items-start gap-4 relative">
                <span className="text-4xl">{currentSection.emoji}</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/70 mb-1">
                    Section {sectionIndex + 1} of {visibleSections.length} · {currentSection.questions.length} questions
                  </p>
                  <h2 className="text-xl font-black leading-tight">{currentSection.title}</h2>
                  <p className="text-sm text-white/80 mt-1">{currentSection.tagline}</p>
                </div>
              </div>
            </div>

            {/* Questions */}
            <div className="space-y-5">
              {currentSection.questions.map((q, qi) => (
                <motion.div
                  key={q.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: qi * 0.04, duration: 0.3 }}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
                >
                  <label className="block mb-3">
                    <span className="text-[11px] font-bold text-[#FF6602] uppercase tracking-wider">
                      Q{visibleSections.slice(0, sectionIndex).reduce((acc, s) => acc + s.questions.length, 0) + qi + 1}
                      {q.required && <span className="text-red-500 ml-1">*</span>}
                    </span>
                    <p className="text-[15px] font-semibold text-gray-900 mt-1 leading-snug">
                      {q.question}
                    </p>
                  </label>
                  <QuestionField
                    q={q}
                    value={getAnswer(answers, q.id)}
                    onChange={(val) => setAnswer(q.id, val)}
                  />
                </motion.div>
              ))}
            </div>

            {/* Error message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-red-50 border border-red-100 rounded-xl text-sm text-red-600"
              >
                {error}
              </motion.div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 gap-4">
              <button
                onClick={goToPrev}
                disabled={sectionIndex === 0}
                className="flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold text-sm hover:border-gray-300 hover:bg-gray-50 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back
              </button>

              <div className="text-xs text-gray-400 font-medium text-center">
                {countFilled(currentSection, answers)}/{currentSection.questions.length} answered
              </div>

              <motion.button
                onClick={goToNext}
                disabled={requiredMissing || submitting}
                whileHover={!requiredMissing && !submitting ? { scale: 1.02 } : {}}
                whileTap={!requiredMissing && !submitting ? { scale: 0.98 } : {}}
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold text-sm shadow-md shadow-orange-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ background: "linear-gradient(135deg, #FF6602, #FD3600)" }}
              >
                {submitting ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                      <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="opacity-75" />
                    </svg>
                    Sending...
                  </>
                ) : isLast ? (
                  <>
                    Submit
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                  </>
                ) : (
                  <>
                    Next
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </>
                )}
              </motion.button>
            </div>

            {/* Skip hint */}
            {!isLast && (
              <p className="text-center text-xs text-gray-400 mt-4">
                Not sure? Skip any question and come back later.
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
