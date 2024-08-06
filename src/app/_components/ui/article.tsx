import { ReactNode } from "react";

export function Article({ children }: { children: ReactNode }) {
  return <article className="p-2">{children}</article>;
}
