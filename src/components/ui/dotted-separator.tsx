import { cn } from "@/lib/utils";

interface DottedSeparatorProps {
  className?: string;
}

export const DottedSeparator = ({ className }: DottedSeparatorProps) => {
  return (
    <hr
      className={cn(
        className,
        "w-full border-dotted border-t-3 border-neutral-300",
      )}
    />
  );
};
