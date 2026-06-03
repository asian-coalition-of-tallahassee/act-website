"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

/** Hero photos in public/assets/images/ */
export const heroSlides = [
  { src: "/assets/images/carousel-2.png", alt: "Experience Asia festival" },
  { src: "/assets/images/carousel-1.png", alt: "Cultural celebration" },
] as const;

const INTERVAL_MS = 5000;
const TRANSITION_MS = 600;

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    setIsTransitioning(true);
    setActiveIndex(index);
    window.setTimeout(() => setIsTransitioning(false), TRANSITION_MS);
  }, []);

  const goNext = useCallback(() => {
    goTo((activeIndex + 1) % heroSlides.length);
  }, [activeIndex, goTo]);

  useEffect(() => {
    const timer = window.setInterval(goNext, INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [goNext]);

  return (
    <div className="relative w-full border-b border-light-gray bg-charcoal">
      <div className="relative h-[78vh] min-h-[420px] w-full overflow-hidden sm:h-[82vh] md:h-[85vh] lg:min-h-[560px]">
        {heroSlides.map((slide, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={slide.src}
              className="absolute inset-0 transition-opacity ease-in-out"
              style={{
                opacity: isActive ? 1 : 0,
                transitionDuration: `${TRANSITION_MS}ms`,
                pointerEvents: isActive ? "auto" : "none",
              }}
              aria-hidden={!isActive}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
            </div>
          );
        })}

        <div
          className="pointer-events-none absolute inset-0 z-10 bg-black/35"
          aria-hidden
        />

        <div className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center">
          <h1 className="font-serif text-[clamp(2.75rem,10vw,5.5rem)] font-normal uppercase leading-[0.95] tracking-[-0.02em] text-white">
            <span className="block">Experience</span>
            <span className="block">Asia</span>
            <span className="block">Festival</span>
          </h1>
          <p className="mt-6 text-nav uppercase tracking-[0.22em] text-white/90">
            September 22-23, 2027, Tallahassee, FL
          </p>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 gap-2 md:bottom-6">
        {heroSlides.map((slide, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={slide.src}
              type="button"
              onClick={() => goTo(index)}
              disabled={isTransitioning && isActive}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={isActive ? "true" : undefined}
              className={`h-2.5 w-2.5 rounded-full border-2 transition-colors ${
                isActive
                  ? "border-white bg-white"
                  : "border-white/70 bg-transparent hover:border-white"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
