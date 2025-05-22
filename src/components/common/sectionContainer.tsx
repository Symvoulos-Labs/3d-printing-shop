import { cn } from '@/lib/utils';
import React from 'react';

interface SectionContainerProps {
  children: React.ReactNode;
  sectionClassName?: string;
  containerClassName?: string;
  contentClassName?: string;
}

export default function SectionContainer({
  children,
  sectionClassName,
  containerClassName,
  contentClassName,
}: SectionContainerProps) {
  return (
    <section
      className={cn(
        'w-full py-12 md:py-24 lg:py-32 bg-background',
        sectionClassName
      )}
    >
      <div className={cn('container px-4 md:px-6 mx-auto', containerClassName)}>
        <div className={cn('flex flex-col gap-6 md:gap-12', contentClassName)}>
          {children}
        </div>
      </div>
    </section>
  );
}
