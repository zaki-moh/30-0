import Image from "next/image";
import Link from "next/link";
import UtilityMenu from "@/components/UtilityMenu";

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
    <div className="flex h-full flex-col rounded-2xl border border-neutral-100 bg-white p-4 text-center shadow-sm sm:p-6 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="flex items-center justify-center gap-2 sm:gap-3">
        {facingGloves ? (
          <>
            {/* left glove mirrored so the pair faces each other */}
            <span className="text-lg -scale-x-100 sm:text-2xl" aria-hidden>
              🥊
            </span>
            <h3 className="text-base font-bold text-brand sm:text-xl">
              {mode.name}
            </h3>
            <span className="text-lg sm:text-2xl" aria-hidden>
              🥊
            </span>
          </>
        ) : (
          <>
            <span className="text-lg sm:text-2xl" aria-hidden>
              {mode.emoji}
            </span>
            <h3 className="text-base font-bold text-brand sm:text-xl">
              {mode.name}
            </h3>
          </>
        )}
      </div>
      <p className="mt-1.5 text-xs leading-snug text-neutral-500 sm:mt-3 sm:text-base dark:text-neutral-400">
        {mode.description}
      </p>
      <Link
        href={mode.href}
        className="mt-3 rounded-xl bg-brand px-4 py-2.5 text-sm font-bold text-white transition hover:bg-brand-dark focus:outline-none focus-visible:ring-4 focus-visible:ring-red-300 sm:mt-6 sm:px-6 sm:py-3 sm:text-base"
      >
        {mode.cta}
      </Link>
    </div>
  );
}

export default function Home() {
  return (
    <section className="relative mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 pt-1 pb-4 text-center sm:px-6 sm:pt-6 sm:pb-10">
      {/* Profile / dark-mode / menu cluster — desktop hero, top-right */}
      <div className="absolute right-4 top-4 hidden md:block">
        <UtilityMenu />
      </div>

      {/* Brand + headline */}
      {/* Logo only on desktop — on mobile the top-bar logo is enough */}
      <Image
        src="/logo.png"
        alt="30-0 logo"
        width={96}
        height={96}
        priority
        className="mx-auto hidden h-16 w-16 drop-shadow-md sm:block sm:h-20 sm:w-20"
      />
      <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
        Can you go <span className="text-brand">30-0</span>?
      </h1>
      <h2 className="mt-0.5 text-xl font-extrabold tracking-tight text-neutral-900 sm:mt-1 sm:text-3xl dark:text-white">
        Choose Your Mode
      </h2>
      <p className="mt-1.5 text-sm text-neutral-500 sm:mt-3 sm:text-lg dark:text-neutral-400">
        How do you want to build your fighter?
      </p>

      {/* Mode cards — 2-up on every screen, 1v1 full width below */}
      <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4">
        {modes.map((mode) => (
          <ModeCard key={mode.name} mode={mode} />
        ))}
      </div>
      <div className="mt-3 sm:mt-4">
        <ModeCard mode={versus} facingGloves />
      </div>

      {/* New mode pill */}
      <div className="mt-4 flex justify-center sm:mt-6">
        <Link
          href="/play/title-run"
          className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2.5 text-xs font-semibold text-neutral-900 shadow-sm transition hover:border-brand sm:px-5 sm:py-3 sm:text-sm dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
        >
          <span aria-hidden>🥊</span>
          New: <span className="font-bold text-brand">TITLE RUN</span>
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
