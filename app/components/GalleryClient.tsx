"use client";

import { useEffect, useState } from "react";
import { imgUrl } from "@/app/lib/cloudinary";

type GalleryPhoto = {
  publicId: string;
  alt: string;
  year: number;
  event: string;
};

const photos: GalleryPhoto[] = [
    {"publicId":"act/gallery/2022/20220924-ExperienceAsia (1 of 37)","alt":"Experience Asia 2022","year":2022,"event":"Experience Asia 2022"},
    {"publicId":"act/gallery/2022/20220924-ExperienceAsia (10 of 37)","alt":"Experience Asia 2022","year":2022,"event":"Experience Asia 2022"},
    {"publicId":"act/gallery/2022/20220924-ExperienceAsia (11 of 37)","alt":"Experience Asia 2022","year":2022,"event":"Experience Asia 2022"},
    {"publicId":"act/gallery/2022/20220924-ExperienceAsia (12 of 37)","alt":"Experience Asia 2022","year":2022,"event":"Experience Asia 2022"},
    {"publicId":"act/gallery/2022/20220924-ExperienceAsia (13 of 37)","alt":"Experience Asia 2022","year":2022,"event":"Experience Asia 2022"},
    {"publicId":"act/gallery/2022/20220924-ExperienceAsia (14 of 37)","alt":"Experience Asia 2022","year":2022,"event":"Experience Asia 2022"},
    {"publicId":"act/gallery/2022/20220924-ExperienceAsia (15 of 37)","alt":"Experience Asia 2022","year":2022,"event":"Experience Asia 2022"},
    {"publicId":"act/gallery/2022/20220924-ExperienceAsia (16 of 37)","alt":"Experience Asia 2022","year":2022,"event":"Experience Asia 2022"},
    {"publicId":"act/gallery/2022/20220924-ExperienceAsia (17 of 37)","alt":"Experience Asia 2022","year":2022,"event":"Experience Asia 2022"},
    {"publicId":"act/gallery/2022/20220924-ExperienceAsia (18 of 37)","alt":"Experience Asia 2022","year":2022,"event":"Experience Asia 2022"},
    {"publicId":"act/gallery/2022/20220924-ExperienceAsia (19 of 37)","alt":"Experience Asia 2022","year":2022,"event":"Experience Asia 2022"},
    {"publicId":"act/gallery/2022/20220924-ExperienceAsia (2 of 37)","alt":"Experience Asia 2022","year":2022,"event":"Experience Asia 2022"},
    {"publicId":"act/gallery/2022/20220924-ExperienceAsia (20 of 37)","alt":"Experience Asia 2022","year":2022,"event":"Experience Asia 2022"},
    {"publicId":"act/gallery/2022/20220924-ExperienceAsia (21 of 37)","alt":"Experience Asia 2022","year":2022,"event":"Experience Asia 2022"},
    {"publicId":"act/gallery/2022/20220924-ExperienceAsia (22 of 37)","alt":"Experience Asia 2022","year":2022,"event":"Experience Asia 2022"},
    {"publicId":"act/gallery/2022/20220924-ExperienceAsia (23 of 37)","alt":"Experience Asia 2022","year":2022,"event":"Experience Asia 2022"},
    {"publicId":"act/gallery/2022/20220924-ExperienceAsia (24 of 37)","alt":"Experience Asia 2022","year":2022,"event":"Experience Asia 2022"},
    {"publicId":"act/gallery/2022/20220924-ExperienceAsia (25 of 37)","alt":"Experience Asia 2022","year":2022,"event":"Experience Asia 2022"},
    {"publicId":"act/gallery/2022/20220924-ExperienceAsia (26 of 37)","alt":"Experience Asia 2022","year":2022,"event":"Experience Asia 2022"},
    {"publicId":"act/gallery/2022/20220924-ExperienceAsia (27 of 37)","alt":"Experience Asia 2022","year":2022,"event":"Experience Asia 2022"},
    {"publicId":"act/gallery/2022/20220924-ExperienceAsia (28 of 37)","alt":"Experience Asia 2022","year":2022,"event":"Experience Asia 2022"},
    {"publicId":"act/gallery/2022/20220924-ExperienceAsia (29 of 37)","alt":"Experience Asia 2022","year":2022,"event":"Experience Asia 2022"},
    {"publicId":"act/gallery/2022/20220924-ExperienceAsia (3 of 37)","alt":"Experience Asia 2022","year":2022,"event":"Experience Asia 2022"},
    {"publicId":"act/gallery/2022/20220924-ExperienceAsia (30 of 37)","alt":"Experience Asia 2022","year":2022,"event":"Experience Asia 2022"},
    {"publicId":"act/gallery/2022/20220924-ExperienceAsia (31 of 37)","alt":"Experience Asia 2022","year":2022,"event":"Experience Asia 2022"},
    {"publicId":"act/gallery/2022/20220924-ExperienceAsia (32 of 37)","alt":"Experience Asia 2022","year":2022,"event":"Experience Asia 2022"},
    {"publicId":"act/gallery/2022/20220924-ExperienceAsia (33 of 37)","alt":"Experience Asia 2022","year":2022,"event":"Experience Asia 2022"},
    {"publicId":"act/gallery/2022/20220924-ExperienceAsia (34 of 37)","alt":"Experience Asia 2022","year":2022,"event":"Experience Asia 2022"},
    {"publicId":"act/gallery/2022/20220924-ExperienceAsia (35 of 37)","alt":"Experience Asia 2022","year":2022,"event":"Experience Asia 2022"},
    {"publicId":"act/gallery/2022/20220924-ExperienceAsia (4 of 37)","alt":"Experience Asia 2022","year":2022,"event":"Experience Asia 2022"},
    {"publicId":"act/gallery/2022/20220924-ExperienceAsia (5 of 37)","alt":"Experience Asia 2022","year":2022,"event":"Experience Asia 2022"},
    {"publicId":"act/gallery/2022/20220924-ExperienceAsia (6 of 37)","alt":"Experience Asia 2022","year":2022,"event":"Experience Asia 2022"},
    {"publicId":"act/gallery/2022/20220924-ExperienceAsia (7 of 37)","alt":"Experience Asia 2022","year":2022,"event":"Experience Asia 2022"},
    {"publicId":"act/gallery/2022/20220924-ExperienceAsia (8 of 37)","alt":"Experience Asia 2022","year":2022,"event":"Experience Asia 2022"},
    {"publicId":"act/gallery/2022/20220924-ExperienceAsia (9 of 37)","alt":"Experience Asia 2022","year":2022,"event":"Experience Asia 2022"},
    {"publicId":"act/gallery/2022/20220924-ExperienceAsiaExtra (1 of 1)","alt":"Experience Asia 2022","year":2022,"event":"Experience Asia 2022"}
  ];

export default function GalleryClient() {
  const [activeYear, setActiveYear] = useState<number | "all">("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const years = [...new Set(photos.map((p) => p.year))].sort((a, b) => b - a);
  const filtered = activeYear === "all" ? photos : photos.filter((p) => p.year === activeYear);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i! + 1) % filtered.length);
      if (e.key === "ArrowLeft") setLightbox((i) => (i! - 1 + filtered.length) % filtered.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, filtered.length]);

  if (photos.length === 0) {
    return <p className="text-base text-gray-400">Photos coming soon.</p>;
  }

  return (
    <>
      {/* Year filters */}
      {years.length > 1 && (
        <div className="mb-8 flex flex-wrap gap-2 px-6">
          <button
            onClick={() => setActiveYear("all")}
            className={`px-4 py-1.5 text-sm font-medium transition-colors ${
              activeYear === "all" ? "bg-black text-white" : "border border-gray-300 text-black hover:border-black"
            }`}
          >
            All
          </button>
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`px-4 py-1.5 text-sm font-medium transition-colors ${
                activeYear === year ? "bg-black text-white" : "border border-gray-300 text-black hover:border-black"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      )}

      {/* Grid — plain img tags, natural aspect ratios, Cloudinary handles optimization */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <div className="grid grid-cols-3 gap-2 md:gap-3">
        {filtered.map((photo, i) => (
          <button
            key={photo.publicId}
            onClick={() => setLightbox(i)}
            className="group aspect-[4/3] overflow-hidden"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imgUrl(photo.publicId, 1200)}
              alt={photo.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute right-4 top-4 text-white/70 hover:text-white"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
            onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i! - 1 + filtered.length) % filtered.length); }}
            aria-label="Previous"
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="mx-16 max-h-[85vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imgUrl(filtered[lightbox].publicId, 1800)}
              alt={filtered[lightbox].alt}
              className="max-h-[85vh] w-full object-contain"
            />
            <p className="mt-2 text-center text-sm text-white/60">
              {filtered[lightbox].event} · {filtered[lightbox].year}
            </p>
          </div>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
            onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i! + 1) % filtered.length); }}
            aria-label="Next"
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
