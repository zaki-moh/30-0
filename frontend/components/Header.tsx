"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Play", href: "/" },
  { label: "Feed", href: "/feed" },
  { label: "Leaderboard", href: "/leaderboard" },
  { label: "Challenges", href: "/challenges" },
  { label: "Profile", href: "/profile" },
];

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function iconBtn() {
  return "rounded-lg border border-neutral-200 p-2 text-neutral-700 transition hover:text-brand";
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-transparent md:border-b md:border-neutral-100 md:bg-white/90 md:backdrop-blur">
      {/* ===== Desktop top nav ===== */}
      <div className="mx-auto hidden max-w-6xl items-center justify-between gap-4 px-6 py-3 md:flex">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="30-0 logo"
            width={36}
            height={36}
            priority
            className="h-9 w-9 drop-shadow-sm"
          />
          <span className="text-lg font-extrabold tracking-tight text-neutral-900">
            30<span className="text-brand">-0</span>
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-6 text-[15px] font-semibold lg:gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    isActive
                      ? "text-brand"
                      : "text-neutral-500 transition hover:text-brand"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <button type="button" aria-label="Change language" className={iconBtn()}>
            <GlobeIcon />
          </button>
          <Link
            href="/signup"
            className="rounded-full bg-brand px-5 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-brand-dark focus:outline-none focus-visible:ring-4 focus-visible:ring-red-300"
          >
            Sign up
          </Link>
        </div>
      </div>

      {/* ===== Mobile top bar ===== */}
      <div className="grid grid-cols-3 items-center gap-2 px-4 py-2.5 md:hidden">
        <div className="justify-self-start" />
        <Link href="/" className="justify-self-center">
          <Image
            src="/logo.png"
            alt="30-0 logo"
            width={72}
            height={72}
            priority
            className="h-16 w-16 drop-shadow-sm"
          />
        </Link>
        <div className="flex items-center justify-self-end gap-1.5">
          <button type="button" aria-label="Toggle dark mode" className={iconBtn()}>
            <MoonIcon />
          </button>
          <button type="button" aria-label="Change language" className={iconBtn()}>
            <GlobeIcon />
          </button>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className={iconBtn()}
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {/* Mobile dropdown (toggled by hamburger) */}
      {menuOpen && (
        <div className="border-t border-neutral-100 px-4 py-3 md:hidden">
          <Link
            href="/signup"
            onClick={() => setMenuOpen(false)}
            className="block rounded-full bg-brand px-5 py-2.5 text-center text-sm font-bold text-white"
          >
            Sign up
          </Link>
        </div>
      )}
    </header>
  );
}
