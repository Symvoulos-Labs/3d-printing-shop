'use client';

import Heading from '../common/heading';
import SectionContainer from '../common/sectionContainer';

const steps = [
  {
    number: 1,
    title: 'Upload 3D File or Sketch',
    description:
      'Upload your 3D model file or sketch with material preferences and project details',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
  },
  {
    number: 2,
    title: 'Review & Send Quote',
    description:
      'Our experts review your files and send you a detailed quotation within 24 hours',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" x2="8" y1="13" y2="13" />
        <line x1="16" x2="8" y1="17" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    number: 3,
    title: 'Payment',
    description:
      'Confirm the quotation and make secure payment to start production',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white"
      >
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <line x1="2" x2="22" y1="10" y2="10" />
      </svg>
    ),
  },
  {
    number: 4,
    title: 'Delivery',
    description:
      'Get your high-quality 3D printed models delivered to your doorstep',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white"
      >
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5" />
        <path d="M12 22V12" />
      </svg>
    ),
  },
];

export default function ModelingProcessSteps() {
  return (
    <SectionContainer>
      <Heading
        pillText="Our Process"
        title="Four easy steps to get your"
        titleBold="3D Models Printed"
        description="Our streamlined process makes getting your 3D models printed simple and efficient"
        className="items-center text-center"
      />

      {/* Steps Process */}
      <div className="mt-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-6 relative">
          {/* Connecting Lines for larger screens */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gray-200"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center relative"
            >
              {/* Step Circle */}
              <div className="relative mb-8">
                {/* Outer circle (light gray background) */}
                <div className="bg-gray-100 rounded-full w-32 h-32 flex items-center justify-center">
                  {/* Inner circle (blue background with icon) */}
                  <div className="bg-blue-500 rounded-full w-20 h-20 flex items-center justify-center">
                    <div className="scale-90">{step.icon}</div>
                  </div>
                </div>

                {/* Step number badge */}
                <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold rounded-full w-11 h-11 flex items-center justify-center border-2 border-white">
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-[8px]">Step</span>
                    <span className="text-xs">{step.number}</span>
                  </div>
                </div>
              </div>

              {/* Step Content */}
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
