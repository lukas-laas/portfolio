import { ReactNode } from "react";

export function Section({ children }: { children: ReactNode }) {
  return (
    <section className="p-4 shadow-md w-full md:mx-4 max-w-xl md:p-8 md:min-h-full">
      {children}
    </section>
  );
}
