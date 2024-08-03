import { anton } from '@/app/font';
import { ProductCard } from '@/components/product-card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const ProductList = () => {
  return (
    <div>
      <div className="flex items-end justify-between">
        <h3 className={cn(anton.className, 'text-[7rem]')}>NEW ARTICLE</h3>
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
      <div className="grid grid-cols-4 gap-8 py-8">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};
