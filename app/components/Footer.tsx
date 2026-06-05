import Link from "next/link";

const footerLinks = [
  { label: "About Us", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "FAQ", href: "/faq" },
  { label: "Volunteer", href: "/get-involved/volunteer" },
  { label: "Sponsor Us", href: "/get-involved/sponsor" },
];

function SocialIcon({ label, href, children }: { label: string; href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/50 text-white transition-colors hover:border-white hover:bg-white/10"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-10 md:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between md:gap-10">
          <div>
            <p className="font-serif text-lg md:text-xl">
              © {year} Asian Coalition of Tallahassee
            </p>

            <ul className="mt-5 grid grid-cols-2 gap-x-8 gap-y-2 sm:max-w-sm">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body2 text-white/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:text-right">
            <p className="font-serif text-2xl font-normal leading-none tracking-[-0.01em] md:text-[1.75rem]">
              Follow us
            </p>
            <div className="mt-3 flex gap-2.5 md:justify-end">
              <SocialIcon label="Facebook" href="https://www.facebook.com/profile.php?id=61587579564156">
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </SocialIcon>
              <SocialIcon label="Email" href="mailto:asiancoalitiontlh@gmail.com">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </SocialIcon>
            </div>
          </div>
        </div>

        <p className="mt-6 border-t border-white/15 pt-4 text-body3 text-white/60">
          Tallahassee, FL ·{" "}
          <a href="mailto:asiancoalitiontlh@gmail.com" className="transition-colors hover:text-white">
            asiancoalitiontlh@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
}
