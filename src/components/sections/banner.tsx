'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BannerProps {
  title: string;
  breadcrumbs?: BreadcrumbItem[];
  image?: string;
  alt?: string;
  className?: string;
}

export default function Banner({
  title,
  breadcrumbs = [],
  image = '/banner-image.jpg',
  alt = 'Banner image',
  className,
}: BannerProps) {
  return (
    <section
      className={cn(
        'w-full py-12 bg-gray-100 dark:bg-slate-900/20 relative overflow-hidden',
        className
      )}
    >
      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.015]"></div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2">
              {title}
            </h1>

            {breadcrumbs.length > 0 && (
              <nav aria-label="Breadcrumb" className="mt-2">
                <ol className="flex items-center space-x-1 text-sm text-muted-foreground">
                  {breadcrumbs.map((item, index) => (
                    <React.Fragment key={index}>
                      {index > 0 && <li className="px-1">/</li>}
                      <li>
                        {index === breadcrumbs.length - 1 ? (
                          <span className="font-medium text-foreground">
                            {item.label}
                          </span>
                        ) : (
                          <Link
                            href={item.href}
                            className="hover:text-primary transition-colors"
                          >
                            {item.label}
                          </Link>
                        )}
                      </li>
                    </React.Fragment>
                  ))}
                </ol>
              </nav>
            )}
          </div>

          {/* Image container */}
          <div className="w-full md:w-1/3 mt-8 md:mt-0">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md">
              <Image
                src={image}
                alt={alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
