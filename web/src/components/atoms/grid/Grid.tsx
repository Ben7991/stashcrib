import { cn } from "cn";

import type { ChildrenOnly } from "@/lib/utils/types.utils";

type ReusableProps = {
  className?: string;
} & ChildrenOnly;

export function Grid({ children }: ChildrenOnly): React.ReactNode {
  return children;
}

function Container({ className, children }: ReusableProps): React.JSX.Element {
  return (
    <div
      className={cn(
        "w-full",
        "px-4",
        "lg:w-[90%]",
        "xl:w-300",
        "lg:mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
}

function Row({ className, children }: ReusableProps): React.JSX.Element {
  return (
    <div className={cn("w-full", "flex", "flex-wrap", className)}>
      {children}
    </div>
  );
}

function Col({ className, children }: ReusableProps): React.JSX.Element {
  return <div className={cn(className)}>{children}</div>;
}

Grid.Container = Container;
Grid.Row = Row;
Grid.Col = Col;
