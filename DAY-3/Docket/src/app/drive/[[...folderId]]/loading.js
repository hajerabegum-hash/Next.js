export default function LoadingPage() {
  return (
    <main className="min-h-screen bg-[#f7f1ea] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl animate-pulse">
        <div className="mb-6 flex flex-col gap-4 rounded-[28px] border border-[#ead9d0] bg-white/80 p-5 shadow-[0_18px_45px_rgba(109,72,61,0.12)] sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="h-3 w-20 rounded-full bg-[#eaded8]" />
            <div className="mt-3 h-8 w-40 rounded-xl bg-[#eaded8]" />
          </div>

          <div className="flex gap-3">
            <div className="h-10 w-28 rounded-full bg-[#eaded8]" />
            <div className="h-10 w-28 rounded-full bg-[#eaded8]" />
          </div>
        </div>

        <div className="mb-6 grid gap-4 md:grid-cols-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="rounded-2xl bg-[#f1e0d8] p-4">
              <div className="h-4 w-20 rounded bg-[#eaded8]" />
              <div className="mt-4 h-8 w-16 rounded bg-[#eaded8]" />
            </div>
          ))}
        </div>

        <section className="rounded-[30px] border border-[#ead9d0] bg-white/80 p-5 shadow-[0_18px_45px_rgba(109,72,61,0.12)] sm:p-6">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <div className="h-3 w-20 rounded-full bg-[#eaded8]" />
              <div className="mt-3 h-8 w-40 rounded-xl bg-[#eaded8]" />
            </div>
            <div className="h-8 w-28 rounded-full bg-[#eaded8]" />
          </div>

          <div className="mb-6 h-14 rounded-2xl bg-[#fffaf5]" />

          <div className="mb-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#e7d7ce] bg-[#fffaf5] p-4"
              >
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-2xl bg-[#eaded8]" />
                  <div className="h-6 w-16 rounded-full bg-[#eaded8]" />
                </div>
                <div className="mt-4 h-6 w-32 rounded bg-[#eaded8]" />
                <div className="mt-4 flex justify-between">
                  <div className="h-4 w-20 rounded bg-[#eaded8]" />
                  <div className="h-4 w-14 rounded bg-[#eaded8]" />
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <div className="h-6 w-32 rounded bg-[#eaded8]" />
            {[1, 2, 3].map((row) => (
              <div
                key={row}
                className="grid grid-cols-[1.6fr_0.7fr_0.7fr] gap-4"
              >
                <div className="h-12 rounded-xl bg-[#f7f1ea]" />
                <div className="h-12 rounded-xl bg-[#f7f1ea]" />
                <div className="h-12 rounded-xl bg-[#f7f1ea]" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
