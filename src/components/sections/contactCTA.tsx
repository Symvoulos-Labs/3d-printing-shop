'use client';

import { Card, CardContent } from '@/components/ui/card';
import Heading from '../common/heading';
import SectionContainer from '../common/sectionContainer';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: <Phone className="w-6 h-6 text-blue-600" />,
    title: 'Phone',
    value: '+1 (555) 123-4567',
    subtitle: 'Mon-Fri 9AM-6PM',
  },
  {
    icon: <Mail className="w-6 h-6 text-green-600" />,
    title: 'Email',
    value: 'hello@3dprint.com',
    subtitle: '24/7 Support',
  },
  {
    icon: <MapPin className="w-6 h-6 text-purple-600" />,
    title: 'Location',
    value: '123 Innovation St',
    subtitle: 'Tech City, TC 12345',
  },
  {
    icon: <Clock className="w-6 h-6 text-orange-600" />,
    title: 'Business Hours',
    value: 'Mon-Fri: 9AM-6PM',
    subtitle: 'Sat: 10AM-4PM',
  },
];

export default function ContactCTA() {
  return (
    <SectionContainer>
      <div className="text-center">
        <Heading
          pillText="Get In Touch"
          title="Ready to Start Your"
          titleBold="3D Printing Journey?"
          description="We're here to help bring your ideas to life. Contact us today to discuss your project requirements and get a custom quote."
          className="items-center text-center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 mb-8">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="border border-zinc-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 bg-white"
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  {info.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-900 font-medium">{info.value}</p>
                <p className="text-sm text-gray-600 mt-1">{info.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
