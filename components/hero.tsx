import { anton } from '@/app/font';
import { cn } from '@/lib/utils';

export const Hero = () => {
  return (
    <div className="flex h-full w-full flex-col space-y-8  py-8">
      <div className={cn(anton.className)}>
           <h1 className="text-[7rem] uppercase leading-tight">
          Discover limited sneakers without limitation
        </h1>
      </div>
      <div className="grid grid-cols-4">
        <div className="group relative aspect-square overflow-hidden bg-red-400">
          <span
            className={cn(
              anton.className,
              'absolute z-10 grid h-full w-full translate-y-[300%] place-content-center text-6xl text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100',
            )}
          >
            NIKE
          </span>
          <span className="absolute left-0 top-0 z-0 h-full w-full bg-black bg-opacity-0 transition-all duration-500 group-hover:bg-opacity-60"></span>
        </div>
        <div className="group relative aspect-square overflow-hidden bg-purple-400">
          <span
            className={cn(
              anton.className,
              'absolute z-10 grid h-full w-full translate-y-[300%] place-content-center text-6xl text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100',
            )}
          >
            ADIDAS
          </span>
          <span className="absolute left-0 top-0 z-0 h-full w-full bg-black bg-opacity-0 transition-all duration-500 group-hover:bg-opacity-60"></span>
        </div>
        <div className="group relative aspect-square overflow-hidden bg-yellow-400">
          <span
            className={cn(
              anton.className,
              'absolute z-10 grid h-full w-full translate-y-[300%] place-content-center text-6xl text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100',
            )}
          >
            VANS
          </span>
          <span className="absolute left-0 top-0 z-0 h-full w-full bg-black bg-opacity-0 transition-all duration-500 group-hover:bg-opacity-60"></span>
        </div>
        <div className="group relative aspect-square overflow-hidden bg-orange-400">
          <span
            className={cn(
              anton.className,
              'absolute z-10 grid h-full w-full translate-y-[300%] place-content-center text-6xl text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100',
            )}
          >
            CONVERSE
          </span>
          <span className="absolute left-0 top-0 z-0 h-full w-full bg-black bg-opacity-0 transition-all duration-500 group-hover:bg-opacity-60"></span>
        </div>
      </div>
    </div>
  );
};
