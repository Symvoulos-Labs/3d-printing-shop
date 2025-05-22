import { cn } from '@/lib/utils';
import Pill from './pill';

export default function Heading({
  pillText,
  title,
  titleBold,
  description,
  className,
}: {
  pillText?: string;
  title: string;
  titleBold?: string;
  description?: string;
  className?: string;
}) {
  return (
    <div
      className={cn('flex flex-col gap-2 justify-center space-y-4', className)}
    >
      {pillText && <Pill text={pillText} />}
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        {title} <span className="text-blue-600">{titleBold}</span>
      </h2>
      {description && (
        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Empowering Innovation with Precision, Sustainability, and Unmatched
          Expertise.
        </p>
      )}
    </div>
  );
}
