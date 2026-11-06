const image =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80";

export default function CaliforniaPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[32px] border border-[#eadcca] bg-[#fffaf5] shadow-[0_18px_45px_rgba(109,72,61,0.12)]">
        <img src={image} alt="California coast" className="h-[420px] w-full object-cover" />
        <div className="p-8 sm:p-10 lg:p-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#a65b49]">
            California
          </p>
          <h1 className="mb-5 text-4xl font-bold text-[#2d2a2a] sm:text-5xl">California</h1>
          <p className="text-lg leading-8 text-[#4f403f]">
            California is a state located on the west coast of the United States. It is the most populous state in the country and is known for its diverse geography, which includes beaches, mountains, and deserts. California is also home to many major cities, including Los Angeles, San Francisco, and San Diego. The state has a strong economy, with industries such as technology, entertainment, and agriculture playing a significant role. California is also known for its cultural diversity and progressive policies.
          </p>
        </div>
      </div>
    </main>
  );
}
