"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type IconProps = { className?: string };

function PlayIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <polygon points="6 4 20 12 6 20 6 4" />
    </svg>
  );
}

function FeedIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="14" y2="18" />
    </svg>
  );
}

function LeaderboardIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <line x1="6" y1="20" x2="6" y2="14" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="18" y1="20" x2="18" y2="10" />
    </svg>
  );
}

function ChallengesIcon({ className }: IconProps) {
  // Two boxing gloves facing each other
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      {/* left glove */}
      <rect x="0.5" y="10.5" width="3.5" height="5" rx="1.3" />
      <circle cx="7.5" cy="13" r="4" />
      <circle cx="9" cy="9.2" r="1.9" />
      {/* right glove */}
      <rect x="20" y="10.5" width="3.5" height="5" rx="1.3" />
      <circle cx="16.5" cy="13" r="4" />
      <circle cx="15" cy="9.2" r="1.9" />
    </svg>
  );
}

function ProfileIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

const tabs = [
  { label: "Play", href: "/", Icon: PlayIcon },
  { label: "Feed", href: "/feed", Icon: FeedIcon },
  { label: "Leaderboard", href: "/leaderboard", Icon: LeaderboardIcon },
  { label: "Challenges", href: "/challenges", Icon: ChallengesIcon },
  { label: "Profile", href: "/profile", Icon: ProfileIcon },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-neutral-100 bg-white pb-[env(safe-area-inset-bottom)] md:hidden">
      <ul className="flex items-stretch justify-around px-1.5 py-1.5">
        {tabs.map(({ label, href, Icon }) => {
          const isActive = pathname === href;
          return (
            <li key={href} className="flex-1">
              <Link
                href={href}
                className={`flex flex-col items-center gap-1 rounded-2xl py-2 text-[11px] font-semibold leading-none transition ${
                  isActive ? "bg-brand text-white" : "text-neutral-500"
                }`}
              >
                <Icon className="h-5 w-5" />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
