import { cn } from '@/lib/utils';
import { ProductCard } from '../product/product-card';

interface ProductGrifProps {
  products: {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
    rating: number;
  }[];
  className?: string;
}

export default function ProductGrid({ products, className }: ProductGrifProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
        className
      )}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
