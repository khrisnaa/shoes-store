import { ProductCarousel } from '@/components/product/product-carousel';
import { ProductDetail } from '@/components/product/product-detail';

const Page = () => {
  return (
    <div className="px-4 sm:px-8">
      <ProductDetail />
      <ProductCarousel title="Recomendation" />
    </div>
  );
};
export default Page;
