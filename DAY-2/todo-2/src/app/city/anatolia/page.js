const image =
  "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1200&q=80";

const facts = [
  { label: "Region", value: "Western Asia" },
  { label: "Known for", value: "Ancient history" },
  { label: "Best time", value: "Spring & autumn" },
];

export default function AnatoliaPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[32px] border border-[#eadcca] bg-[#fffaf5] shadow-[0_18px_45px_rgba(109,72,61,0.12)]">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3">
            <img
              src={image}
              alt="Anatolia landscape"
              className="h-[260px] w-full object-cover sm:h-[340px] md:h-full"
            />
          </div>

          <aside className="flex w-full flex-col justify-between gap-4 bg-[#f8efe8] p-5 sm:p-6 md:w-1/3 md:p-7">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#a65b49]">
                Anatolia
              </p>
              <h1 className="text-3xl font-bold text-[#2d2a2a] sm:text-4xl">
                Anatolia
              </h1>
            </div>

            <div className="space-y-3">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-2xl border border-[#eadcca] bg-white/70 p-3"
                >
                  <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8a6259]">
                    {fact.label}
                  </div>
                  <div className="mt-1 text-sm font-medium text-[#2d2a2a]">
                    {fact.value}
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <div className="p-6 sm:p-8 lg:p-12">
          <p className="text-lg leading-8 text-[#4f403f]">
            Anatolia, also known as Asia Minor, is a large peninsula in Western
            Asia that makes up the majority of modern-day Turkey. It is bounded
            by the Black Sea to the north, the Aegean Sea to the west, and the
            Mediterranean Sea to the south. Anatolia has a rich history that
            dates back to ancient times and has been home to numerous
            civilizations, including the Hittites, Phrygians, Lydians, Greeks,
            Persians, Romans, Byzantines, and Ottomans. The region is known for
            its diverse landscapes, including mountains, plateaus, and fertile
            plains. Today, Anatolia is an important cultural and economic region
            of Turkey, with major cities such as Ankara and Istanbul located
            within its boundaries.
          </p>
        </div>
      </div>
    </main>
  );
}
