"use client";

import { useId, useState } from "react";

const faqCategories = [
  {
    title: "Event Information",
    items: [
      {
        question: "What is Experience Asia?",
        answer:
          "Experience Asia is ACT's flagship cultural festival celebrating Asian heritage across the Tallahassee community. Enjoy performances, food, art, and family activities that highlight the diversity of Asian cultures in North Florida.",
      },
      {
        question: "When is Experience Asia 2026?",
        answer:
          "Experience Asia 2026 takes place in spring 2026. Check our Events page for the official schedule, program updates, and ticket information as they are announced.",
      },
      {
        question: "Do I need tickets to attend?",
        answer:
          "Admission details vary by event. Many ACT programs are free and open to the public. For ticketed experiences, purchase links will be posted on the Events page and shared through our newsletter.",
      },
      {
        question: "Is the festival family-friendly?",
        answer:
          "Yes. Experience Asia is designed for all ages, with activities for children, cultural demonstrations, and spaces to relax throughout the day.",
      },
    ],
  },
  {
    title: "Food & Drinks",
    items: [
      {
        question: "Will food be available at the festival?",
        answer:
          "Yes. Local vendors and community partners offer a variety of Asian cuisines and beverages. Options typically include vegetarian and halal-friendly choices—check on-site signage for details.",
      },
      {
        question: "Can I bring outside food or drinks?",
        answer:
          "Outside food and beverage policies depend on the venue. We will publish any restrictions on the Events page before festival weekend.",
      },
      {
        question: "Are there options for dietary restrictions?",
        answer:
          "Many vendors accommodate common dietary needs. We encourage you to ask vendors directly about ingredients and allergens at their booths.",
      },
    ],
  },
  {
    title: "Location & Logistics",
    items: [
      {
        question: "Where is the festival held?",
        answer:
          "The venue for Experience Asia 2026 will be announced on our Events page. Past ACT programs have been held at community parks and cultural centers throughout the Tallahassee area.",
      },
      {
        question: "Is parking available?",
        answer:
          "Parking information, including accessible parking, will be shared before the event. We recommend arriving early on peak days.",
      },
      {
        question: "What should I bring?",
        answer:
          "Bring comfortable shoes, sunscreen, and a reusable water bottle. A hat and light layers are helpful for outdoor programs. Strollers and wheelchairs are welcome.",
      },
      {
        question: "What happens if it rains?",
        answer:
          "Programs may continue with adjusted schedules or move to covered areas when possible. Follow our social channels and the Events page for weather-related updates.",
      },
    ],
  },
  {
    title: "About ACT",
    items: [
      {
        question: "What is the Asian Coalition of Tallahassee?",
        answer:
          "ACT is a nonprofit coalition that celebrates Asian cultures, supports community members, and advocates for inclusion across the Tallahassee region through events, partnerships, and outreach.",
      },
      {
        question: "How can I volunteer or partner with ACT?",
        answer:
          "Visit our Get Involved page to sign up as a volunteer, explore sponsorship opportunities, or learn about donations that support our year-round programs.",
      },
      {
        question: "How do I contact ACT?",
        answer:
          "Reach us through the contact form on our About page or connect with us on social media. We aim to respond within a few business days.",
      },
    ],
  },
];

export default function FaqAccordion() {
  const baseId = useId();
  const [openKey, setOpenKey] = useState<string | null>(null);

  const toggle = (key: string) => {
    setOpenKey((current) => (current === key ? null : key));
  };

  return (
    <div className="space-y-12">
      {faqCategories.map((category) => (
        <section key={category.title}>
          <h2 className="text-xl font-semibold text-black">{category.title}</h2>

          <ul className="mt-4">
            {category.items.map((item, index) => {
              const key = `${category.title}-${index}`;
              const isOpen = openKey === key;
              const panelId = `${baseId}-panel-${key}`;
              const buttonId = `${baseId}-button-${key}`;

              return (
                <li key={key} className="border-t border-gray-200 last:border-b">
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggle(key)}
                      className="flex w-full items-center justify-between gap-4 py-4 text-left"
                    >
                      <span className="text-base font-medium text-black">{item.question}</span>
                      <svg
                        className={`h-4 w-4 shrink-0 text-red-600 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    aria-hidden={!isOpen}
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-4 text-base leading-relaxed text-gray-600">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}
