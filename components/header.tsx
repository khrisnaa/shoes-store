import { anton } from '@/app/font';
import { cn } from '@/lib/utils';

export const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1
      className={cn(
        anton.className,
        'text-5xl uppercase leading-tight sm:text-6xl md:text-7xl lg:text-[7rem]',
      )}
    >
      {children}
    </h1>
  );
};
