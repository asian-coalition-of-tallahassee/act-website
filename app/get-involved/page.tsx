import Link from "next/link";

const options = [
  {
    label: "Volunteer",
    description: "Help make Experience Asia happen — complete the liability waiver to get started.",
    href: "/get-involved/volunteer",
  },
  {
    label: "Vendors & Performers",
    description: "Apply as a vendor or performer for Experience Asia 2026.",
    href: "/get-involved/vendors-performers",
  },
  {
    label: "Sponsor Us",
    description: "Support ACT as a community or corporate partner.",
    href: "/get-involved/sponsor",
  },
];

export default function GetInvolvedPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <p className="text-nav uppercase tracking-[0.12em] text-accent">Join Us</p>
      <h1 className="mt-3 text-h1 uppercase text-charcoal">Get Involved</h1>
      <p className="mt-6 max-w-2xl text-body1 text-dark-gray">
        There are many ways to be part of the Asian Coalition of Tallahassee.
      </p>

      <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
        {options.map((option) => (
          <Link
            key={option.href}
            href={option.href}
            className="group flex flex-col gap-2 border border-light-gray bg-off-white px-6 py-6 transition-colors hover:border-charcoal sm:w-72"
          >
            <span className="text-h4 text-charcoal">{option.label}</span>
            <span className="text-body2 text-dark-gray">{option.description}</span>
            <span className="mt-2 text-nav uppercase tracking-[0.08em] text-accent">
              Learn more →
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
