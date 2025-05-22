import Link from 'next/link';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

interface LinkedButtonProps {
  icon?: React.ReactNode;
  text?: string;
  size?: 'sm' | 'lg' | 'icon' | 'default';
  link?: string;
  variant?: 'filled' | 'outlined';
  className?: string;
}

export default function LinkedButton({
  icon,
  text,
  size = 'lg',
  link = '#',
  variant = 'filled',
  className,
}: LinkedButtonProps) {
  const variantClasses = {
    filled:
      'bg-gradient-to-r from-gray-800 to-gray-700 hover:from-black hover:to-gray-900 text-white shadow-lg hover:shadow-gray-300',
    outlined:
      'border-1 border-gray-800 text-gray-800 bg-gray-50 hover:shadow-md hover:bg-gray-200 hover:border-gray-600',
  };

  // Icon container classes based on variant
  const iconContainerClasses = {
    filled: 'bg-gray-700 rounded-full p-1.5',
    outlined: 'text-gray-800 p-1.5',
  };

  return (
    <Button
      className={cn(
        'rounded-xl text-sm font-medium px-8 py-7 transition-all duration-300',
        variantClasses[variant],
        className
      )}
      size={size}
      asChild
    >
      <Link href={link} className="flex items-center gap-2 hover:gap-4">
        {text}
        {icon && (
          <div className={cn('ml-1', iconContainerClasses[variant])}>
            {icon}
          </div>
        )}
      </Link>
    </Button>
  );
}
