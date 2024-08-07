import { anton } from '@/app/font';
import { cn } from '@/lib/utils';

export const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className={cn(anton.className, 'text-[7rem] uppercase leading-tight')}>
      {children}
    </h1>
  );
};
