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
        <div className="w-1/2">
          <Header>{title}</Header>
        </div>

        <Button
          className={cn(
            anton.className,
            'text-md rounded-none uppercase md:px-10 md:py-8 md:text-xl',
          )}
          size={'lg'}
        >
          View More
        </Button>
      </div>
      <Carousel className="w-full py-8">
        <CarouselContent>
          {Array.from({ length: 8 }).map((_, index) => (
            <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <ProductCard />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:block" />
        <CarouselNext className="hidden sm:block" />
      </Carousel>
    </div>
  );
};
