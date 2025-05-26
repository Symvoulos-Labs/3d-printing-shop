'use client';

import Image from 'next/image';
import Heading from '../common/heading';
import SectionContainer from '../common/sectionContainer';
import LinkedButton from '../common/linkedButton';
import { Check, Users, Award, Clock, MoveRight } from 'lucide-react';

export default function AboutIntro() {
  return (
    <SectionContainer contentClassName="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      {/* Image Column */}
      <div className="relative h-[500px] order-1 lg:order-0">
        <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent z-10"></div>
          <Image
            src="https://images.unsplash.com/photo-1612888262725-6b300edf916c?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="3D Printing Technology"
            fill
            className="object-cover"
          />

          {/* Floating badge */}
          <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg z-20">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">5+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
      {/* Content Column */}
      <div className="flex flex-col space-y-6 order-0 lg:order-1">
        <Heading
          pillText="About Our Company"
          title="Innovating Through"
          titleBold="3D Technology"
          className="items-start text-left"
        />

        <p className="text-muted-foreground text-lg leading-relaxed">
          We are pioneers in the 3D printing industry, dedicated to transforming
          imagination into reality. Since our founding, we have been at the
          forefront of additive manufacturing, helping businesses and
          individuals bring their most ambitious projects to life.
        </p>

        <p className="text-muted-foreground text-lg leading-relaxed">
          Our team combines cutting-edge technology with years of expertise to
          deliver unparalleled quality and precision. From rapid prototyping to
          large-scale production, we make the impossible possible through the
          power of 3D printing.
        </p>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
          <div className="flex items-center gap-3 bg-blue-50 px-4 py-3 rounded-xl">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <Users className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <div className="font-semibold text-gray-900">Expert Team</div>
              <div className="text-sm text-gray-600">
                Professional engineers
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-green-50 px-4 py-3 rounded-xl">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              <Award className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <div className="font-semibold text-gray-900">Quality First</div>
              <div className="text-sm text-gray-600">Premium standards</div>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-purple-50 px-4 py-3 rounded-xl">
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
              <Clock className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <div className="font-semibold text-gray-900">Fast Delivery</div>
              <div className="text-sm text-gray-600">Quick turnaround</div>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-orange-50 px-4 py-3 rounded-xl">
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
              <Check className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <div className="font-semibold text-gray-900">Guaranteed</div>{' '}
              <div className="text-sm text-gray-600">100% satisfaction</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="pt-6">
          <LinkedButton
            icon={<MoveRight strokeWidth={3} />}
            text="Explore Our Services"
            link="/services/3d-modeling"
            className="w-fit"
          />
        </div>
      </div>
    </SectionContainer>
  );
}
