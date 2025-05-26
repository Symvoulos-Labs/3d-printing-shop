'use client';

import { Card, CardContent } from '@/components/ui/card';
import Heading from '../common/heading';
import SectionContainer from '../common/sectionContainer';
import { Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    bio: 'Visionary leader with 10+ years in 3D printing technology.',
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    image:
      'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    bio: 'Technical expert driving innovation in additive manufacturing.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Design',
    image:
      'https://images.unsplash.com/photo-1685048241209-d1aeadaf2fc6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    bio: 'Creative director bringing designs to life with precision.',
  },
  {
    name: 'David Kim',
    role: 'Operations Manager',
    image:
      'https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    bio: 'Ensuring seamless production and quality control processes.',
  },
];

export default function TeamSection() {
  return (
    <SectionContainer>
      <Heading
        pillText="Our Team"
        title="Meet the People Behind"
        titleBold="Our Success"
        description="Our talented team of professionals is dedicated to bringing your 3D printing visions to life."
        className="items-center text-center"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {teamMembers.map((member, index) => (
          <Card
            key={index}
            className="border border-zinc-100 rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-300 group"
          >
            <CardContent className="p-6 text-center">
              <div className="relative mb-6 w-24 h-24 mx-auto">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className=" mx-auto rounded-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h3 className="text-xl font-bold mb-2 text-gray-900">
                {member.name}
              </h3>

              <p className="text-blue-600 font-medium mb-3">{member.role}</p>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {member.bio}
              </p>

              <div className="flex justify-center gap-3">
                <button className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                  <Linkedin className="w-4 h-4 text-blue-600" />
                </button>
                <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <Mail className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
