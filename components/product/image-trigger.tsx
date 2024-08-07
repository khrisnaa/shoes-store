import { TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';

interface ImageTriggerProps {
  value: string;
  imgUrl: string;
}

export const ImageTrigger = ({ value, imgUrl }: ImageTriggerProps) => {
  return (
    <TabsTrigger value={value} className="max-w-20 p-0">
      <Image
        alt="shoes"
        src={imgUrl}
        width={300}
        height={300}
        className="w-full border object-cover"
      />
    </TabsTrigger>
  );
};
