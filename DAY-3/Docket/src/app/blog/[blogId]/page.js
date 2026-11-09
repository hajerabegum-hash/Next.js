import Link from "next/link";

export default async function BlogPage({ params }) {
  const { blogId } = await params;

  let data = null;

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${blogId}`,
      { cache: "no-store" },
    );

    if (!response.ok) {
      throw new Error("Blog post not found");
    }

    data = await response.json();
  } catch (error) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f7f1ea] px-4 py-8">
        <div className="w-full max-w-xl rounded-[28px] border border-[#e7d7ce] bg-white/80 p-8 text-center shadow-[0_18px_45px_rgba(109,72,61,0.12)] backdrop-blur-sm">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#a65b49]">
            Blog update
          </p>
          <h1 className="mt-4 text-3xl font-bold text-[#2d2a2a]">
            Post unavailable
          </h1>
          <p className="mt-3 text-base leading-7 text-[#6f625f]">
            The article you requested could not be loaded right now.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex items-center rounded-full bg-[#2d2a2a] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#a65b49]"
          >
            Go back home{" "}
          </Link>
        </div>
      </main>
    );
  }

  const paragraphs = (data.body || "")
    .split(/(?<=[.!?])\s+/)
    .filter(Boolean)
    .slice(0, 3);

  const readTime = Math.max(
    3,
    Math.ceil((data.body || "").split(/\s+/).length / 180),
  );
  const category = ["Design", "Development", "Lifestyle", "Travel", "Product"][
    Number(blogId) % 5
  ];
  const publishedDate = new Date(
    2024,
    Number(blogId) % 12,
    (Number(blogId) % 28) + 1,
  ).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <main className="min-h-screen bg-[#f7f1ea] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-center justify-between gap-3">
          <span className="inline-flex items-center rounded-full border border-[#e7d7ce] bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#a65b49]">
            Blog / Article
          </span>
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-[#2d2a2a] transition hover:text-[#a65b49]"
          >
            ← Back to home
          </Link>
        </div>

        <article className="overflow-hidden rounded-[32px] border border-[#e7d7ce] bg-white/80 shadow-[0_18px_45px_rgba(109,72,61,0.12)] backdrop-blur-sm">
          <header className="bg-gradient-to-r from-[#f8eee7] via-[#fffaf5] to-[#f1e0d8] p-6 sm:p-8 lg:p-12">
            <div className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-[#6f625f]">
              <span className="rounded-full bg-[#2d2a2a] px-2.5 py-1 text-white">
                Featured
              </span>
              <span>{category}</span>
              <span>•</span>
              <span>Post #{blogId}</span>
            </div>

            <h1 className="mt-6 max-w-3xl text-3xl font-bold leading-tight text-[#2d2a2a] sm:text-4xl lg:text-5xl">
              {data.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-[#6f625f]">
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2d2a2a] text-sm font-bold text-white">
                  A
                </span>
                <span>Alex Morgan</span>
              </div>
              <span>{publishedDate}</span>
              <span>{readTime} min read</span>
            </div>
          </header>

          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.6fr_0.8fr] lg:p-12">
            <div className="space-y-6">
              <div className="rounded-2xl border border-[#f0e1d9] bg-[#fffaf5] p-5 text-base leading-8 text-[#4c4341]">
                <p>{paragraphs[0] || data.body}</p>
              </div>

              <div className="space-y-6 text-base leading-8 text-[#2d2a2a]">
                {paragraphs.map((paragraph, index) => (
                  <p key={`${paragraph.slice(0, 15)}-${index}`}>{paragraph}</p>
                ))}

                {paragraphs.length === 0 && <p>{data.body}</p>}
              </div>
            </div>

            <aside className="space-y-5">
              <div className="rounded-2xl border border-[#e7d7ce] bg-[#fffaf5] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a65b49]">
                  Reading time
                </p>
                <p className="mt-3 text-3xl font-bold text-[#2d2a2a]">
                  {readTime} min
                </p>
              </div>

              <div className="rounded-2xl border border-[#e7d7ce] bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a65b49]">
                  Topics
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[category, "Insights", "Growth", "Strategy"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#e7d7ce] bg-[#f7f1ea] px-3 py-1.5 text-sm text-[#2d2a2a]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-[#2d2a2a] p-5 text-white shadow-[0_18px_45px_rgba(45,42,42,0.18)]">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f5c9b8]">
                  Newsletter
                </p>
                <h2 className="mt-3 text-xl font-bold">
                  Fresh ideas every week
                </h2>
                <p className="mt-2 text-sm leading-6 text-[#f3efe9]">
                  Stay inspired with thoughtful stories, product notes, and
                  practical advice.
                </p>
                <button className="mt-5 inline-flex items-center rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-[#2d2a2a] transition hover:bg-[#f4d5c8]">
                  Join now
                </button>
              </div>
            </aside>
          </div>
        </article>
      </div>
    </main>
  );
}
