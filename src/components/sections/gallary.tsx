'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

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
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background flex flex-col items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our 3D Printing Gallery
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore our showcase of finished 3D printing projects and creative
            designs.
          </p>
        </div>
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
        <div className="flex justify-center mt-12">
          <a href="/gallery">
            <button className="bg-primary hover:bg-primary/90 text-white font-medium py-2 px-6 rounded-full flex items-center gap-2 transition-colors">
              View More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </section>
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
