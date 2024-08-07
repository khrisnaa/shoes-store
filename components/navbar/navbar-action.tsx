'use client';

import { Badge } from '@/components/ui/badge';
import { Heart, Search, ShoppingBag } from 'lucide-react';

export const NavbarAction = () => {
  return (
    <div className="flex space-x-2">
      <button className="rounded-full p-2 hover:bg-neutral-200">
        <Search className="h-5 w-5" />
      </button>
      <button className="rounded-full p-2 hover:bg-neutral-200">
        <Heart className="h-5 w-5" />
      </button>
      <button className="relative rounded-full p-2 hover:bg-neutral-200">
        <ShoppingBag className="h-5 w-5" />
        <Badge className="absolute -top-1 rounded-full px-1">10</Badge>
      </button>
    </div>
  );
};
