import Image from "next/image";

export default function ExperienceAsia2026Page() {
  return (
    <main>
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-5">
        <h1 className="text-4xl font-black text-black text-center">Experience Asia 2026's Performances!</h1>
      </div>
      <div className="bg-[#FFBFB3] mx-auto max-w-3xl px-6 py-16 md:py-6">
        <div className="mt-8 overflow-hidden max-w-2xl max-h-3xl mx-auto shadow-lg rounded">
          <Image
            src="/assets/images/EA 2026 Schedule/EA 2026 Schedule 1.jpg"
            alt="Experience Asia 2026 Schedule Page 1"
            width={800}
            height={600}
            className="object-cover w-full h-auto shadow-inner"
          />
        </div>
        <div className="mt-8 overflow-hidden max-w-2xl max-h-3xl mx-auto shadow-lg rounded">
          <Image
            src="/assets/images/EA 2026 Schedule/EA 2026 Schedule 2.jpg"
            alt="Experience Asia 2026 Schedule Page 2"
            width={800}
            height={600}
            className="object-cover w-full h-auto shadow-inner"
          />
        </div>
      </div>
    </main>
  );
}
