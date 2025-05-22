import { cn } from '@/lib/utils';

export default function Pill({
  text,
  className,
}: {
  text?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'inline-block rounded-full bg-neutral-100 px-3 py-1 text-sm',
        className
      )}
    >
      {text}
    </div>
  );
}
