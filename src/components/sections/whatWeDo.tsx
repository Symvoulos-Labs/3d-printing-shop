'use client';

import { Card, CardContent } from '@/components/ui/card';

import Heading from '../common/heading';
import SectionContainer from '../common/sectionContainer';

import LinkedButton from '../common/linkedButton';
import { MoveRight } from 'lucide-react';

const services = [
  {
    icon: '3dProducts',
    title: 'Sell 3D Products',
    description:
      'High-quality pre-designed 3D printed products for various applications and industries.',
    buttonText: 'View Products',
    buttonHref: '/products',
    serviceIcon: (
      <div className="bg-blue-100 rounded-lg p-3 sm:p-4 w-full h-full flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-blue-600 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
        >
          <path d="m7.5 4.27 9 5.15" />
          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
          <path d="m3.3 7 8.7 5 8.7-5" />
          <path d="M12 22V12" />
        </svg>
      </div>
    ),
  },
  {
    icon: '3dModeling',
    title: '3D Modeling',
    description:
      'Professional 3D modeling services to bring your ideas to life with precision and creativity.',
    buttonText: 'Learn More',
    buttonHref: '/modeling',
    serviceIcon: (
      <div className="bg-indigo-100 rounded-lg p-3 sm:p-4 w-full h-full flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-indigo-600 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
        >
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <path d="M12 22.5v-10" />
          <path d="m17 2.1-5 3-5-3" />
        </svg>
      </div>
    ),
  },
  {
    icon: '3dPrinting',
    title: '3D Printing',
    description:
      'Custom 3D printing solutions with advanced technology and materials for your specific needs.',
    buttonText: 'Get a Quote',
    buttonHref: '/printing',
    serviceIcon: (
      <div className="bg-violet-100 rounded-lg p-3 sm:p-4 w-full h-full flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-violet-600 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
        >
          <path d="M6 9h12v9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9Z" />
          <path d="M6 9V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" />
          <path d="M5 11h14" />
        </svg>
      </div>
    ),
  },
];

export default function WhatWeDo() {
  return (
    <SectionContainer>
      {/* heading */}
      <Heading
        pillText="Our Services"
        title="What"
        titleBold="We Do"
        description="Comprehensive 3D printing solutions for all your design and
              manufacturing needs"
        className="items-center text-center"
      />

      {/* Services Cards - Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 lg:w-3/4 mx-auto">
        {services.map((service, index) => (
          <Card
            key={index}
            className="border border-zinc-100 rounded-3xl overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
          >
            <CardContent className="p-4 sm:p-6 flex flex-col items-center text-center h-full">
              {/* Icon/Image Container */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-4 sm:mb-6 flex items-center justify-center">
                {service.serviceIcon}
              </div>

              {/* Service Title*/}
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                {service.title}
              </h3>

              {/* Service Description  */}
              <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 flex-grow">
                {service.description}
              </p>

              <LinkedButton
                icon={<MoveRight strokeWidth={3} />}
                text={service.buttonText}
                link={service.buttonHref}
                className="mt-6 w-fit px-5 py-4"
                variant="outlined"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
