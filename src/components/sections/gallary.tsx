'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Heading from '../common/heading';
import SectionContainer from '../common/sectionContainer';
import { ArrowRight } from 'lucide-react';
import LinkedButton from '../common/linkedButton';

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

interface GalleryProps {
  images: {
    id: string;
    src: string;
    alt: string;
  }[];
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <SectionContainer>
      {/* Heading */}
      <Heading
        pillText="Gallery"
        title="Our 3D Printing"
        titleBold="Gallery"
        description="Explore our showcase of finished 3D printing projects and creative
            designs."
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

      {/* View More Button */}

      <LinkedButton
        text="View More"
        icon={<ArrowRight strokeWidth={3} />}
        className="mt-4 w-fit mx-auto"
        link="/gallery"
      />
    </SectionContainer>
  );
};

export default Gallery;

// Show all the images from the backend
// Show the images in a grid layout
// Show the images in a responsive layout
// Show the images in a lightbox when clicked
// Show the images in a carousel when clicked

// TODO : There should be route endpoint to Upload images for the gallery
// TODO : There should be route endpoint to Delete images from the gallery
// also need meta data for the images like title, description, etc

// only load 9 images from backend for home page if user want to see more images then show the gallery page
// TODO : There should be route endpoint to get all the images from the gallery

// Gallery should have pinned on home page feature when adding new image
