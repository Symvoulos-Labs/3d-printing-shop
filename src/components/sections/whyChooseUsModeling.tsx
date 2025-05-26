'use client';

import { Card, CardContent } from '@/components/ui/card';
import Heading from '../common/heading';
import SectionContainer from '../common/sectionContainer';

const reasons = [
  {
    title: 'Expert Design Team',
    description:
      'Our experienced designers and engineers bring years of expertise to every 3D modeling project.',
  },
  {
    title: 'Latest Software & Technology',
    description:
      'We use industry-standard CAD software and cutting-edge technology for precise modeling.',
  },
  {
    title: 'Fast Turnaround Time',
    description:
      'Quick quote delivery within 24 hours and efficient project completion timelines.',
  },
  {
    title: 'Multiple File Formats',
    description:
      'Support for various 3D file formats including STL, OBJ, PLY, 3MF, and AMF.',
  },
  {
    title: 'Quality Assurance',
    description:
      'Rigorous quality checks ensure every model meets your specifications and requirements.',
  },
  {
    title: 'Competitive Pricing',
    description:
      'Transparent pricing with no hidden costs and competitive rates for all project sizes.',
  },
];

export default function WhyChooseUsModeling() {
  return (
    <SectionContainer sectionClassName="bg-gray-50">
      <Heading
        pillText="Professional Service"
        title="Why Choose Our"
        titleBold="3D Modeling Service"
        description="Professional 3D modeling solutions with expert team, cutting-edge technology, and commitment to quality."
        className="items-center text-center"
      />

      {/* Reasons Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {reasons.map((reason, index) => (
          <Card
            key={index}
            className="border border-zinc-100 rounded-3xl overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white"
          >
            <CardContent className="p-6 text-center">
              {/* Icon placeholder - using index + 1 as number */}
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                {reason.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
