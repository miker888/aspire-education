// All site copy and contact details live here, so the next site is mostly
// a matter of editing this file and swapping the images in src/assets.
// Anything in [brackets] is a placeholder waiting on the client.

import type { IconName } from "@/components/Icon";

export const site = {
  // Tags every lead in the shared Supabase `leads` table.
  key: "aspire-education",
  name: "Aspire Education",
  tagline: "Brighter minds. Brighter tomorrows.",
  motto: "Learn · Evolve · Succeed",
  intro:
    "Aspire Education helps students and newcomers build the skills, confidence and credentials to grow their future in Canada.",
  metaDescription:
    "Aspire Education in Calgary helps students and newcomers build the skills, confidence and credentials to grow their future in Canada.",
  poweredBy: "AV Ventures",
  nextIntake: "[Month Year]",
  replyTime: "[X business days]",

  contact: {
    email: "info@aspireresources.ca",
    phone: "403-861-3625",
    phoneHref: "tel:+14038613625",
    location: "Calgary, Alberta",
  },

  nav: [
    { label: "Pathways", href: "#pathways" },
    { label: "How it works", href: "#how" },
    { label: "Why Aspire", href: "#why" },
    { label: "About", href: "#founder" },
    { label: "Contact", href: "#contact" },
  ],

  pathways: [
    {
      icon: "briefcase",
      title: "Career training",
      body: "Practical, job-ready courses that help you move into a new role or industry.",
      detail: "[Program names · duration · format]",
    },
    {
      icon: "globe",
      title: "International students",
      body: "Guidance for students coming to Canada, from choosing a program to preparing for your first term.",
      detail: "[Partner schools · intake dates]",
    },
    {
      icon: "book",
      title: "Tutoring and test prep",
      body: "One-on-one and small-group support to raise grades and get ready for exams.",
      detail: "[Subjects · exams covered]",
    },
    {
      icon: "people",
      title: "Newcomer workshops",
      body: "Short sessions on resumes, interviews and working in Canada.",
      detail: "[Upcoming workshop dates]",
    },
  ] satisfies { icon: IconName; title: string; body: string; detail: string }[],

  steps: [
    { title: "Book a consultation", body: "Tell us where you are now and where you want to go." },
    { title: "Get your learning plan", body: "We recommend a program, schedule and next steps that fit your life." },
    { title: "Start and grow", body: "Learn with ongoing support until you reach your goal." },
  ],

  pillars: [
    { title: "Learn", body: "Build real skills with programs shaped around your goals." },
    { title: "Evolve", body: "Grow your confidence as you take on new challenges in a new setting." },
    { title: "Succeed", body: "Leave ready for your next role, school or chapter in Canada." },
  ],

  founder: {
    name: "Abby Villanueva",
    role: "Founder, AV Ventures",
    heading: "Built by someone who has walked the path.",
    paragraphs: [
      "Abby Villanueva began her journey in Canada as a nanny. Through years of hard work, she built AV Ventures, a Calgary group of businesses in education, employment, marketing and property development.",
      "Aspire Education brings that same drive to every learner who is starting something new.",
    ],
    quote: "[A short note from Abby on why she started Aspire Education.]",
  },
} as const;

export type Site = typeof site;
