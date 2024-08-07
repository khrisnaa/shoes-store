import { anton } from '@/app/font';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Trash } from 'lucide-react';
import Image from 'next/image';

export const CartCard = () => {
  return (
    <Card className="p-0">
      <CardContent className="flex p-0">
        <Image
          alt="NIKE"
          src={'/shoes/NIKE_DUNK_LOW_RETRO_A2.png'}
          width={300}
          height={300}
          className="max-w-1/3 z-0 aspect-square h-full max-h-56 object-cover"
        />
        <div className="p-4">
          <div className="flex flex-col gap-2">
            <h3 className={cn(anton.className, 'text-5xl uppercase')}>
              Dunk Low Retro
            </h3>
            <div className="flex gap-2">
              <span>Men's Shoes </span>
              <Badge className="font-bold">43</Badge>
            </div>
            <div className="flex justify-between">
              <span className="text-xl font-bold">Rp1.549.000</span>
              <button className="rounded-full bg-black p-2 text-white">
                <Trash className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
