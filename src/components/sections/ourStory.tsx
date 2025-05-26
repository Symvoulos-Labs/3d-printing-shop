'use client';

import Image from 'next/image';
import Heading from '../common/heading';
import SectionContainer from '../common/sectionContainer';
import { Card, CardContent } from '@/components/ui/card';

const milestones = [
  {
    year: '2019',
    title: 'Company Founded',
    description:
      'Started with a vision to democratize 3D printing technology and make it accessible to everyone.',
  },
  {
    year: '2020',
    title: 'First Major Client',
    description:
      'Successfully delivered our first large-scale project, establishing our reputation for quality.',
  },
  {
    year: '2022',
    title: 'Facility Expansion',
    description:
      'Expanded our production facility to accommodate growing demand and new technologies.',
  },
  {
    year: '2024',
    title: 'Innovation Hub',
    description:
      'Launched our innovation hub, focusing on cutting-edge research and development.',
  },
];

export default function OurStory() {
  return (
    <SectionContainer sectionClassName="bg-gray-50">
      <Heading
        pillText="Our Journey"
        title="The Story Behind"
        titleBold="Our Success"
        description="From humble beginnings to becoming a leader in 3D printing technology, discover how we've grown and evolved over the years."
        className="items-center text-center"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
        {/* Timeline */}
        <div className="space-y-1">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="flex items-center gap-6 hover:bg-white transition-all duration-500 py-4 px-5 hover:rounded-2xl hover:shadow-lg"
            >
              {/* Year indicator */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {milestone.year}
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {milestone.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="relative">
          <Card className="border border-zinc-100 rounded-3xl overflow-hidden shadow-lg py-0">
            <CardContent className="p-0">
              <div className="relative h-[500px]">
                <Image
                  src="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=1000&auto=format&fit=crop"
                  alt="Our Journey"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </CardContent>
          </Card>

          {/* Achievement badge */}
          <div className="absolute -bottom-6 -right-6 bg-blue-500 text-white px-6 py-4 rounded-2xl shadow-lg">
            <div className="text-center">
              <div className="text-2xl font-bold">1000+</div>
              <div className="text-sm opacity-90">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
