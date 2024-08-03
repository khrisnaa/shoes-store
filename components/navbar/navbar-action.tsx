'use client';

import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Heart, Search, ShoppingBag } from 'lucide-react';

export const NavbarAction = () => {
  return (
    <div className="flex space-x-2">
      <div className="relative flex border">
        <button className="p-2 hover:bg-neutral-200">
          <Search className="h-5 w-5" />
        </button>
        <Input
          type="text"
          placeholder="Search..."
          className="border-none px-2 ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </div>
      <div>
        <button className="rounded-full p-2 hover:bg-neutral-200">
          <Heart className="h-5 w-5" />
        </button>
        <button className="relative rounded-full p-2 hover:bg-neutral-200">
          <ShoppingBag className="h-5 w-5" />
          <Badge className="absolute -top-1 rounded-full px-1">10</Badge>
        </button>
      </div>
    </div>
  );
};
