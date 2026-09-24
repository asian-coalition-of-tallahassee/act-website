import HeroCarousel from "./components/HeroCarousel";
import SponsorsSection from "./components/SponsorsSection";
import VideoSection from "./components/VideoSection";

export default function Home() {
  return (
    <>
      <div className="mt-16 flex min-h-[80px] items-center justify-center">
        <a
          href="\events\2026-EA\2026-EA-Schedule"
          className="bg-red-300 text-center text-3xl font-bold text-black underline flex items-center justify-center h-full"
        >
          Click here to view Experience Asia 2026&apos;s performance schedule!
        </a>
      </div>
      <HeroCarousel />
      <VideoSection />
      <SponsorsSection />
    </>
  );
}
