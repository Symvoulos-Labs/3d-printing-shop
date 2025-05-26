'use client';

import Heading from '@/components/common/heading';
import SectionContainer from '@/components/common/sectionContainer';
import Banner from '@/components/sections/banner';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@radix-ui/react-dialog';
import Image from 'next/image';
import { useState } from 'react';

const breadcrumbs = [{ label: 'Home / Gallery', href: '/gallery' }];

const images = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1651876360196-a8c378bfca7f?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: '3D Printed Prototype',
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1635492491273-455af7728453?q=80&w=1860&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: '3D Printing Process',
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1655993810480-c15dccf9b3a0?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Finished 3D Print',
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: '3D Printing Technology',
  },
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1639628739781-98290977fa82?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: '3D Printed Prototype',
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1639628739781-98290977fa82?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: '3D Printing Process',
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1639628739781-98290977fa82?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Finished 3D Print',
  },
  {
    id: '4',
    src: 'https://plus.unsplash.com/premium_photo-1692655671821-e9c66a33817e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: '3D Printing Technology',
  },
  {
    id: '1',
    src: 'https://plus.unsplash.com/premium_photo-1692655671821-e9c66a33817e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: '3D Printed Prototype',
  },
  {
    id: '2',
    src: 'https://plus.unsplash.com/premium_photo-1692655671821-e9c66a33817e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: '3D Printing Process',
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1724204400833-19548ab66a91?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Finished 3D Print',
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1711330980173-f308124e153d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: '3D Printing Technology',
  },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      {/* Banner Section */}
      <Banner
        title="Gallery"
        breadcrumbs={breadcrumbs}
        image="https://images.unsplash.com/photo-1635241161466-541f065683ba?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Gallery Banner"
      />

      <SectionContainer>
        <Heading
          pillText="Portfolio"
          title="Precision 3D Printing"
          titleBold="Portfolio"
          description="Discover our collection of high-quality 3D printed prototypes, custom parts, and innovative designs."
          className="items-center text-center"
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8 md:mt-12">
          {images.map((img, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div
                  className="overflow-hidden rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => setSelectedImage(img.src)}
                >
                  <div className="relative aspect-square">
                    <Image
                      src={img.src}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl p-0 overflow-hidden ">
                {selectedImage && (
                  <Image
                    src={selectedImage}
                    alt="Preview"
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain m-0"
                  />
                )}
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Load More Button */}

        <Button className="mt-4 w-fit mx-auto">Load more</Button>
      </SectionContainer>
    </>
  );
}
