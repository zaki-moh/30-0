"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

const STORAGE_KEY = "hideRulesModal";

const traits = [
  { label: "Striking", color: "text-red-600 dark:text-red-400", icon: "🥊" },
  { label: "Grappling", color: "text-blue-600 dark:text-blue-400", icon: "🤼" },
  { label: "Fight IQ", color: "text-purple-600 dark:text-purple-400", icon: "🧠" },
  { label: "Cardio", color: "text-green-600 dark:text-green-400", icon: "❤️" },
  { label: "Durability", color: "text-orange-500 dark:text-orange-400", icon: "🛡️" },
];

// Read the "already dismissed" flag from localStorage in a hydration-safe way.
const subscribe = () => () => {};
const getSnapshot = () => {
  try {
    return !localStorage.getItem(STORAGE_KEY);
  } catch {
    return true;
  }
};
const getServerSnapshot = () => false;

export default function RulesModal() {
  const shouldShow = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );
  const [dismissed, setDismissed] = useState(false);
  const open = shouldShow && !dismissed;

  // Lock background scroll + close on Escape while the modal is open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDismissed(true);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const playGame = () => setDismissed(true);

  const dontShowAgain = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore storage errors (e.g. private mode) and just close
    }
    setDismissed(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="rules-title"
    >
      <div className="flex max-h-[85dvh] w-full max-w-lg flex-col overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-neutral-900">
        {/* Scrollable content */}
        <div className="overflow-y-auto p-6 sm:p-8">
          <h2
            id="rules-title"
            className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white"
          >
            How to Play <span className="text-brand">30-0</span>
          </h2>
          <p className="mt-1 text-neutral-500 dark:text-neutral-400">
            Build the ultimate fighter and see if you can go 30-0!
          </p>

          {/* The Draft */}
          <section className="mt-6">
            <h3 className="text-sm font-bold uppercase tracking-wide text-neutral-900 dark:text-white">
              The Draft
            </h3>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
              <li>Each round, a random fighter will be revealed</li>
              <li>
                Select <span className="font-bold text-brand">ONE</span>{" "}
                championship trait from that fighter
              </li>
              <li>Complete 5 rounds to build your fighter</li>
            </ul>
          </section>

          {/* The 5 Championship Traits */}
          <section className="mt-6">
            <h3 className="text-sm font-bold uppercase tracking-wide text-neutral-900 dark:text-white">
              The 5 Championship Traits
            </h3>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
              {traits.map((t) => (
                <span
                  key={t.label}
                  className={`flex items-center gap-1.5 text-sm font-bold ${t.color}`}
                >
                  <span aria-hidden>{t.icon}</span>
                  {t.label}
                </span>
              ))}
            </div>
          </section>

          {/* Important */}
          <section className="mt-6">
            <h3 className="text-sm font-bold uppercase tracking-wide text-neutral-900 dark:text-white">
              Important
            </h3>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
              <li>No rerolls</li>
              <li>No changing picks</li>
              <li>Every decision is permanent</li>
            </ul>
          </section>

          {/* Fight IQ Simulation */}
          <section className="mt-6">
            <h3 className="text-sm font-bold uppercase tracking-wide text-neutral-900 dark:text-white">
              Fight IQ™ Simulation
            </h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Fight IQ™ evaluates far more than overall ratings. Every matchup
              considers styles, decision-making, conditioning, durability, and
              more to create a unique career every time.
            </p>
          </section>
        </div>

        {/* Footer buttons (always visible) */}
        <div className="flex flex-col gap-2 border-t border-neutral-100 p-4 sm:px-8 dark:border-neutral-800">
          <button
            type="button"
            onClick={playGame}
            className="rounded-xl bg-brand px-6 py-3 font-bold text-white transition hover:bg-brand-dark focus:outline-none focus-visible:ring-4 focus-visible:ring-red-300"
          >
            Play Game
          </button>
          <button
            type="button"
            onClick={dontShowAgain}
            className="rounded-xl px-6 py-2.5 text-sm font-semibold text-neutral-500 transition hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
          >
            Don&apos;t show this again
          </button>
        </div>
      </div>
    </div>
  );
}
