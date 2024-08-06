import { ReactNode } from "react";

export function Section({ children }: { children: ReactNode }) {
  return <section className="p-4 rounded shadow-md">{children}</section>;
}
