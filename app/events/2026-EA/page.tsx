import Image from "next/image";

export default function ExperienceAsia2026Page() {
  return (
    <main>
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-5">
        <h1 className="text-4xl font-black text-black">Experience Asia 2026</h1>
        <p className="mt-4 font-bold text-base text-black">
          Save the date for the Asian Coalition of Tallahassee's annual Experience Asia Festival!<br></br> Join us on Saturday, September 26th from 10 am to 6 pm at Tom Brown Park!
        </p>
      </div>
      <div className="bg-[#FFBFB3] mx-auto max-w-3xl px-6 py-6 md:py-6">
        <div className="mt-8 overflow-hidden max-w-2xl max-h-3xl mx-auto shadow-lg rounded">
          <Image
            src="/assets/images/Event Flyers/EA 26 Flyer.png"
            alt="Experience Asia 2026 Flyer"
            width={800}
            height={600}
            className="object-cover w-full h-auto shadow-inner"
          />
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="flex-1">
          <p className="font-semibold text-black">Come Join us on September 26th!</p>
          <p className="mt-4 text-base leading-relaxed text-black">
            The Asian Coalition of Tallahassee (ACT) presents its annual Experience Asia Festival for 2026 on Saturday, September 26th from 10 am to 6 pm at Tom Brown Park!<br></br>
            Featuring free admission, the family-friendly festival celebrates the diversity of Asian and Asian Pacific cultures through performances, demonstrations, cuisine, crafts, and more!<br></br>
            Experience Asia features more than 60 vendors of food, arts, crafts, clothing, jewelry, and other cultural items that are available for purchase!
          </p>
        </div>
      </div>
    </main>
  );
}
