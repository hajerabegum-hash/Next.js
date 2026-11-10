const taskItems = [
  { title: "Design review", time: "09:00", complete: true },
  { title: "Client call", time: "11:30", complete: false },
  { title: "Lunch break", time: "13:00", complete: false },
  { title: "Deep work", time: "15:00", complete: true },
];

const stats = [
  { label: "Tasks", value: "120+" },
  { label: "Focus", value: "92%" },
  { label: "Saved", value: "8 hrs" },
];

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
      <div className="absolute left-10 top-16 h-56 w-56 rounded-full bg-[#f3d7c9]/70 blur-3xl" />
      <div className="absolute bottom-12 right-12 h-72 w-72 rounded-full bg-[#e5b7a0]/40 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.8),_transparent_35%)]" />

      <div className="relative w-full max-w-6xl overflow-hidden rounded-[36px] border border-[#eadcca] bg-[#fffaf5]/80 shadow-[0_35px_90px_rgba(109,72,61,0.14)] backdrop-blur-sm">
        <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
          <section className="relative overflow-hidden bg-gradient-to-br from-[#f8efe8] via-[#fffaf5] to-[#f5e7dd] p-8 sm:p-10 lg:p-12">
            <div className="absolute -right-16 top-8 h-40 w-40 rounded-full bg-[#f0cfbf]/60 blur-3xl" />
            <div className="absolute bottom-0 left-1/3 h-36 w-36 rounded-full bg-[#e9b8a6]/30 blur-3xl" />

            <div className="relative">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#a65b49]">
                Plan with purpose
              </p>

              <h1 className="max-w-xl text-4xl font-black tracking-[-0.06em] text-[#2d2a2a] sm:text-5xl lg:text-6xl">
                Make your day feel lighter.
              </h1>

              <p className="mt-6 max-w-lg text-lg leading-8 text-[#5d4c49]">
                Organize tasks, discover thoughtful places, and stay grounded
                with a calmer workflow built around clarity, rhythm, and
                momentum.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryButton href="/signup">Get started</PrimaryButton>
                <SecondaryButton href="/signin">Sign in</SecondaryButton>
              </div>

              <div className="mt-10 flex flex-wrap gap-3 text-sm text-[#5d4c49]">
                <span className="rounded-full border border-[#e8d7ca] bg-white/60 px-3 py-2 font-medium">
                  Calm planning
                </span>
                <span className="rounded-full border border-[#e8d7ca] bg-white/60 px-3 py-2 font-medium">
                  Smart routines
                </span>
                <span className="rounded-full border border-[#e8d7ca] bg-white/60 px-3 py-2 font-medium">
                  Inspired living
                </span>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <Stat
                    key={stat.label}
                    label={stat.label}
                    value={stat.value}
                  />
                ))}
              </div>
            </div>
          </section>

          <aside className="bg-[#f3e2d9] p-6 sm:p-8 lg:p-10">
            <div className="rounded-[30px] border border-[#f3d8c9] bg-[#fffaf5] p-5 shadow-[0_18px_45px_rgba(109,72,61,0.08)] ring-1 ring-white/50">
              <div className="mb-6 flex items-center justify-between">
                <span className="rounded-full bg-[#f7d9c7] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#7a4b3d]">
                  Today
                </span>
                <span className="text-sm font-medium text-[#6f625f]">
                  4 tasks
                </span>
              </div>

              <div className="mb-6 rounded-2xl border border-[#f0dfd4] bg-gradient-to-r from-[#fff7f2] to-[#f7e7de] p-4">
                <div className="flex items-center justify-between text-sm text-[#5d4c49]">
                  <span className="font-medium">Focus score</span>
                  <span className="font-bold text-[#a65b49]">82%</span>
                </div>
                <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-[#f1e3d9]">
                  <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-[#c77d63] to-[#a65b49]" />
                </div>
              </div>

              <div className="space-y-3">
                {taskItems.map(({ title, time, complete }) => (
                  <TaskItem
                    key={title}
                    title={title}
                    time={time}
                    complete={complete}
                  />
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

function PrimaryButton({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center rounded-full border border-[#d5b09d] bg-[#c77d63] px-6 py-3 text-base font-semibold text-white shadow-[0_12px_28px_rgba(199,125,99,0.32)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#b96f57]"
    >
      {children}
    </a>
  );
}

function SecondaryButton({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center rounded-full border border-[#d7b8a6] bg-[#fffaf5] px-6 py-3 text-base font-semibold text-[#2d2a2a] shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-[#c77d63] hover:text-[#a65b49]"
    >
      {children}
    </a>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl border border-[#eadcca] bg-white/60 p-4 shadow-[0_12px_25px_rgba(109,72,61,0.04)] backdrop-blur-sm">
      <div className="text-2xl font-black tracking-tight text-[#2d2a2a]">
        {value}
      </div>
      <div className="mt-1 text-sm text-[#5d4c49]">{label}</div>
    </div>
  );
}

function TaskItem({ title, time, complete = false }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-[#eadcca] bg-[#fffaf5] p-3 transition hover:border-[#d8b19f] hover:shadow-sm">
      <div className="flex items-center gap-3">
        <span
          className={`flex h-5 w-5 items-center justify-center rounded-full border-2 text-[10px] font-bold ${
            complete
              ? "border-[#a65b49] bg-[#a65b49] text-white"
              : "border-[#d9b4a3] bg-white text-[#d9b4a3]"
          }`}
        >
          {complete ? "✓" : ""}
        </span>
        <div>
          <div className="font-semibold text-[#2d2a2a]">{title}</div>
          <div className="text-xs text-[#6f625f]">{time}</div>
        </div>
      </div>
      <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#a65b49]">
        {complete ? "Done" : "Open"}
      </span>
    </div>
  );
}
