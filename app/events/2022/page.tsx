import GalleryClient from "@/app/components/GalleryClient";

export default function ExperienceAsia2022Page() {
  return (
    <main>
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h1 className="text-4xl font-black text-black">Experience Asia 2022</h1>
        <p className="mt-4 text-base text-black">
          Photos from the 2022 Experience Asia Festival.
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-16">
        <GalleryClient />
      </div>
    </main>
  );
}
