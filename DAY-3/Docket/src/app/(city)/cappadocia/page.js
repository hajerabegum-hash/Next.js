const image =
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80";

const facts = [
  { label: "Location", value: "Central Turkey" },
  { label: "Known for", value: "Fairy chimneys" },
  { label: "Best time", value: "Spring & autumn" },
];

export default function Cappadocia() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[32px] border border-[#eadcca] bg-[#fffaf5] shadow-[0_18px_45px_rgba(109,72,61,0.12)]">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3">
            <img
              src={image}
              alt="Cappadocia landscape"
              className="h-[260px] w-full object-cover sm:h-[340px] md:h-full"
            />
          </div>

          <aside className="flex w-full flex-col justify-between gap-4 bg-[#f8efe8] p-5 sm:p-6 md:w-1/3 md:p-7">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#a65b49]">
                Cappadocia
              </p>
              <h1 className="text-3xl font-bold text-[#2d2a2a] sm:text-4xl">
                Cappadocia
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
            Cappadocia is a region in central Turkey known for its unique
            landscape and cave dwellings. It is a breathtaking, semi-arid
            historical region located on a high plateau over 1,000 metres in
            altitude in central Anatolia, Turkey. It is world-renowned for its
            surreal, moon-like landscapes dotted with distinctive volcanic rock
            formations called fairy chimneys, as well as its massive
            subterranean networks and bucket-list hot air balloon flights.
          </p>
          <p className="mt-6 text-lg leading-8 text-[#4f403f]">
            The region’s dramatic topography was formed roughly 60 million years
            ago when massive volcanic eruptions carpeted the landscape in soft
            volcanic ash and tuff. Over millions of years, wind, rain, and
            erosion sculpted the softer rock layers away, leaving behind the
            hard basalt caps that form the signature cone-like hoodoos seen
            across the valleys today.
          </p>
          <p className="mt-6 text-lg leading-8 text-[#4f403f]">
            Human history in Cappadocia is carved directly into its geology,
            from early trade routes and underground cities to Byzantine churches
            and cave hotels. Top experiences include hot air ballooning at
            sunrise, exploring Göreme Open Air Museum, hiking through valleys
            like Love Valley and Rose Valley, and visiting the pottery villages
            of Avanos.
          </p>
        </div>
      </div>
    </main>
  );
}
