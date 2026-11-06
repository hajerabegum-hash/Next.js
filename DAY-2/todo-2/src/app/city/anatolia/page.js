const image =
  "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1200&q=80";

export default function AnatoliaPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[32px] border border-[#eadcca] bg-[#fffaf5] shadow-[0_18px_45px_rgba(109,72,61,0.12)]">
        <img src={image} alt="Anatolia landscape" className="h-[420px] w-full object-cover" />
        <div className="p-8 sm:p-10 lg:p-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#a65b49]">
            Anatolia
          </p>
          <h1 className="mb-5 text-4xl font-bold text-[#2d2a2a] sm:text-5xl">Anatolia</h1>
          <p className="text-lg leading-8 text-[#4f403f]">
            Anatolia, also known as Asia Minor, is a large peninsula in Western Asia that makes up the majority of modern-day Turkey. It is bounded by the Black Sea to the north, the Aegean Sea to the west, and the Mediterranean Sea to the south. Anatolia has a rich history that dates back to ancient times and has been home to numerous civilizations, including the Hittites, Phrygians, Lydians, Greeks, Persians, Romans, Byzantines, and Ottomans. The region is known for its diverse landscapes, including mountains, plateaus, and fertile plains. Today, Anatolia is an important cultural and economic region of Turkey, with major cities such as Ankara and Istanbul located within its boundaries.
          </p>
        </div>
      </div>
    </main>
  );
}
