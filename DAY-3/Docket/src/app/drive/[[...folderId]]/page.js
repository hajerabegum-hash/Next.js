const driveData = {
  root: {
    name: "My Drive",
    path: "Home",
    summary: "Everything in one place",
    folders: [
      {
        name: "Design Assets",
        type: "folder",
        modified: "2 hours ago",
        size: "48 MB",
        accent: "bg-[#f0d8cb]",
      },
      {
        name: "Marketing",
        type: "folder",
        modified: "Yesterday",
        size: "120 MB",
        accent: "bg-[#dfe9f3]",
      },
      {
        name: "Client Projects",
        type: "folder",
        modified: "3 days ago",
        size: "210 MB",
        accent: "bg-[#dfeadf]",
      },
    ],
    files: [
      {
        name: "project-brief.pdf",
        type: "pdf",
        modified: "Today",
        size: "2.4 MB",
      },
      {
        name: "launch-plan.docx",
        type: "doc",
        modified: "Today",
        size: "1.1 MB",
      },
      {
        name: "team-photo.jpg",
        type: "image",
        modified: "Yesterday",
        size: "3.8 MB",
      },
      {
        name: "brand-guidelines.pptx",
        type: "ppt",
        modified: "2 days ago",
        size: "6.7 MB",
      },
    ],
  },
  design: {
    name: "Design Assets",
    path: "Home / Design Assets",
    summary: "UI mockups and brand resources",
    folders: [
      {
        name: "Landing Pages",
        type: "folder",
        modified: "4 hours ago",
        size: "22 MB",
        accent: "bg-[#f4d7c8]",
      },
      {
        name: "Icons",
        type: "folder",
        modified: "Yesterday",
        size: "18 MB",
        accent: "bg-[#dfeaf7]",
      },
    ],
    files: [
      { name: "logo-final.svg", type: "svg", modified: "Today", size: "420 KB" },
      { name: "color-palette.css", type: "code", modified: "Today", size: "7.2 KB" },
      { name: "homepage-wireframe.fig", type: "fig", modified: "2 days ago", size: "8.4 MB" },
    ],
  },
  marketing: {
    name: "Marketing",
    path: "Home / Marketing",
    summary: "Campaign creative and performance summaries",
    folders: [
      {
        name: "Campaigns",
        type: "folder",
        modified: "5 days ago",
        size: "50 MB",
        accent: "bg-[#dfe9f3]",
      },
    ],
    files: [
      { name: "social-posts.zip", type: "zip", modified: "Today", size: "14.6 MB" },
      { name: "ad-copy.txt", type: "text", modified: "Yesterday", size: "12 KB" },
    ],
  },
};

function getFileIcon(type) {
  const icons = {
    folder: "📁",
    pdf: "📄",
    doc: "📝",
    image: "🖼️",
    ppt: "📊",
    svg: "🎨",
    code: "💻",
    fig: "🧩",
    zip: "🗜️",
    text: "📃",
  };

  return icons[type] || "📄";
}

export default async function DrivePage({ params }) {
  const { folderId } = await params;
  const normalizedFolderId = Array.isArray(folderId) ? folderId : [];
  const currentKey = normalizedFolderId.length ? normalizedFolderId[0] : "root";
  const currentFolder = driveData[currentKey] || driveData.root;

  const summaryCards = [
    { label: "Folders", value: currentFolder.folders.length, tone: "bg-[#f2ddd5]" },
    { label: "Files", value: currentFolder.files.length, tone: "bg-[#e5edf5]" },
    { label: "Storage", value: "640 MB", tone: "bg-[#e8f0e8]" },
    { label: "Shared", value: "12", tone: "bg-[#f4e7d9]" },
  ];

  return (
    <main className="min-h-screen bg-[#f7f1ea] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6 flex flex-col gap-4 rounded-[28px] border border-[#ead9d0] bg-white/80 p-5 shadow-[0_18px_45px_rgba(109,72,61,0.12)] backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#a65b49]">
              Workspace
            </p>
            <h1 className="mt-2 text-3xl font-bold text-[#2d2a2a]">Docket Drive</h1>
          </div>

          <div className="flex items-center gap-3">
            <button className="rounded-full border border-[#e7d7ce] bg-[#fffaf5] px-4 py-2 text-sm font-medium text-[#2d2a2a] transition hover:bg-[#f4e7df]">
              Upload files
            </button>
            <button className="rounded-full bg-[#2d2a2a] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#a65b49]">
              New folder
            </button>
          </div>
        </header>

        <section className="mb-6 grid gap-4 md:grid-cols-4">
          {summaryCards.map((card) => (
            <div key={card.label} className={`rounded-2xl ${card.tone} p-4`}>
              <p className="text-sm text-[#6f625f]">{card.label}</p>
              <p className="mt-3 text-3xl font-bold text-[#2d2a2a]">{card.value}</p>
            </div>
          ))}
        </section>

        <section className="rounded-[30px] border border-[#ead9d0] bg-white/80 p-5 shadow-[0_18px_45px_rgba(109,72,61,0.12)] backdrop-blur-sm sm:p-6">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a65b49]">
                Location
              </p>
              <h2 className="mt-2 text-2xl font-bold text-[#2d2a2a]">{currentFolder.name}</h2>
            </div>

            <div className="rounded-full bg-[#f7f1ea] px-3 py-1.5 text-sm text-[#4d4443]">
              {currentFolder.path}
            </div>
          </div>

          <div className="mb-6 rounded-2xl border border-[#f0e1d9] bg-[#fffaf5] p-4 text-sm text-[#4c4341]">
            {currentFolder.summary}
          </div>

          <div className="mb-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {currentFolder.folders.map((folder) => (
              <div
                key={folder.name}
                className="rounded-2xl border border-[#e7d7ce] bg-[#fffaf5] p-4 transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${folder.accent}`}>
                    <span className="text-2xl">📁</span>
                  </div>
                  <span className="rounded-full bg-white px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#6f625f]">
                    Folder
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-semibold text-[#2d2a2a]">{folder.name}</h3>
                <div className="mt-3 flex items-center justify-between text-sm text-[#6f625f]">
                  <span>{folder.modified}</span>
                  <span>{folder.size}</span>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-[#2d2a2a]">Recent files</h3>
              <button className="text-sm font-medium text-[#a65b49]">View all</button>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#e7d7ce]">
              <div className="grid grid-cols-[1.6fr_0.7fr_0.7fr] gap-4 bg-[#f8efe9] px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#6f625f]">
                <span>Name</span>
                <span>Modified</span>
                <span className="text-right">Size</span>
              </div>

              {currentFolder.files.map((file) => (
                <div
                  key={file.name}
                  className="grid grid-cols-[1.6fr_0.7fr_0.7fr] items-center gap-4 border-t border-[#f0e1d9] bg-white px-4 py-3 text-sm text-[#2d2a2a]"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{getFileIcon(file.type)}</span>
                    <span className="font-medium">{file.name}</span>
                  </div>
                  <span className="text-[#6f625f]">{file.modified}</span>
                  <span className="text-right text-[#6f625f]">{file.size}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
