'use client';

import { Card, CardContent } from '@/components/ui/card';
import SectionContainer from '../common/sectionContainer';
import { Users, Package, Clock, Trophy } from 'lucide-react';

const stats = [
  {
    icon: <Package className="w-10 h-10 text-blue-600" />,
    number: '5,000+',
    label: 'Projects Completed',
    description: 'Successfully delivered projects',
    bgColor: 'bg-blue-100',
  },
  {
    icon: <Users className="w-10 h-10 text-green-600" />,
    number: '500+',
    label: 'Happy Clients',
    description: 'Satisfied customers worldwide',
    bgColor: 'bg-green-100',
  },
  {
    icon: <Clock className="w-10 h-10 text-purple-600" />,
    number: '24/7',
    label: 'Production Facility',
    description: 'Continuous operation',
    bgColor: 'bg-purple-100',
  },
  {
    icon: <Trophy className="w-10 h-10 text-orange-600" />,
    number: '99%',
    label: 'Client Satisfaction',
    description: 'Quality guarantee rate',
    bgColor: 'bg-orange-100',
  },
];

export default function CompanyStats() {
  return (
    <SectionContainer sectionClassName="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our Achievements in Numbers
        </h2>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          These numbers reflect our commitment to excellence and the trust our
          clients place in us.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <Card
            key={index}
            className="border-0 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
          >
            <CardContent className="p-8 text-center">
              <div
                className={`w-20 h-20 mx-auto mb-6 ${stat.bgColor} rounded-full flex items-center justify-center`}
              >
                {stat.icon}
              </div>

              <div className="text-4xl font-bold mb-2 text-white">
                {stat.number}
              </div>

              <h3 className="text-xl font-semibold mb-2 text-white">
                {stat.label}
              </h3>

              <p className="text-white/80 text-sm">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
