'use client';

import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Image from 'next/image';

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
  {
    title: 'Customer-Focused Collaboration',
    description:
      'We prioritize open communication, working closely with clients to ensure satisfaction at every stage.',
  },
  {
    title: 'Data Protection and Confidentiality',
    description:
      'Your designs and project data are fully protected under strict confidentiality and secure handling protocols.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col gap-6 md:gap-6">
          {/* Header with gradient text similar to hero */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-full bg-neutral-100 px-3 py-1 text-sm">
              Advanced Manufacturing Solutions
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why Choose <span className="text-blue-600">Our Expertise</span>
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Empowering Innovation with Precision, Sustainability, and
              Unmatched Expertise.
            </p>
          </div>

          {/* Two column layout with image for large screens */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.slice(0, 4).map((reason, index) => (
                <Card
                  key={index}
                  className={cn(
                    'border border-zinc-100 rounded-3xl overflow-hiddenhover:shadow-sm transition-shadow duration-300'
                  )}
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {reason.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* 3D model display similar to hero */}
            <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 to-blue-900 p-1 overflow-hidden h-[400px] flex items-center justify-center">
              <div className="absolute top-3 left-3 bg-green-100 text-green-700 rounded-full px-3 py-1 text-xs font-medium flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-4"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                Eco-friendly
              </div>
              <div className="absolute bottom-3 right-3 bg-white bg-opacity-80 text-slate-700 rounded-full px-3 py-1 text-xs font-medium flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-4"
                >
                  <path d="M12 22v-5" />
                  <path d="M9 7V2" />
                  <path d="M15 7V2" />
                  <path d="M6 13V8a3 3 0 0 1 6 0v5a3 3 0 0 0 6 0V8" />
                  <path d="M12 17a5 5 0 0 0 5-5" />
                </svg>
                3D Precision
              </div>
              <div className="relative w-4/5 h-4/5">
                {/* Replace with your own 3D model image */}
                <div className="w-full h-full rounded-lg bg-blue-800 bg-opacity-50 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="120"
                    height="120"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white opacity-50"
                  >
                    <path d="M18 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    <path d="M6 12v-2a6 6 0 0 1 12 0v2" />
                    <path d="M6 8v2a6 6 0 0 0 12 0V8" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom row of cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.slice(4).map((reason, index) => (
              <Card
                key={index}
                className={cn(
                  'border border-zinc-100 rounded-3xl overflow-hidden hover:shadow-sm transition-shadow duration-300'
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
        </div>
      </div>
    </section>
  );
}
