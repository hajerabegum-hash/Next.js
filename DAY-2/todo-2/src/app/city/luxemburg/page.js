const image =
  "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1200&q=80";

export default function LuxemburgPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[32px] border border-[#eadcca] bg-[#fffaf5] shadow-[0_18px_45px_rgba(109,72,61,0.12)]">
        <img src={image} alt="Luxembourg city" className="h-[420px] w-full object-cover" />
        <div className="p-8 sm:p-10 lg:p-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#a65b49]">
            Luxemburg
          </p>
          <h1 className="mb-5 text-4xl font-bold text-[#2d2a2a] sm:text-5xl">Luxemburg</h1>
          <p className="text-lg leading-8 text-[#4f403f]">
            Luxembourg is a small, landlocked European nation bordered by Belgium, France, and Germany. Despite its compact size, it stands as one of the world's most prosperous and influential countries, consistently ranking among the highest globally for GDP per capita and quality of life. The country operates as a constitutional monarchy headed by a Grand Duke, making it the world's only remaining Grand Duchy. Its capital, Luxembourg City, is a striking blend of past and present. The city's ancient fortifications and historic quarters are designated as a UNESCO World Heritage site, juxtaposed against a cutting-edge financial district. Luxembourg is a foundational champion of European integration. It is a founding member of the European Union, NATO, and the United Nations, and hosts key EU institutions, including the European Court of Justice. The nation is uniquely trilingual, with Luxembourgish, French, and German all holding official status. Its population is remarkably cosmopolitan, with nearly half of its residents being foreign nationals. Driven by a powerful financial services sector, a growing technology hub, and a high standard of living, Luxembourg serves as a vibrant, multicultural crossroads at the very heart of modern Europe.
          </p>
        </div>
      </div>
    </main>
  );
}