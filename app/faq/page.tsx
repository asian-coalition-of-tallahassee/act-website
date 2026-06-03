import FaqAccordion from "@/app/components/FaqAccordion";

export default function FAQPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <h1 className="text-4xl font-black text-black">FAQs</h1>
      <p className="mt-4 text-base text-black">
        Everything you need to know about Experience Asia and the Asian Coalition of Tallahassee.
      </p>

      <div className="mt-12">
        <FaqAccordion />
      </div>
    </main>
  );
}
