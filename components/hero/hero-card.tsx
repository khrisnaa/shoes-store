import { anton } from '@/app/font';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface HeroCardProps {
  label: string;
  imgUrl: string;
}

export const HeroCard = ({ label, imgUrl }: HeroCardProps) => {
  return (
    <div className="group relative aspect-square overflow-hidden border-2 border-r-0 border-black first:border-l-2 last:border-2">
      <span
        className={cn(
          anton.className,
          'absolute z-20 grid h-full w-full translate-y-[300%] place-content-center text-6xl text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100',
        )}
      >
        {label}
      </span>
      <span className="absolute left-0 top-0 z-10 h-full w-full bg-black bg-opacity-0 transition-all duration-500 group-hover:bg-opacity-60"></span>
      <Image
        alt="shoes"
        src={imgUrl}
        width={300}
        height={300}
        className="z-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-[1.2]"
      />
    </div>
  );
};
