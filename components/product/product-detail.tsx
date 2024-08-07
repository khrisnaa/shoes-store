import { anton, inter } from '@/app/font';
import { Header } from '@/components/header';
import { ImageContent } from '@/components/product/image-content';
import { ImageTrigger } from '@/components/product/image-trigger';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

const shoes = [
  {
    value: '1',
    imgUrl: '/shoes/NIKE_DUNK_LOW_RETRO_A1.png',
  },
  {
    value: '2',
    imgUrl: '/shoes/NIKE_DUNK_LOW_RETRO_A2.png',
  },
  {
    value: '3',
    imgUrl: '/shoes/NIKE_DUNK_LOW_RETRO_A3.png',
  },
];

const sizes = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46];
export const ProductDetail = () => {
  return (
    <div className="flex p-8">
      <Tabs defaultValue="1" className="flex w-full justify-center gap-8">
        <TabsList className="m-0 flex flex-col justify-start gap-4 p-0 py-2">
          {shoes.map((item, index) => (
            <ImageTrigger key={index} value={item.value} imgUrl={item.imgUrl} />
          ))}
        </TabsList>
        <div className="flex w-full max-w-md items-center justify-center">
          {shoes.map((item, index) => (
            <ImageContent key={index} value={item.value} imgUrl={item.imgUrl} />
          ))}
        </div>
      </Tabs>
      <div className="flex max-w-md flex-col space-y-4 p-2 text-lg">
        <div>
          <h3 className={cn(anton.className, 'text-6xl uppercase')}>
            Dunk Low Retro
          </h3>
          <span>Men's Shoes </span>
        </div>
        <div className="flex gap-4">
          <span className="font-bold">Rp1.549.000</span>
          <span className="text-muted-foreground line-through">
            Rp1.550.000
          </span>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {sizes.map((item, index) => (
            <Button variant={'outline'} className="rounded-none">
              {item}
            </Button>
          ))}
        </div>
        <Button className="rounded-none">Add to Bag</Button>
        <p>
          Recognising the Dunk's roots as the top-ranking university-team
          sneaker, the Be True To Your School Pack looks to the original ad
          campaign for inspiration. Colours represent top-flight universities,
          while crisp leather has the perfect amount of sheen to make 'em a
          hands-down win. So lace up and show off that varsity spirit. Are you
          game?
        </p>
      </div>
    </div>
  );
};
