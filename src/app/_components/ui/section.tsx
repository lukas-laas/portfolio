import { ReactNode } from "react";

export function Section({ children }: { children: ReactNode }) {
  return (
    <section className="p-4 w-full max-w-xl md:p-8 md:min-h-full border-dark ">
      {children}
    </section>
  );
}

export function SummarySection({ children }: { children: ReactNode }) {
  return (
    <section className="p-4 shadow-md w-full max-w-xl md:p-8 md:min-h-full bg-dark text-light">
      {children}
    </section>
  );
}
