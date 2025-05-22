'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import Heading from '../common/heading';
import SectionContainer from '../common/sectionContainer';
import { Check, MoveRight } from 'lucide-react';
import LinkedButton from '../common/linkedButton';

export default function AboutUs() {
  return (
    <SectionContainer contentClassName="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      {/* Image Column */}
      <div className="relative h-[400px] lg:h-[500px] order-2 lg:order-1">
        {/* Main image with modern card-like styling */}
        <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent z-10"></div>
          <Image
            src="https://images.unsplash.com/photo-1612888262725-6b300edf916c?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="3D Printing Facility"
            fill
            className="object-cover"
          />

          {/* Modern floating badge */}
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg z-20 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span className="text-sm font-medium">Active Facility</span>
          </div>
        </div>
      </div>

      {/* Content Column - Modernized with better typography and spacing */}
      <div className="flex flex-col space-y-6 order-1 lg:order-2">
        {/* Heading */}
        <Heading
          pillText="About Us"
          title="Bringing Your Ideas to"
          titleBold="Life"
          className="items-start"
        />

        <p className="text-muted-foreground md:text-lg/relaxed">
          We are a team of passionate innovators dedicated to transforming ideas
          into tangible reality through advanced 3D printing technology. Our
          mission is to democratize custom manufacturing by providing
          accessible, high-quality 3D printing services.
        </p>
        <p className="text-muted-foreground md:text-lg/relaxed">
          With state-of-the-art equipment and expert technicians, we deliver
          precision parts and prototypes with quick turnaround times. Whether
          you're an entrepreneur, designer, or established business, we're here
          to help bring your concepts to life.
        </p>

        {/* Modern feature list with enhanced styling */}
        <div className="flex flex-wrap gap-4 pt-4">
          <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
              <Check
                width={14}
                height={14}
                className="text-blue-600"
                strokeWidth={3}
              />
            </div>
            <span className="text-sm font-medium">Quality Guaranteed</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
              <Check
                width={14}
                height={14}
                className="text-blue-600"
                strokeWidth={3}
              />
            </div>
            <span className="text-sm font-medium">Sustainable Practices</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
              <Check
                width={14}
                height={14}
                className="text-blue-600"
                strokeWidth={3}
              />
            </div>
            <span className="text-sm font-medium">Expert Support</span>
          </div>
        </div>

        {/* Modern CTA button  */}

        <LinkedButton
          icon={<MoveRight strokeWidth={3} />}
          text="Explore Our Services"
          link="/about"
          className="mt-6 w-fit"
        />
      </div>
    </SectionContainer>
  );
}
