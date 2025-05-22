import AboutUs from '@/components/sections/aboutUs';
import CategoryCarousel from '@/components/sections/categoryCarousel';
import FaQ from '@/components/sections/faq';
import Gallery from '@/components/sections/gallary';
import Hero from '@/components/sections/hero';
import PaymentSteps from '@/components/sections/paymentSteps';
import ProductGrid from '@/components/sections/productGrid';
import Reviews from '@/components/sections/reviews';
import WhatWeDo from '@/components/sections/whatWeDo';
import WhyChooseUs from '@/components/sections/whyChooseUs';

export default function Home() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start overflow-x-hidden">
      <Hero />
      <AboutUs />
      <WhatWeDo />
      <PaymentSteps />
      <WhyChooseUs />
      <CategoryCarousel />
      <ProductGrid />
      <Gallery />
      <Reviews />
      <FaQ />
    </main>
  );
}
