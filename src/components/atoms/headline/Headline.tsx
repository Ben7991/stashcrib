import { cn } from 'cn';

type HeadlineProps = {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  children: React.ReactNode;
};

export function Headline({
  className,
  tag,
  children,
}: HeadlineProps): React.JSX.Element {
  switch (tag) {
    case 'h1':
      return <h1 className={cn('text-[2em]', className)}>{children}</h1>;
    case 'h2':
      return <h2 className={cn('text-[1.75em]', className)}>{children}</h2>;
    case 'h3':
      return <h3 className={cn('text-2xl', className)}>{children}</h3>;
    case 'h4':
      return <h4 className={cn('text-[1.25em]', className)}>{children}</h4>;
    case 'h5':
      return <h5 className={cn(className)}>{children}</h5>;
    case 'h6':
      return <h6 className={cn('text-[0.75em]', className)}>{children}</h6>;
    default:
      throw new Error('Select from the provided tag options');
  }
}
