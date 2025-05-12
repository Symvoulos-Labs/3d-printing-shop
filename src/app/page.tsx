import FaQ from '@/components/sections/faq';
import Gallery from '@/components/sections/gallary';
import Hero from '@/components/sections/hero';
import Reviews from '@/components/sections/reviews';
import WhyChooseUs from '@/components/sections/whyChooseUs';

export default function Home() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start overflow-x-hidden">
      <Hero />
      <WhyChooseUs />
      <Gallery />
      <Reviews />
      <FaQ />
    </main>
  );
}
