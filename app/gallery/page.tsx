import GalleryClient from "@/app/components/GalleryClient";

export default function GalleryPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <h1 className="text-4xl font-black text-black">Photo Gallery</h1>
      <p className="mt-4 text-base text-black">
        Moments from past Experience Asia festivals.
      </p>

      <div className="mt-12">
        <GalleryClient />
      </div>
    </main>
  );
}
