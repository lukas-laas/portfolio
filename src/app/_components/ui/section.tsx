import { ReactNode } from "react";

export function Section({ children, className, ...props }: { children: ReactNode; className?: string } & React.HTMLAttributes<HTMLElement>) {
  return (
    <section className={`p-4 w-full max-w-xl md:p-8 md:min-h-full border-text ${className || ''}`} {...props}>
      {children}
    </section>
  );
}

export function SummarySection({ children }: { children: ReactNode }) {
  return (
    <section className="p-4 shadow-md w-full max-w-xl md:p-8 md:min-h-full bg-bg2 text-text">
      {children}
    </section>
  );
}
