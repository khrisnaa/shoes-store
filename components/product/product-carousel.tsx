'use client';

import { anton } from '@/app/font';
import { Header } from '@/components/header';
import { ProductCard } from '@/components/product/product-card';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

interface ProductCarouselProps {
  title: string;
}

export const ProductCarousel = ({ title }: ProductCarouselProps) => {
  return (
    <div>
      <div className="flex items-end justify-between">
        <Header>{title}</Header>
        <Button
          className={cn(
            anton.className,
            'm-8 rounded-none px-10 py-8 text-xl uppercase',
          )}
          size={'lg'}
        >
          View More
        </Button>
      </div>
      <Carousel className="w-full py-8">
        <CarouselContent>
          {Array.from({ length: 8 }).map((_, index) => (
            <CarouselItem className="basis-1/4">
              <ProductCard />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
