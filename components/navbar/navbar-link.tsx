'use client';

import Link from 'next/link';

interface Link {
  label: string;
  href: string;
}

export const NavbarLink = ({ links }: { links: Link[] }) => {
  return (
    <nav className="absolute left-1/2 -translate-x-1/2">
      <ul className="flex gap-4">
        {links.map((link) => (
          <li>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
