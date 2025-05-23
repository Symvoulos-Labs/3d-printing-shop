'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import Image from 'next/image';

import Autoplay from 'embla-carousel-autoplay';
import Heading from '../common/heading';
import SectionContainer from '../common/sectionContainer';
import LinkedButton from '../common/linkedButton';
import { ArrowRight } from 'lucide-react';
import Pill from '../common/pill';

const categories = [
  {
    id: '1',
    name: 'Home Decor',
    description:
      'Elevate your space with our custom 3D printed home decor collection, featuring modern designs for every style.',
    imageUrl:
      'https://images.unsplash.com/photo-1712431028580-049087ee59d8?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/categories/home-decor',
  },
  {
    id: '2',
    name: 'Tech Accessories',
    description:
      'Functional and stylish accessories for your devices, designed with precision and durability in mind.',
    imageUrl:
      'https://images.unsplash.com/photo-1698296725423-9ede5de2d624?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/categories/tech-accessories',
  },
  {
    id: '3',
    name: 'Miniatures',
    description:
      'Highly detailed miniatures for gaming, collecting, or display, crafted with expert precision.',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1744184366628-623ef467d31c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/categories/miniatures',
  },
  {
    id: '4',
    name: 'Educational Models',
    description:
      'Hands-on learning tools and educational models to bring complex concepts to life.',
    imageUrl:
      'https://images.unsplash.com/photo-1697498435309-2c7864cfd607?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/categories/educational',
  },
  {
    id: '5',
    name: 'Jewelry & Accessories',
    description:
      'Unique, customizable jewelry and personal accessories that make a statement.',
    imageUrl:
      'https://images.unsplash.com/photo-1712431028580-049087ee59d8?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/categories/jewelry',
  },
  {
    id: '6',
    name: 'Architectural Models',
    description:
      'Precise architectural models and building replicas for professionals and enthusiasts.',
    imageUrl:
      'https://images.unsplash.com/photo-1668405841055-f25e740e4a14?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/categories/architecture',
  },
];

export default function CategoryCarousel() {
  return (
    <SectionContainer>
      {/* Heading */}
      <Heading
        pillText="Explore Categories"
        title="Browse Our "
        titleBold="Product Categories"
        description="Discover our diverse range of 3D printed products organized into
              categories for easy exploration."
        className="items-center text-center"
      />

      {/* Category Carousel with navigation buttons positioned like in reviews component */}
      <div className="mt-8 relative">
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full "
        >
          <CarouselContent>
            {categories.map((category) => (
              <CarouselItem
                key={category.id}
                className="sm:basis-full md:basis-1/2 lg:basis-1/2 xl:basis-1/3 pl-2 md:pl-6"
              >
                <div className="p-2">
                  <Card className="overflow-hidden rounded-3xl border border-zinc-100 hover:shadow-md transition-shadow duration-300 py-0">
                    <CardContent className="px-0 py-0 ">
                      <div className="flex flex-col md:flex-row h-full">
                        {/* Left-aligned Image */}
                        <div className="relative w-full md:w-2/5 h-[200px] md:h-[250px] overflow-hidden">
                          <Image
                            src={category.imageUrl}
                            alt={category.name}
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-500"
                          />

                          {/* Category tag overlay */}

                          <Pill
                            text="Featured"
                            className="absolute top-2 left-2 inline-block text-xs"
                          />
                        </div>

                        {/* Right-aligned Content */}
                        <div className="p-6 flex flex-col justify-between md:w-3/5">
                          <div>
                            <h3 className="text-xl font-bold mb-2">
                              {category.name}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-6">
                              {category.description}
                            </p>
                          </div>

                          <div className="flex flex-col justify-start items-start">
                            <LinkedButton
                              text="Browse now"
                              icon={<ArrowRight strokeWidth={3} />}
                              className="px-5 py-0 text-xs"
                              variant="outlined"
                              link={category.link}
                            />
                          </div>
                        </div>
                      </div>
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

      {/* View All products Button */}

      <LinkedButton
        text="Explore All Products"
        icon={<ArrowRight strokeWidth={3} />}
        className="mt-4 w-fit mx-auto"
        link="/products"
      />
    </SectionContainer>
  );
}
