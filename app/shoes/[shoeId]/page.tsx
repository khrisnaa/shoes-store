import { ProductDetail } from '@/components/product/product-detail';
import { ProductList } from '@/components/product/product-list';

const Page = () => {
  return (
    <div className="px-8">
      <ProductDetail />

      <ProductList title="Recomendation" />
    </div>
  );
};
export default Page;
