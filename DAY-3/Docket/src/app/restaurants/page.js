const restaurantData = [
  {
    title: "Cinder & Clay",
    description:
      "A warm neighborhood bistro with seasonal plates, handcrafted desserts, and a mellow evening mood.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Harbor Table",
    description:
      "Coastal-inspired fine dining with fresh seafood, bright citrus notes, and scenic views.",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Saffron Courtyard",
    description:
      "A vibrant fusion kitchen blending spice, herbs, and slow-cooked comfort classics.",
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=80",
  },
];

export default function RestaurantsPage() {
  return (
    <main className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(199,125,99,0.18),_transparent_40%),linear-gradient(180deg,#f8efe8_0%,#f7f1ea_35%,#f4e7df_100%)] px-4 py-16 sm:px-6 lg:px-8">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-10 top-8 h-40 w-40 rounded-full bg-[#e8bca9]/40 blur-3xl" />
        <div className="absolute right-14 top-32 h-52 w-52 rounded-full bg-[#d7a497]/30 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-44 w-44 rounded-full bg-[#f0d8c7]/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#a65b49]">
            Curated picks
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-[#2d2a2a] sm:text-5xl">
            Dining around the world
          </h1>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {restaurantData.map((restaurant) => (
            <Card
              key={restaurant.title}
              title={restaurant.title}
              description={restaurant.description}
              image={restaurant.image}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

function Card({ title, description, image }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-[#eadcca] bg-[#fffaf5] shadow-[0_18px_45px_rgba(109,72,61,0.1)] transition hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(109,72,61,0.16)]">
      <div className="h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold text-[#2d2a2a]">{title}</h2>
        <p className="leading-7 text-[#5d4c49]">{description}</p>
      </div>
    </article>
  );
}
