const image =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80";

const facts = [
  { label: "Location", value: "West Coast, USA" },
  { label: "Known for", value: "Beaches & tech" },
  { label: "Best time", value: "Spring & fall" },
];

export default function CaliforniaPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[32px] border border-[#eadcca] bg-[#fffaf5] shadow-[0_18px_45px_rgba(109,72,61,0.12)]">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3">
            <img
              src={image}
              alt="California coast"
              className="h-[260px] w-full object-cover sm:h-[340px] md:h-full"
            />
          </div>

          <aside className="flex w-full flex-col justify-between gap-4 bg-[#f8efe8] p-5 sm:p-6 md:w-1/3 md:p-7">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#a65b49]">
                California
              </p>
              <h1 className="text-3xl font-bold text-[#2d2a2a] sm:text-4xl">
                California
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
            California is a state located on the west coast of the United
            States. It is the most populous state in the country and is known
            for its diverse geography, which includes beaches, mountains, and
            deserts. California is also home to many major cities, including Los
            Angeles, San Francisco, and San Diego. The state has a strong
            economy, with industries such as technology, entertainment, and
            agriculture playing a significant role. California is also known for
            its cultural diversity and progressive policies.
          </p>
        </div>
      </div>
    </main>
  );
}
