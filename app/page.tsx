import { Footer } from '@/components/footer/footer';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero/hero';
import { ProductCarousel } from '@/components/product/product-carousel';

const Page = () => {
  return (
    <div className="px-4 sm:px-8">
      <Hero />
      <ProductCarousel title="New Article" />
      <ProductCarousel title="Deal Of The Day" />
      <Footer />
    </div>
  );
};
export default Page;
