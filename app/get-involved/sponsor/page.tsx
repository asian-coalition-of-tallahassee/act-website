const SPONSORSHIP_FORM =
  "https://drive.google.com/file/d/1cKXEtnpfQlXBkwov47BJhlo7bYMGcfYp/view?usp=sharing";

export default function SponsorPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <h1 className="text-5xl font-black text-black">Sponsor Us</h1>

      <div className="mt-12">
        <p className="text-center font-bold text-black">
          Interested in sponsoring the Asian Coalition of Tallahassee?
        </p>
        <p className="mt-4 text-base leading-relaxed text-black">
          ACT sponsorships help fund cultural programming, community events, and outreach
          initiatives across the Tallahassee area. As a sponsor, your organization will be
          recognized across our event materials, social media, and website. Whether you are
          a local business or a larger organization, we would love to connect and find the
          right partnership for you.
        </p>

        <p className="mt-6 text-base leading-relaxed text-black">
          <a
            href={SPONSORSHIP_FORM}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline"
          >
            Experience Asia 2026 Sponsorship Form (PDF)
          </a>
        </p>

        <p className="mt-4 text-base leading-relaxed text-black">
          Questions? Reach out to us at{" "}
          <a href="mailto:info@actallahassee.org" className="underline">
            info@actallahassee.org
          </a>
          .
        </p>
      </div>
    </main>
  );
}
