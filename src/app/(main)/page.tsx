import AboutUs from '@/components/sections/aboutUs';
import CategoryCarousel from '@/components/sections/categoryCarousel';
import FaQ from '@/components/sections/faq';
import Gallery from '@/components/sections/gallary';
import Hero from '@/components/sections/hero';
import ModelingProcessSteps from '@/components/sections/modelingProcessSteps';
import ProductSection from '@/components/sections/productSection';
import Reviews from '@/components/sections/reviews';
import WhatWeDo from '@/components/sections/whatWeDo';
import WhyChooseUsModeling from '@/components/sections/whyChooseUsModeling';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <WhatWeDo />
      <ModelingProcessSteps />
      <WhyChooseUsModeling />
      <CategoryCarousel />
      <ProductSection />
      <Gallery />
      <Reviews />
      <FaQ />
    </>
  );
}
