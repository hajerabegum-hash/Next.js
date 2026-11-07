const backgroundImage =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80";

export default function RestaurantPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f7f1ea] px-4 py-12 sm:px-6 lg:px-8">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 blur-[2px]"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-[#f7f1ea]/60" />

      <section className="relative z-10 w-full max-w-5xl overflow-hidden rounded-[32px] border border-[#eadcca] bg-[#fffaf5]/80 backdrop-blur-sm shadow-[0_24px_60px_rgba(109,72,61,0.14)]">
        <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="bg-gradient-to-br from-[#f8efe8] via-[#fffaf5] to-[#f5e7dd] p-8 sm:p-10 lg:p-12">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#a65b49]">
              Dining experience
            </p>
            <h1 className="max-w-xl text-4xl font-black tracking-tight text-[#2d2a2a] sm:text-5xl lg:text-6xl">
              Fresh flavors. Warm evenings.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-[#5d4c49]">
              Discover beautifully plated meals, handcrafted cocktails, and a
              relaxing atmosphere designed for slow dinners and memorable
              conversations.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/restaurants"
                className="inline-flex items-center rounded-full border border-[#d7b29a] bg-[#c77d63] px-6 py-3 text-base font-semibold text-white shadow-[0_12px_28px_rgba(199,125,99,0.32)] transition hover:bg-[#b96f57]"
              >
                Explore menu
              </a>
              <a
                href="/"
                className="inline-flex items-center rounded-full border border-[#d7b29a] bg-[#fffaf5] px-6 py-3 text-base font-semibold text-[#2d2a2a] transition hover:border-[#c77d63] hover:text-[#a65b49]"
              >
                Back home
              </a>
            </div>
          </div>

          <aside className="flex flex-col justify-center bg-[#f3e2d9] p-8 sm:p-10 lg:p-12">
            <div className="rounded-[28px] bg-[#fffaf5] p-6 shadow-[0_18px_45px_rgba(109,72,61,0.08)]">
              <div className="mb-6 flex items-center justify-between">
                <span className="rounded-full bg-[#f7d9c7] px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#7a4b3d]">
                  Today’s picks
                </span>
                <span className="text-sm font-medium text-[#6f625f]">
                  Chef special
                </span>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-[#eadcca] bg-[#fffaf5] p-4">
                  <div className="font-semibold text-[#2d2a2a]">
                    Grilled salmon
                  </div>
                  <div className="mt-1 text-sm text-[#6f625f]">
                    Citrus glaze · herb rice
                  </div>
                </div>
                <div className="rounded-2xl border border-[#eadcca] bg-[#fffaf5] p-4">
                  <div className="font-semibold text-[#2d2a2a]">
                    Wild mushroom pasta
                  </div>
                  <div className="mt-1 text-sm text-[#6f625f]">
                    Creamy garlic sauce
                  </div>
                </div>
                <div className="rounded-2xl border border-[#eadcca] bg-[#fffaf5] p-4">
                  <div className="font-semibold text-[#2d2a2a]">
                    Citrus tart
                  </div>
                  <div className="mt-1 text-sm text-[#6f625f]">
                    Vanilla bean cream
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
