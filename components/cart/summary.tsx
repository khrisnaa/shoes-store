import { anton } from '@/app/font';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

export const Summary = () => {
  return (
    <div className="fixed right-36 flex h-fit flex-col space-y-12 border border-black px-4 pb-8">
      <Header>Summary</Header>
      <div className="flex flex-col space-y-6">
        <div className="flex items-center justify-between gap-2 text-3xl">
          <h3 className={cn(anton.className, 'uppercase')}>Subtotal:</h3>
          <span className="text-xl">Rp1.549.000</span>
        </div>
        <div className="flex items-center justify-between gap-2 text-3xl">
          <h3 className={cn(anton.className, 'uppercase')}>Delivery:</h3>
          <span className="text-xl">Rp100.000</span>
        </div>
        <Separator />
        <div className="flex items-center justify-between gap-2 text-3xl">
          <h3 className={cn(anton.className, 'uppercase')}>Total:</h3>
          <span className="text-xl">Rp1.649.000</span>
        </div>
      </div>
      <Button className="rounded-none p-8">
        <span className={cn(anton.className, 'text-4xl uppercase')}>
          Checkout
        </span>
      </Button>
    </div>
  );
};
