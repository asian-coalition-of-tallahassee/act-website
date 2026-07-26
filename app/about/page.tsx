import Image from "next/image";

const executiveOfficers = [
  { name: "Aileen Ray", role: "Chair" },
  { name: "Aurora Hansen", role: "Secretary" },
  { name: "Angelina Wai", role: "Treasurer" },
  { name: "Mitchell Herring", role: "General Counsel" },
  { name: "T.S. Wu", role: "Auditor" },
  { name: "Jane Marks", role: "Honorary Chairperson" },
];

const boardOfDirectors = [
  { name: "Nani Looney, Viet Vu, Sunny Long", role: "Fundraising" },
  { name: "Earl and Portia Campos", role: "Education and Cultural Affairs" },
  { name: "Samuel Chang, Heewon Seo", role: "Technology" },
];

const memberAssociations = [
  "Big Bend Filipino Association, Inc.",
  "Chinese Association of Tallahassee",
  "India Association of Tallahassee",
  "Japanese Community of Tallahassee",
  "Vietnamese Community of Tallahassee",
  "Taiwanese Association of Tallahassee",
  "TSC Dance Company",
  "AASU, Florida State University",
  "FSA, Florida State University",
];

const otherRoles = [
  { names: "Kim Vega, Master Cap Cap Aperente, Scott Searce", role: "Media" },
  { names: "Dolly Earl, Kim Vega, Rowena Entea", role: "Videographers & Photographers" },
  { names: "Amy Mann", role: "Volunteer Coordinator" },
  { names: "Heesu Seo, Weng Entea, Abbie Egina, Khaliah Haynes, Shawn Sun, Lucy Luu", role: "Volunteer Lead Staff" },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 md:py-24">

      {/* About heading + story */}
      <h1 className="text-4xl font-black text-black">About Us</h1>

      <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:gap-16">
        <div className="flex-1">
          <p className="font-semibold text-black">The Full Story</p>
          <p className="mt-4 text-base leading-relaxed text-black">
            The Asian Coalition of Tallahassee (ACT) is a non-profit organization that works
            to promote cultural understanding and appreciation for the Asian community in the
            Tallahassee area. We strive to provide a safe and welcoming environment for Asian
            Americans to share their unique perspectives and experiences.
          </p>
          <p className="mt-4 text-base leading-relaxed text-black">
            ACT works to increase awareness of Asian cultures through our Experience Asia
            Festival, which highlights a variety of cultural performances, art, and cuisine
            from around the world. We also provide educational programs and resources to
            promote the integration of Asian Americans into the local community.
          </p>
          <p className="mt-4 text-base leading-relaxed text-black">
            Formed in December 2004, ACT was initiated by the Big Bend Filipino-American
            Association, Inc (BBFAA) under the leadership of Dr. Clyde Diao. It is an
            umbrella organization comprised of various Asian-related organizations as well
            as individual members and is intended to be the voice of the Asian community.
          </p>
          <p className="mt-4 text-base leading-relaxed text-black">
            ACT welcomes everyone who is interested in Asian culture to join, regardless of
            age, sex, race, or ethnicity. Bringing in non-Asian members into ACT is essential
            as it helps foster better understanding within the local community. ACT provides
            a venue by which the East meets the West.
          </p>
        </div>

        {/* Replace src with Asiantlh_about.jpeg once added to /public/assets/images/ */}
        <div className="w-full lg:w-96">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/assets/images/carousel-2.png"
              alt="Asian Coalition of Tallahassee community"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-black">Our Mission</h2>
        <p className="mt-4 text-base leading-relaxed text-black">
          Our mission is to unite various Asian communities within the Tallahassee area
          and promote and share our rich Asian cultural heritage with the local community
          through community activity involvement and cultural events.
        </p>
      </div>

      {/* Board */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-black">Our Board</h2>
        <p className="mt-3 text-base leading-relaxed text-black">
          Our volunteer board members bring a wealth of diverse knowledge and cultural
          experiences to create unique and exciting opportunities for the Tallahassee community.
        </p>

        <div className="mt-10 flex flex-col gap-12 lg:flex-row lg:gap-16">
          {/* Left column */}
          <div className="flex-1">
            <p className="font-semibold text-black">Executive Officers</p>
            <ul className="mt-3 space-y-1">
              {executiveOfficers.map((o) => (
                <li key={o.name} className="text-base text-black">
                  <span className="font-bold">{o.name}</span>, {o.role}
                </li>
              ))}
            </ul>

            <p className="mt-8 font-bold text-black">Board of Directors</p>
            <ul className="mt-3 space-y-1">
              {boardOfDirectors.map((o) => (
                <li key={o.name} className="text-base text-black">
                  <span className="font-bold">{o.name}</span>, {o.role}
                </li>
              ))}
            </ul>

            <p className="mt-8 font-bold text-black">Other Roles</p>
            <ul className="mt-3 space-y-1">
              {otherRoles.map((o) => (
                <li key={o.role} className="text-base text-black">
                  <span className="font-bold">{o.names}</span> — {o.role}
                </li>
              ))}
            </ul>
          </div>

          {/* Right column */}
          <div className="flex-1">
            <p className="font-semibold text-black">Member Associations</p>
            <ul className="mt-3 space-y-1">
              {memberAssociations.map((name) => (
                <li key={name} className="text-base text-black">{name}</li>
              ))}
            </ul>

            {/* Replace src with Img.jpg once added to /public/assets/images/ */}
            <div className="mt-8 relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="/assets/images/carousel-1.png"
                alt="ACT board"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
