import Image from "next/image";
import Link from "next/link";

export default function GetInvolvedSection() {
  return (
    <section className="bg-brand-red-soft">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 md:py-16 lg:flex-row lg:items-center lg:gap-16">
        <div className="lg:w-1/2">
          <h2 className="font-serif text-[clamp(2rem,4vw,2.75rem)] font-normal leading-[1.1] tracking-[-0.01em] text-charcoal">
            Help make Experience Asia 2026 happen.
          </h2>

          <Link
            href="/get-involved"
            className="mt-8 inline-block rounded-sm bg-black px-8 py-3.5 text-nav uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-85"
          >
            Get Involved
          </Link>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/assets/images/carousel-1.png"
              alt="Volunteers and community at Experience Asia"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
