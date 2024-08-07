import { anton } from '@/app/font';
import { cn } from '@/lib/utils';

export const NavbarLogo = () => {
  return (
    <div className={cn(anton.className, 'hidden sm:block')}>
      <p className="text-xl uppercase">SEPATOOD</p>
    </div>
  );
};
