const VOLUNTEER_PACKET =
  "https://drive.google.com/file/d/1KKGAPYTQruiKMcIWfk5WGVLFAfjoyKHm/view?usp=sharing";

export default function VolunteerPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <h1 className="text-5xl font-black text-black">Volunteer</h1>

      <div className="mt-12">
        <p className="text-center font-bold text-black">
          Thank you to everyone who volunteered at Experience Asia 2025!
        </p>
        <p className="mt-4 text-base leading-relaxed text-black">
          Our volunteers are the backbone of every ACT event. From greeting guests and
          managing operations to assisting performers and supporting vendors — your time
          and energy make Experience Asia possible. Each year our volunteers serve in a
          wide range of roles including event setup, guest services, vendor coordination,
          and stage support.
        </p>

        <p className="mt-6 text-base leading-relaxed text-black">
          All volunteers must complete the{" "}
          <a
            href={VOLUNTEER_PACKET}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline"
          >
            Experience Asia 2026 Volunteer Packet (PDF)
          </a>
          .
        </p>
      </div>
    </main>
  );
}
