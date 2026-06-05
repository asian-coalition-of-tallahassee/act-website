import Image from "next/image";

const sponsors = [
  {
    name: "City of Tallahassee",
    src: "/assets/sponsors/city-of-tallahassee.png",
  },
  {
    name: "Leon County",
    src: "/assets/sponsors/leoncounty.png",
  },
  {
    name: "Visit Tallahassee",
    src: "/assets/sponsors/visit-tallahassee.png",
  },
  {
    name: "Council on Culture & Arts",
    src: "/assets/sponsors/coca.png",
  },
] as const;

export default function SponsorsSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <p className="mb-10 text-center font-serif text-[clamp(1.5rem,3vw,2rem)] font-normal text-charcoal">
          Thank you to our partners!
        </p>

        <ul className="flex flex-nowrap items-center justify-center gap-x-8 overflow-x-auto md:gap-x-12 lg:gap-x-16">
          {sponsors.map((sponsor) => (
            <li key={sponsor.name} className="shrink-0">
              <div className="flex h-20 w-28 items-center justify-center sm:h-24 sm:w-32 md:h-28 md:w-36">
                <Image
                  src={sponsor.src}
                  alt={sponsor.name}
                  width={280}
                  height={280}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
