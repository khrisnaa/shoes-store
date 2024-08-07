'use client';

import { anton } from '@/app/font';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useState } from 'react';

const links = [
  { label: 'Men', href: '/category/1' },
  { label: 'Women', href: '#' },
  { label: 'Kids', href: '#' },
  { label: 'Classic', href: '#' },
  { label: 'New Article', href: '#' },
];

export const MobileMenu = () => {
  const [isChecked, setIsChecked] = useState(false);
  const onClick = () => {
    setIsChecked(false);
  };

  return (
    <div className="block sm:hidden">
      <input
        type="checkbox"
        id="menu-input"
        className="hidden"
        checked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
      />
      <label
        htmlFor="menu-input"
        id="menu-label"
        className="absolute left-[20px] top-[26px] z-[11] flex flex-col gap-[3.5px]"
      >
        <span className="h-[2.5px] w-[25px] rounded-md bg-black"></span>
        <span className="h-[2.5px] w-[25px] rounded-md bg-black"></span>
        <span className="h-[2.5px] w-[25px] rounded-md bg-black"></span>
      </label>

      <div
        id="menu-list"
        className="fixed left-0 top-0 z-10 h-full w-full -translate-x-[100%] bg-black py-24"
      >
        <ul className="bg-red flex w-full flex-col gap-6 px-4 text-white">
          {links.map((item, index) => (
            <li
              id="menu-item"
              className="relative w-full border-b border-white hover:px-4"
            >
              <Link
                key={index}
                href={item.href}
                className={cn(anton.className, 'text-3xl uppercase')}
                onClick={onClick}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
