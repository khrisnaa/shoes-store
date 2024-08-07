'use client';

import Link from 'next/link';

interface Link {
  label: string;
  href: string;
}

export const NavbarLink = ({ links }: { links: Link[] }) => {
  return (
    <nav className="absolute left-1/2 hidden -translate-x-1/2 sm:block">
      <ul className="flex gap-4 text-sm uppercase">
        {links.map((link) => (
          <li>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
