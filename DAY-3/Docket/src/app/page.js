export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-5xl overflow-hidden rounded-[32px] border border-[#eadcca] bg-[#fffaf5] shadow-[0_24px_60px_rgba(109,72,61,0.12)]">
        <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="bg-gradient-to-br from-[#f8efe8] via-[#fffaf5] to-[#f5e7dd] p-8 sm:p-10 lg:p-12">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#a65b49]">
              Plan with purpose
            </p>
            <h1 className="max-w-xl text-4xl font-black tracking-tight text-[#2d2a2a] sm:text-5xl lg:text-6xl">
              Make your day feel lighter.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-[#5d4c49]">
              Organize tasks, discover thoughtful places, and stay grounded with a calmer workflow built around clarity and rhythm.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryButton href="/auth/signup">Get started</PrimaryButton>
              <SecondaryButton href="/auth/signin">Sign in</SecondaryButton>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <Stat label="Tasks" value="120+" />
              <Stat label="Focus" value="92%" />
              <Stat label="Saved" value="8 hrs" />
            </div>
          </section>

          <aside className="bg-[#f3e2d9] p-8 sm:p-10 lg:p-12">
            <div className="rounded-[28px] bg-[#fffaf5] p-6 shadow-[0_18px_45px_rgba(109,72,61,0.08)]">
              <div className="mb-6 flex items-center justify-between">
                <span className="rounded-full bg-[#f7d9c7] px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#7a4b3d]">
                  Today
                </span>
                <span className="text-sm font-medium text-[#6f625f]">4 tasks</span>
              </div>

              <div className="space-y-4">
                <TaskItem title="Design review" time="09:00" complete />
                <TaskItem title="Client call" time="11:30" />
                <TaskItem title="Lunch break" time="13:00" />
                <TaskItem title="Deep work" time="15:00" complete />
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
      className="inline-flex items-center rounded-full border border-[#d5b09d] bg-[#c77d63] px-6 py-3 text-base font-semibold text-white shadow-[0_12px_28px_rgba(199,125,99,0.32)] transition hover:bg-[#b96f57]"
    >
      {children}
    </a>
  );
}

function SecondaryButton({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center rounded-full border border-[#d7b8a6] bg-[#fffaf5] px-6 py-3 text-base font-semibold text-[#2d2a2a] shadow-sm transition hover:border-[#c77d63] hover:text-[#a65b49]"
    >
      {children}
    </a>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl border border-[#eadcca] bg-white/60 p-4 shadow-sm">
      <div className="text-2xl font-black text-[#2d2a2a]">{value}</div>
      <div className="mt-1 text-sm text-[#5d4c49]">{label}</div>
    </div>
  );
}

function TaskItem({ title, time, complete = false }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-[#eadcca] bg-[#fffaf5] p-3">
      <div className="flex items-center gap-3">
        <span
          className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
            complete ? "border-[#a65b49] bg-[#a65b49] text-white" : "border-[#d9b4a3] bg-white"
          }`}
        >
          {complete ? "✓" : ""}
        </span>
        <div>
          <div className="font-semibold text-[#2d2a2a]">{title}</div>
          <div className="text-xs text-[#6f625f]">{time}</div>
        </div>
      </div>
      <span className="text-xs font-medium text-[#a65b49]">{complete ? "Done" : "Open"}</span>
    </div>
  );
}
