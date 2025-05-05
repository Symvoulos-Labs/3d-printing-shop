'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const reviews = [
  {
    name: 'Sarah Johnson',
    image: 'https://i.pravatar.cc/150?img=1',
    rating: 5,
    message:
      'The quality of my 3D printed prototype exceeded my expectations. The team was professional and delivered ahead of schedule.',
  },
  {
    name: 'Michael Chen',
    image: 'https://i.pravatar.cc/150?img=2',
    rating: 4,
    message:
      'Great service and attention to detail. My architectural model came out perfectly. Will definitely use again for future projects.',
  },
  {
    name: 'Emily Rodriguez',
    image: 'https://i.pravatar.cc/150?img=3',
    rating: 5,
    message:
      'As a product designer, I need precision. Their 3D printing service delivered exactly what I needed with impressive material quality.',
  },
  {
    name: 'David Thompson',
    image: 'https://i.pravatar.cc/150?img=4',
    rating: 4,
    message:
      'Responsive customer service and excellent print quality. The only reason for 4 stars is the slightly longer delivery time than expected.',
  },
  {
    name: 'Aisha Patel',
    image: 'https://i.pravatar.cc/150?img=5',
    rating: 5,
    message:
      "I've tried several 3D printing services, and this one tops them all. The resolution and finish of my medical device prototype was perfect.",
  },
];

const Reviews = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background flex flex-col items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            What Our Customers Say
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Don't just take our word for it. See what our customers have to say
            about our 3D printing services.
          </p>
        </div>

        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full "
        >
          <CarouselContent>
            {reviews.map((review, idx) => (
              <CarouselItem
                key={idx}
                className="sm:basis-1/1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col items-start justify-center p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <img
                          src={review.image}
                          alt={review.name}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-semibold">{review.name}</h3>
                          <div className="flex text-yellow-400">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill={
                                  i < review.rating ? 'currentColor' : 'none'
                                }
                                stroke={
                                  i < review.rating ? 'none' : 'currentColor'
                                }
                                className="h-4 w-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{review.message}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Reviews;
