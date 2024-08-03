import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { anton } from '@/app/font';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export const ProductCard = () => {
  return (
    <Card className="rounded-none border-2 border-black">
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
      <CardContent className="border-b-2 border-t-2 border-black p-0">
        <Image
          alt="NIKE"
          src={'/shoes/NIKE_DUNK_LOW_RETRO_A2.png'}
          width={300}
          height={300}
          className="h-full max-h-72 w-full object-cover"
        />
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
