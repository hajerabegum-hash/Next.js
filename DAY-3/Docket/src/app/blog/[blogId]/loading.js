export default function LoadingPage() {
  return (
    <main className="min-h-screen bg-[#f7f1ea] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl animate-pulse">
        <div className="mb-6 flex items-center justify-between gap-3">
          <div className="h-7 w-32 rounded-full bg-[#eaded8]" />
          <div className="h-5 w-28 rounded-full bg-[#eaded8]" />
        </div>

        <article className="overflow-hidden rounded-[32px] border border-[#e7d7ce] bg-white/80 shadow-[0_18px_45px_rgba(109,72,61,0.12)] backdrop-blur-sm">
          <header className="bg-gradient-to-r from-[#f8eee7] via-[#fffaf5] to-[#f1e0d8] p-6 sm:p-8 lg:p-12">
            <div className="flex flex-wrap items-center gap-3">
              <div className="h-6 w-20 rounded-full bg-[#eaded8]" />
              <div className="h-6 w-20 rounded-full bg-[#eaded8]" />
              <div className="h-6 w-6 rounded-full bg-[#eaded8]" />
              <div className="h-6 w-24 rounded-full bg-[#eaded8]" />
            </div>

            <div className="mt-6 h-10 w-3/4 rounded-xl bg-[#eaded8]" />
            <div className="mt-6 flex flex-wrap items-center gap-5">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-[#eaded8]" />
                <div className="h-4 w-24 rounded bg-[#eaded8]" />
              </div>
              <div className="h-4 w-24 rounded bg-[#eaded8]" />
              <div className="h-4 w-20 rounded bg-[#eaded8]" />
            </div>
          </header>

          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.6fr_0.8fr] lg:p-12">
            <div className="space-y-6">
              <div className="rounded-2xl border border-[#f0e1d9] bg-[#fffaf5] p-5">
                <div className="h-5 w-full rounded bg-[#eaded8]" />
                <div className="mt-3 h-5 w-11/12 rounded bg-[#eaded8]" />
              </div>

              <div className="space-y-4">
                <div className="h-5 w-full rounded bg-[#eaded8]" />
                <div className="h-5 w-full rounded bg-[#eaded8]" />
                <div className="h-5 w-5/6 rounded bg-[#eaded8]" />
                <div className="h-5 w-full rounded bg-[#eaded8]" />
                <div className="h-5 w-4/5 rounded bg-[#eaded8]" />
              </div>
            </div>

            <aside className="space-y-5">
              <div className="rounded-2xl border border-[#e7d7ce] bg-[#fffaf5] p-5">
                <div className="h-4 w-28 rounded bg-[#eaded8]" />
                <div className="mt-4 h-9 w-20 rounded bg-[#eaded8]" />
              </div>

              <div className="rounded-2xl border border-[#e7d7ce] bg-white p-5">
                <div className="h-4 w-24 rounded bg-[#eaded8]" />
                <div className="mt-4 flex flex-wrap gap-2">
                  <div className="h-8 w-20 rounded-full bg-[#eaded8]" />
                  <div className="h-8 w-24 rounded-full bg-[#eaded8]" />
                  <div className="h-8 w-20 rounded-full bg-[#eaded8]" />
                </div>
              </div>

              <div className="rounded-2xl bg-[#2d2a2a] p-5">
                <div className="h-4 w-28 rounded bg-[#6f625f]" />
                <div className="mt-3 h-6 w-40 rounded bg-[#6f625f]" />
                <div className="mt-3 h-4 w-full rounded bg-[#6f625f]" />
                <div className="mt-2 h-4 w-5/6 rounded bg-[#6f625f]" />
                <div className="mt-5 h-10 w-24 rounded-full bg-[#f4d5c8]" />
              </div>
            </aside>
          </div>
        </article>
      </div>
    </main>
  );
}
