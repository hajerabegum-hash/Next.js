"use client";

import { useState } from "react";

export default function SignInPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/v1/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to sign in");
      }

      setStatus({
        type: "success",
        message: data.message || "Signed in successfully.",
      });
      setForm({ email: "", password: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Unable to sign in.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7f1ea] px-4 py-10">
      <div className="w-full max-w-md rounded-[30px] border border-[#eadcca] bg-[#fffaf5] p-8 shadow-[0_22px_55px_rgba(109,72,61,0.12)]">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#a65b49]">
            Welcome back
          </p>
          <h1 className="mt-3 text-3xl font-bold text-[#2d2a2a]">Sign in</h1>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label
              className="mb-2 block text-sm font-medium text-[#4f403f]"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  email: event.target.value,
                }))
              }
              className="w-full rounded-2xl border border-[#e3cfbe] bg-[#f8f3ee] px-3 py-2.5 text-[#2d2a2a] outline-none transition focus:border-[#c77d63] focus:ring-4 focus:ring-[#f0d2c6]"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              className="mb-2 block text-sm font-medium text-[#4f403f]"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={form.password}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  password: event.target.value,
                }))
              }
              className="w-full rounded-2xl border border-[#e3cfbe] bg-[#f8f3ee] px-3 py-2.5 text-[#2d2a2a] outline-none transition focus:border-[#c77d63] focus:ring-4 focus:ring-[#f0d2c6]"
              placeholder="••••••••"
            />
          </div>

          {status.message ? (
            <p
              className={`rounded-2xl px-3 py-2 text-sm ${
                status.type === "success"
                  ? "bg-[#e8f4ee] text-[#2f6d57]"
                  : "bg-[#fbe7e8] text-[#8e4d52]"
              }`}
              aria-live="polite"
            >
              {status.message}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-full border border-[#d7b29a] bg-[#c77d63] px-4 py-3 font-semibold text-white shadow-[0_12px_28px_rgba(199,125,99,0.32)] transition hover:bg-[#b96f57] hover:text-white disabled:cursor-not-allowed disabled:bg-[#d6a696]"
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </main>
  );
}
