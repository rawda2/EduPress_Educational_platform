import { cn } from "@/lib/utils";

export default function SectionHeading({ children, className }) {
  return (
    <h2
      className={cn(
        "mb-14 text-3xl sm:text-4xl font-bold text-center",
        className
      )}
    >
      {children}
    </h2>
  );
}
