import Image from "next/image";
import Link from "next/link";

type Mode = {
  emoji: string;
  name: string;
  description: string;
  cta: string;
  href: string;
};

const modes: Mode[] = [
  {
    emoji: "💯",
    name: "Classic",
    description: "Build with full fighter stats visible — make informed picks.",
    cta: "Play Classic",
    href: "/play/classic",
  },
  {
    emoji: "🧠",
    name: "Fight IQ",
    description: "Stats hidden — build by memory and test your fight knowledge.",
    cta: "Play Fight IQ",
    href: "/play/fight-iq",
  },
];

const versus: Mode = {
  emoji: "🥊",
  name: "1v1",
  description: "Build your fighter, then go head-to-head against a rival fighter.",
  cta: "Play",
  href: "/play/1v1",
};

function ModeCard({
  mode,
  facingGloves = false,
}: {
  mode: Mode;
  facingGloves?: boolean;
}) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-neutral-100 bg-white p-6 text-center shadow-sm">
      <div className="flex items-center justify-center gap-3">
        {facingGloves ? (
          <>
            {/* left glove mirrored so the pair faces each other */}
            <span className="text-2xl -scale-x-100" aria-hidden>
              🥊
            </span>
            <h3 className="text-xl font-bold text-brand">{mode.name}</h3>
            <span className="text-2xl" aria-hidden>
              🥊
            </span>
          </>
        ) : (
          <>
            <span className="text-2xl" aria-hidden>
              {mode.emoji}
            </span>
            <h3 className="text-xl font-bold text-brand">{mode.name}</h3>
          </>
        )}
      </div>
      <p className="mt-3 text-neutral-500">{mode.description}</p>
      <Link
        href={mode.href}
        className="mt-6 rounded-xl bg-brand px-6 py-3 font-bold text-white transition hover:bg-brand-dark focus:outline-none focus-visible:ring-4 focus-visible:ring-red-300"
      >
        {mode.cta}
      </Link>
    </div>
  );
}

export default function Home() {
  return (
    <section className="mx-auto w-full max-w-3xl px-5 py-8 text-center sm:px-6 sm:py-10">
      {/* Brand + headline */}
      <Image
        src="/logo.png"
        alt="30-0 logo"
        width={96}
        height={96}
        priority
        className="mx-auto h-16 w-16 drop-shadow-md sm:h-20 sm:w-20"
      />
      <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
        Can you go <span className="text-brand">30-0</span>?
      </h1>
      <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-3xl">
        Choose Your Mode
      </h2>
      <p className="mt-3 text-base text-neutral-500 sm:text-lg">
        How do you want to build your fighter?
      </p>

      {/* Mode cards */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {modes.map((mode) => (
          <ModeCard key={mode.name} mode={mode} />
        ))}
      </div>
      <div className="mt-4">
        <ModeCard mode={versus} facingGloves />
      </div>

      {/* New mode pill */}
      <div className="mt-6 flex justify-center">
        <Link
          href="/play/title-run"
          className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:border-brand"
        >
          <span aria-hidden>🥊</span>
          New: <span className="font-bold text-brand">TITLE RUN</span>
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
