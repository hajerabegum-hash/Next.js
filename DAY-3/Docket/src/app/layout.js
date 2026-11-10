import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Docket | Plan with purpose",
  description: "A calmer way to organize your day.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-[#f7f1ea] text-[#2d2a2a]">
        <header className="sticky top-0 z-10 border-b border-[#eadcca] bg-[#fffaf5]/90 shadow-[0_12px_30px_rgba(166,91,73,0.08)] backdrop-blur-md">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
            <Link className="flex items-center gap-3" href="/">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#c77d63] to-[#a65b49] text-lg font-bold text-white shadow-[0_10px_20px_rgba(166,91,73,0.28)]">
                D
              </span>
              <span className="text-xl font-bold tracking-tight text-[#2d2a2a]">
                Docket
              </span>
            </Link>

            <div className="hidden items-center gap-1 md:flex">
              <NavLink href="/restaurants">Restaurants</NavLink>
              <NavLink href="/anatolia">Anatolia</NavLink>
              <NavLink href="/california">California</NavLink>
              <NavLink href="/luxemburg">Luxemburg</NavLink>
            </div>

            <div className="flex items-center gap-2">
              <Link
                className="hidden rounded-full border border-[#ddd0c7] bg-[#fffaf5] px-4 py-2 text-sm font-semibold text-[#5d4c49] shadow-sm transition hover:bg-[#f4e7df] hover:text-[#a65b49] sm:inline-block"
                href="/signin"
              >
                Sign in
              </Link>
              <Link
                className="rounded-full border border-[#d9b8a9] bg-[#c77d63] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(199,125,99,0.32)] transition hover:bg-[#b96f57] focus:outline-none focus:ring-2 focus:ring-[#c77d63]/40 focus:ring-offset-2"
                href="/signup"
              >
                Get started
              </Link>
            </div>
          </nav>
          <div className="flex gap-1 overflow-x-auto border-t border-[#f0e2d6] px-4 py-2 md:hidden">
            <NavLink href="/restaurants">Restaurants</NavLink>
            <NavLink href="/anatolia">Anatolia</NavLink>
            <NavLink href="/california">California</NavLink>
            <NavLink href="/luxemburg">Luxemburg</NavLink>
            <NavLink href="/signin">Sign in</NavLink>
          </div>
        </header>

        <div className="flex-1">{children}</div>

        <footer className="bg-[#2d2a2a] text-[#f5eee7]">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
            <div>
              <Link className="flex items-center gap-3 text-white" href="/">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#c77d63] font-bold text-white">
                  D
                </span>
                <span className="text-lg font-bold">Docket</span>
              </Link>
              <p className="mt-4 max-w-xs text-sm leading-6 text-[#d7c8bc]">
                Plan with purpose. Keep your tasks clear, focused, and moving
                forward.
              </p>
            </div>
            <div>
              <h2 className="font-semibold text-white">Explore</h2>
              <div className="mt-4 space-y-3 text-sm">
                <FooterLink href="/restaurants">Restaurants</FooterLink>
                <FooterLink href="/anatolia">Anatolia</FooterLink>
                <FooterLink href="/california">California</FooterLink>
                <FooterLink href="/luxemburg">Luxemburg</FooterLink>
              </div>
            </div>
            <div>
              <h2 className="font-semibold text-white">Account</h2>
              <div className="mt-4 space-y-3 text-sm">
                <FooterLink href="/signin">Sign in</FooterLink>
                <FooterLink href="/signup">Create an account</FooterLink>
              </div>
            </div>
          </div>
          <div className="border-t border-[#4f4847]">
            <div className="mx-auto max-w-7xl px-4 py-5 text-xs text-[#d7c8bc] lg:px-8">
              © 2026 Docket. Make room for what matters.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

function NavLink({ href, children }) {
  return (
    <Link
      className="whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-[#5d4c49] transition hover:bg-[#f5e7dd] hover:text-[#a65b49]"
      href={href}
    >
      {children}
    </Link>
  );
}

function FooterLink({ href, children }) {
  return (
    <Link
      className="block text-[#d7c8bc] transition hover:text-white"
      href={href}
    >
      {children}
    </Link>
  );
}
