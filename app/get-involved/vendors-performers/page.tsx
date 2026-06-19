const FORMS = {
  vendor:
    "https://drive.google.com/file/d/156-2MLT84l0zb-pDFRwcxJriT7GY0WkW/view?usp=sharing",
  performer:
    "https://drive.google.com/file/d/13WJlo2ZDAv_tfdkP3ASHk1oeCNyNP7t_/view?usp=sharing",
  liabilityWaiver:
    "https://drive.google.com/file/d/1GaUrkeQPVs8UlFl01D-Bmr7r8PPGhVJF/view?usp=sharing",
} as const;

export default function VendorsPerformersPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <h1 className="text-5xl font-black text-black">Vendors &amp; Performers</h1>

      <div className="mt-12">
        <p className="text-center font-bold text-black">
          Thank you to all vendors and performers who participated in Experience Asia 2025!
        </p>
        <p className="mt-4 text-base leading-relaxed text-black">
          Experience Asia is made vibrant by the artists, food vendors, craft sellers, and
          cultural performers who bring our community together. We are grateful for every
          person who shared their talent and tradition with Tallahassee.
        </p>

        <div className="mt-10 space-y-4">
          <h2 className="text-xl font-semibold text-black">Experience Asia 2026 Applications</h2>
          <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-black">
            <li>
              <a
                href={FORMS.vendor}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Vending and Booth Application (PDF)
              </a>
            </li>
            <li>
              <a
                href={FORMS.performer}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Performer Application (PDF)
              </a>
            </li>
            <li>
              <a
                href={FORMS.liabilityWaiver}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Liability Waiver (PDF)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
