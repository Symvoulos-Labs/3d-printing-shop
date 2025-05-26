'use client';

import { Card, CardContent } from '@/components/ui/card';
import Heading from '../common/heading';
import SectionContainer from '../common/sectionContainer';
import {
  Lightbulb,
  Heart,
  Target,
  Recycle,
  Handshake,
  Zap,
} from 'lucide-react';

const values = [
  {
    icon: <Lightbulb className="w-8 h-8 text-yellow-600" />,
    title: 'Innovation',
    description:
      "We constantly push the boundaries of what's possible with 3D printing technology.",
    bgColor: 'bg-yellow-100',
  },
  {
    icon: <Heart className="w-8 h-8 text-red-600" />,
    title: 'Passion',
    description:
      'Our love for 3D printing drives everything we do, from design to delivery.',
    bgColor: 'bg-red-100',
  },
  {
    icon: <Target className="w-8 h-8 text-blue-600" />,
    title: 'Precision',
    description:
      'Every project is executed with meticulous attention to detail and accuracy.',
    bgColor: 'bg-blue-100',
  },
  {
    icon: <Recycle className="w-8 h-8 text-green-600" />,
    title: 'Sustainability',
    description:
      "We're committed to eco-friendly practices and sustainable manufacturing.",
    bgColor: 'bg-green-100',
  },
  {
    icon: <Handshake className="w-8 h-8 text-purple-600" />,
    title: 'Partnership',
    description:
      'We build lasting relationships with our clients based on trust and collaboration.',
    bgColor: 'bg-purple-100',
  },
  {
    icon: <Zap className="w-8 h-8 text-orange-600" />,
    title: 'Speed',
    description:
      'Fast turnaround times without compromising on quality or precision.',
    bgColor: 'bg-orange-100',
  },
];

export default function CoreValues() {
  return (
    <SectionContainer>
      <Heading
        pillText="Our Values"
        title="What Drives"
        titleBold="Our Success"
        description="These core principles guide every decision we make and every project we undertake."
        className="items-center text-center"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 lg:w-3/4 mx-auto">
        {values.map((value, index) => (
          <Card
            key={index}
            className="border border-zinc-100 rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-300 group"
          >
            <CardContent className="p-8 text-center">
              <div
                className={`w-20 h-20 mx-auto mb-6 ${value.bgColor} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
              >
                {value.icon}
              </div>

              <h3 className="text-xl font-bold mb-4 text-gray-900">
                {value.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
