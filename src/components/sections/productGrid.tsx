'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ProductCard } from '../product/product-card';
import Heading from '../common/heading';
import SectionContainer from '../common/sectionContainer';
import LinkedButton from '../common/linkedButton';
import { ArrowRight } from 'lucide-react';

// Sample product data - replace with your actual data
const products = [
  {
    id: '1',
    name: 'Geometric Desk Organizer',
    description: 'Stylish 3D printed desk organizer with multiple compartments',
    price: 29.99,
    imageUrl:
      'https://images.unsplash.com/photo-1668405841055-f25e740e4a14?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Home Office',
    rating: 4.5,
  },
  {
    id: '2',
    name: 'Mechanical Phone Stand',
    description: 'Articulated phone holder with adjustable viewing angles',
    price: 19.99,
    imageUrl:
      'https://images.unsplash.com/photo-1616445101920-716d2b3746c0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Accessories',
    rating: 4.8,
  },
  {
    id: '3',
    name: 'Custom Plant Pot',
    description: 'Decorative planter with unique geometric patterns',
    price: 24.99,
    imageUrl:
      'https://images.unsplash.com/photo-1717658590250-966be1ac8e05?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Home Decor',
    rating: 4.2,
  },
  {
    id: '4',
    name: 'Gaming Headset Stand',
    description: 'Sleek stand to display and organize your gaming headphones',
    price: 34.99,
    imageUrl:
      'https://images.unsplash.com/photo-1606758007150-614eed0d8288?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Gaming',
    rating: 4.7,
  },
  {
    id: '5',
    name: 'Architectural Model Kit',
    description: 'DIY miniature building set for architecture enthusiasts',
    price: 49.99,
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1676752202786-c95befc3ac4c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Education',
    rating: 4.9,
  },
  {
    id: '6',
    name: 'Customizable Lamp Shade',
    description: 'Modern lamp shade with intricate patterns and warm glow',
    price: 39.99,
    imageUrl:
      'https://images.unsplash.com/photo-1677892917297-2de976c9ea11?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Lighting',
    rating: 4.6,
  },
  {
    id: '7',
    name: 'Tabletop Game Pieces',
    description: 'High-detail miniature figures for tabletop gaming',
    price: 27.99,
    imageUrl:
      'https://images.unsplash.com/photo-1563176874-a7d9a0085d5e?q=80&w=1719&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Games',
    rating: 4.8,
  },
  {
    id: '8',
    name: 'Wall Art Panels',
    description:
      'Modular 3D printed wall decoration with customizable patterns',
    price: 59.99,
    imageUrl:
      'https://images.unsplash.com/photo-1730267252256-67bee55353e8?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Wall Decor',
    rating: 4.4,
  },
];

export default function ProductGrid() {
  return (
    <SectionContainer>
      {/* heading */}
      <Heading
        pillText="Featured Products"
        title="Discover Our"
        titleBold="Premium Collection"
        description="Explore our selection of high-quality 3D printed products designed
              for functionality and aesthetics."
        className="items-center text-center"
      />

      {/* Product Grid - 4x2 layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* View More Button */}

      <LinkedButton
        text="View All Products"
        link="/products"
        className="  w-fit mt-4 mx-auto"
        variant="outlined"
        icon={<ArrowRight strokeWidth={3} />}
      />
    </SectionContainer>
  );
}
