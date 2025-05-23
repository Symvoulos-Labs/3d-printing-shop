'use client';

import { Input } from '@/components/ui/input';

import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

type SearchInputProps = {
  placeholder?: string;
  value?: string;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

export default function SearchInput({
  placeholder = 'Search products...',
  onSearch,
  className = 'w-full',
  value,
}: SearchInputProps) {
  return (
    <div className={cn('relative  max-w-sm', className)}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        type="text"
        value={value}
        onChange={onSearch}
        placeholder={placeholder}
        className="pl-9"
      />
    </div>
  );
}
