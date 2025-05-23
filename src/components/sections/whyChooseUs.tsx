'use client';

import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

import Heading from '../common/heading';
import SectionContainer from '../common/sectionContainer';

const reasons = [
  {
    title: '24/7 Operational Print Facility',
    description:
      'Our advanced print farm runs non-stop, ensuring continuous production and timely project delivery without disruptions.',
  },
  {
    title: 'Eco-Friendly Production Standards',
    description:
      'We use solar-powered systems and sustainable practices to minimize waste and reduce environmental impact.',
  },
  {
    title: 'Years of Industry Expertise',
    description:
      'With over five years in 3D printing, our team brings deep knowledge and proven skill to every custom project.',
  },
  {
    title: 'Exceptional Quality and Accuracy',
    description:
      'Our printers are fine-tuned for precision, delivering consistently high-quality results with exact specifications.',
  },
  {
    title: 'Tailored Solutions for Every Client',
    description:
      'We offer customization options to match your unique needs, ensuring every model fits your vision and function.',
  },
  {
    title: 'Dependable and On-Time Delivery',
    description:
      'We stick to deadlines with efficient workflows that guarantee your parts arrive when you need them.',
  },
];

export default function WhyChooseUs() {
  return (
    <SectionContainer>
      {/* heading */}
      <Heading
        pillText="Advanced Manufacturing Solutions"
        title="Why Choose"
        titleBold="Our Expertise"
        description="Empowering Innovation with Precision, Sustainability, and
              Unmatched Expertise."
        className="items-center text-center"
      />

      {/* Two column layout with image for large screens */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-center mt-8 lg:w-3/4 mx-auto">
        {reasons.map((reason, index) => (
          <Card
            key={index}
            className={cn(
              'border border-zinc-100 rounded-3xl overflow-hiddenhover:shadow-sm transition-shadow duration-300 h-full'
            )}
          >
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-sm text-muted-foreground">
                {reason.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
