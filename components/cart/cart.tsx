import { CartCard } from '@/components/cart/cart-card';
import { Summary } from '@/components/cart/summary';

export const Cart = () => {
  return (
    <div className="relative grid grid-cols-2 space-x-16">
      <div className="flex flex-col space-y-8">
        <CartCard />
        <CartCard />
        <CartCard />
      </div>
      <Summary />
    </div>
  );
};
