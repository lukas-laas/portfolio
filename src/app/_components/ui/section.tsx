import { ReactNode } from "react";

export function Section({ children }: { children: ReactNode }) {
  return (
    <section
      className="p-4 w-full max-w-xl md:p-8 md:min-h-full"
      style={{
        backgroundColor: "#ECE2D1",
        borderColor: "#2d2d2d",
      }}
    >
      {children}
    </section>
  );
}

export function SummarySection({ children }: { children: ReactNode }) {
  return (
    <section
      className="p-4 shadow-md w-full max-w-xl md:p-8 md:min-h-full"
      style={{ backgroundColor: "#2d2d2d" }}
    >
      {children}
    </section>
  );
}
