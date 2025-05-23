'use client';

import Heading from '../common/heading';
import SectionContainer from '../common/sectionContainer';

const steps = [
  {
    number: 1,
    title: 'Send files for QUOTATION',
    description: 'Send us your 3D model files and receive the manual quotation',
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
    title: 'Confirm & PAYMENT',
    description: 'Confirm the quotation received and make the payment',
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
    number: 3,
    title: 'UNBOX & Feedback',
    description:
      'Get the 3D printed parts delivered to your door-step or pick-up from the store',
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

export default function PaymentSteps() {
  return (
    <SectionContainer>
      {/* heading */}
      <Heading
        pillText="Main steps"
        title="Three easy steps to get your"
        titleBold="models 3D Printed"
        description="Our streamlined process makes getting your 3D models printed
              simple and efficient"
        className="items-center text-center"
      />

      {/* Steps Process - Improved structure for better visual alignment */}
      <div className="mt-16 relative">
        {/* Process steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 relative">
          {/* Arrows between steps */}
          <div className="hidden md:block absolute top-16 left-[33%] transform -translate-x-1/2">
            <svg
              width="50"
              height="20"
              viewBox="0 0 60 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 left-[50%]"
            >
              <path
                d="M59.0607 13.0607C59.6464 12.4749 59.6464 11.5251 59.0607 10.9393L49.5147 1.3934C48.9289 0.807611 47.9792 0.807611 47.3934 1.3934C46.8076 1.97919 46.8076 2.92893 47.3934 3.51472L55.8787 12L47.3934 20.4853C46.8076 21.0711 46.8076 22.0208 47.3934 22.6066C48.9792 23.1924 48.9289 23.1924 49.5147 22.6066L59.0607 13.0607ZM0 13.5H58V10.5H0V13.5Z"
                fill="#D1D5DB"
              />
            </svg>
          </div>

          <div className="hidden md:block absolute top-16 left-[66%] transform -translate-x-1/2">
            <svg
              width="50"
              height="20"
              viewBox="0 0 60 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 left-[50%]"
            >
              <path
                d="M59.0607 13.0607C59.6464 12.4749 59.6464 11.5251 59.0607 10.9393L49.5147 1.3934C48.9289 0.807611 47.9792 0.807611 47.3934 1.3934C46.8076 1.97919 46.8076 2.92893 47.3934 3.51472L55.8787 12L47.3934 20.4853C46.8076 21.0711 46.8076 22.0208 47.3934 22.6066C48.9792 23.1924 48.9289 23.1924 49.5147 22.6066L59.0607 13.0607ZM0 13.5H58V10.5H0V13.5Z"
                fill="#D1D5DB"
              />
            </svg>
          </div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center relative"
            >
              {/* Step Circle - Reduced size to match reference image */}
              <div className="relative mb-8">
                {/* Outer circle (light gray background) - Reduced size */}
                <div className="bg-gray-100 rounded-full w-32 h-32 flex items-center justify-center">
                  {/* Inner circle (blue background with icon) - Reduced size */}
                  <div className="bg-blue-500 rounded-full w-20 h-20 flex items-center justify-center">
                    {/* Smaller icon */}
                    <div className="scale-90">{step.icon}</div>
                  </div>
                </div>

                {/* Step number badge - Reduced size and repositioned */}
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
