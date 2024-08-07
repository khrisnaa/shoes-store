'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { anton } from '@/app/font';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Expand, Heart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const ProductCard = () => {
  const router = useRouter();

  const [liked, setLiked] = useState(false);

  const onLike = () => {
    setLiked(true);
  };
  return (
    <Card className="group rounded-none border-2 border-black">
      <CardHeader className="p-4">
        <div
          className={cn(
            anton.className,
            'flex items-center justify-between text-xl',
          )}
        >
          <span>NIKE</span>
          <span>$65.00</span>
        </div>
      </CardHeader>
      <CardContent className="relative cursor-pointer overflow-hidden border-b-2 border-t-2 border-black p-0">
        <div className="absolute z-[1] h-full w-full bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-50"></div>
        <Image
          alt="NIKE"
          src={'/shoes/NIKE_DUNK_LOW_RETRO_A2.png'}
          width={300}
          height={300}
          className="z-0 h-full max-h-72 w-full object-cover"
        />

        <div className="items-ce absolute bottom-4 left-1/2 z-[2] flex -translate-x-1/2 translate-y-12 justify-center gap-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            onClick={onLike}
            className={cn(
              'rounded-full p-2',
              liked ? 'bg-red-500' : 'bg-neutral-100',
            )}
          >
            <Heart className="h-5 w-5" />
          </button>
          <button
            onClick={() => router.push('/shoes/1')}
            className="rounded-full bg-neutral-100 p-2"
          >
            <Expand className="h-5 w-5" />
          </button>
        </div>
      </CardContent>
      <CardFooter className="p-4">
        <div className="flex flex-col">
          <span className={cn(anton.className)}>NIKE DUNK LOW RETRO</span>
          <small className="text-xs text-muted-foreground">
            Nike Dunk Low Retro White, Premium Sneakers
          </small>
        </div>
      </CardFooter>
    </Card>
  );
};
