import FaQ from '@/components/sections/faq';
import Reviews from '@/components/sections/reviews';

export default function Home() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <Reviews />
      <FaQ />
    </main>
  );
}
