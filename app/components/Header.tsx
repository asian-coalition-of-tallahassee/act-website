"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "@/public/logo.svg";

type NavChild = {
  label: string;
  href: string;
};

type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

const navLinks: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Events",
    href: "/events",
    children: [
      { label: "Experience Asia 2026", href: "/events/2026-EA" },
      { label: "Upcoming Events", href: "/events#upcoming" },
      { label: "Past Events", href: "/events/2022" },
    ],
  },
  {
    label: "Get Involved",
    href: "/get-involved",
    children: [
      { label: "Volunteer", href: "/get-involved/volunteer" },
      { label: "Vendors & Performers", href: "/get-involved/vendors-performers" },
      { label: "Sponsor Us", href: "/get-involved/sponsor" },
    ],
  },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Impact Report", href: "/about/impact-report" },
    ],
  },
  { label: "FAQ", href: "/faq" },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-3 w-3 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function DropdownItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);

  return (
    <li
      className="relative flex items-center"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span className="flex h-full cursor-default items-center gap-1.5 px-3 text-nav uppercase tracking-[0.08em] text-white">
        {item.label}
        <Chevron open={open} />
      </span>

      {open && (
        <ul className="absolute left-0 top-full z-50 min-w-52 border border-t-0 border-light-gray bg-white py-1 shadow-md">
          {item.children!.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                className="block px-4 py-3 text-body2 text-dark-gray transition-colors hover:bg-light-gray hover:text-black"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Announcement bar
      <div className="border-b border-white/20 bg-brand-red text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2.5">
          <p className="text-center text-body3 font-medium uppercase tracking-[0.14em]">
            Join us for Experience Asia 2026
          </p>
        </div>
      </div> */}

      {/* Main navigation */}
      <div className="bg-black">
        <nav className="mx-auto flex max-w-7xl items-stretch justify-between gap-6 border-b border-white/20 px-4">
          <Link href="/" className="flex shrink-0 items-center self-stretch py-4">
            <Image
              src={logo}
              alt="Asian Coalition of Tallahassee"
              width={121}
              height={42}
              priority
              className="h-9 w-auto"
            />
          </Link>

          <ul className="hidden self-stretch lg:flex lg:items-stretch">
            {navLinks.map((item) =>
              item.children ? (
                <DropdownItem key={item.href} item={item} />
              ) : (
                <li key={item.href} className="flex items-center">
                  <Link
                    href={item.href}
                    className="flex h-full items-center px-3 text-nav uppercase tracking-[0.08em] text-white transition-colors hover:text-white/80"
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          <button
            type="button"
            className="p-2 text-white lg:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>

        {mobileOpen && (
          <div className="border-t border-white/20 bg-brand-red lg:hidden">
            <ul className="flex flex-col px-4 py-4">
              {navLinks.map((item) => (
                <li key={item.href} className="border-b border-white/20 last:border-0">
                  {item.children ? (
                    <span className="block py-3 text-nav uppercase tracking-[0.08em] text-white">
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 text-nav uppercase tracking-[0.08em] text-white"
                    >
                      {item.label}
                    </Link>
                  )}
                  {item.children && (
                    <ul className="mb-3 ml-4 border-l-2 border-white/30 pl-4">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-2 text-body2 text-white/85"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
