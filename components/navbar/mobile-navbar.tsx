'use client';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { BarChart } from 'lucide-react';

export const MobileNavbar = () => {
  return (
    <div className="h-16 overflow-hidden">
      <div className="group">
        <input
          type="checkbox"
          id="menu-active"
          className="hidden"
          onChange={() => console.log('x')}
        />
        <label
          htmlFor="menu-active"
          id="menu-button"
          className="group absolute left-[20px] top-[20px] z-10 flex w-12 flex-col gap-1"
        >
          <span className="h-[2.5px] w-[25px] rounded-md transition-transform duration-300"></span>
          <span className="h-[2.5px] w-[25px] rounded-md transition-all duration-100"></span>
          <span className="h-[2.5px] w-[25px] rounded-md transition-transform duration-300"></span>
        </label>

        <ul
          id="menu-list"
          className="absolute left-0 top-0 flex h-full w-full -translate-x-[100%] flex-col items-center justify-center space-y-8 bg-black text-white transition-all duration-500"
        >
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Gallery</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Feedback</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
