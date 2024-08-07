import { TabsContent } from '@/components/ui/tabs';
import Image from 'next/image';

interface ImageContentProps {
  value: string;
  imgUrl: string;
}

export const ImageContent = ({ value, imgUrl }: ImageContentProps) => {
  return (
    <TabsContent value={value} className="w-full">
      <div className="w-full">
        <Image
          alt="shoes"
          src={imgUrl}
          width={300}
          height={300}
          className="w-full object-cover"
        />
      </div>
    </TabsContent>
  );
};
