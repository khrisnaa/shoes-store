import { anton } from '@/app/font';
import { Header } from '@/components/header';
import { HeroCard } from '@/components/hero/hero-card';
import { cn } from '@/lib/utils';

export const Hero = () => {
  return (
    <div className="flex h-full w-full flex-col space-y-8 py-8">
      <Header>Discover limited sneakers without limitation</Header>
      <div className="grid grid-cols-4">
        <HeroCard label="NIKE" imgUrl="/shoes/NIKE_DUNK_LOW_RETRO_A2.png" />
        <HeroCard label="ADIDAS" imgUrl="/shoes/NIKE_DUNK_LOW_SE_A2.png" />
        <HeroCard label="VANS" imgUrl="/shoes/NIKE_SB_DUNK_LOW_PRO_A2.png" />
        <HeroCard
          label="CONVERSE"
          imgUrl="/shoes/NIKE_DUNK_LOW_RETRO_SE_A2.png"
        />
      </div>
    </div>
  );
};
