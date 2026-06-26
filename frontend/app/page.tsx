import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="font-sans flex min-h-screen w-full flex-col items-center justify-center bg-white px-5 py-12 text-center sm:px-6 sm:py-16">
      {/* Logo */}
      <Image
        src="/logo.png"
        alt="30-0 logo"
        width={200}
        height={200}
        priority
        className="h-auto w-32 sm:w-44 md:w-48"
      />

      {/* Headline */}
      <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-balance text-neutral-900 sm:mt-10 sm:text-6xl md:text-7xl">
        Can you go <span className="text-[#e11414]">30-0</span>?
      </h1>

      {/* Subtitle */}
      <p className="mt-3 text-lg text-neutral-400 sm:mt-4 sm:text-2xl">
        Create your fighter.
      </p>

      {/* CTA */}
      <Link
        href="/create"
        className="mt-8 inline-flex w-full max-w-xs items-center justify-center gap-3 rounded-xl bg-[#e11414] px-8 py-4 text-xl font-semibold text-white shadow-lg shadow-red-500/30 transition hover:bg-[#c20f0f] hover:shadow-red-500/40 focus:outline-none focus-visible:ring-4 focus-visible:ring-red-300 sm:mt-10 sm:w-auto sm:px-16 sm:text-2xl"
      >
        <span aria-hidden>🥊</span>
        Start
      </Link>

      {/* Footer */}
      <div className="mt-16 flex items-center gap-3 text-xs text-neutral-400 sm:mt-24 sm:gap-4 sm:text-sm">
        <span className="h-px w-8 bg-[#e11414] sm:w-10" />
        <span>
          Powered by <span className="font-medium text-[#e11414]">Fight IQ™</span>
        </span>
        <span className="h-px w-8 bg-[#e11414] sm:w-10" />
      </div>
    </main>
  );
}
