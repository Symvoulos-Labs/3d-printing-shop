'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import Pill from '../common/pill';
import LinkedButton from '../common/linkedButton';
import { Eye, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
    rating: number;
  };
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <Card
      className={cn(
        'group overflow-hidden rounded-3xl border transition-all hover:shadow-lg pt-0 pb-5',
        className
      )}
    >
      {/* Product Image with Category Badge */}
      <div className="relative h-52 overflow-hidden -mb-5">
        <Pill
          text={product.category}
          className="absolute top-3 left-3 inline-block text-xs shadow-sm z-10"
        />
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover transition-transform group-hover:scale-110 duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      <div className="flex flex-col justify-between flex-grow ">
        <CardContent className="p-5">
          {/* Product Name and Rating */}
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-medium mb-2 line-clamp-2">
              {product.name}
            </h3>
            <div className="flex items-center bg-gray-100 rounded-full px-3 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-yellow-500"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span className="text-sm font-semibold ml-1">
                {product.rating}
              </span>
            </div>
          </div>

          {/* Product Description */}
          <p className="text-sm text-muted-foreground mb-4">
            {product.description}
          </p>
        </CardContent>

        <CardFooter className="flex flex-col items-start justify-between gap-4">
          {/* Product Price */}
          <div className="text-3xl font-medium text-gray-800 ">
            LKR {product.price.toFixed(2)}
          </div>

          <div className="flex flex-row gap-3 justify-between items-center">
            <LinkedButton
              text="View Details"
              link={`/products/${product.id}`}
              className="px-3 py-0 text-xs w-full"
              icon={<Eye strokeWidth={2} />}
            />
            <Button variant={'outline'}>
              <ShoppingCart strokeWidth={2} />
            </Button>
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}
