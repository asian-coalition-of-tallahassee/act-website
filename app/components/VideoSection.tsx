const VIDEO_ID = "h2ubD8dNSZ4";

export default function VideoSection() {
  return (
    <section className="border-b border-light-gray bg-off-white">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
        <p className="text-nav uppercase tracking-[0.2em] text-charcoal">
          Experience the Festival
        </p>

        <h2 className="mt-8 font-serif text-[clamp(2rem,5vw,3.25rem)] font-normal leading-[1.15] tracking-[-0.01em] text-charcoal">
          Enjoy highlights from past
          <br />
          Experience Asia festivals.
        </h2>

        <div className="mx-auto mt-12 w-full max-w-2xl">
          <div className="relative aspect-video w-full overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_ID}`}
              title="Asian Coalition of Tallahassee"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
