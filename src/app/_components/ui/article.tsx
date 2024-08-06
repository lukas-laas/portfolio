import { ReactNode } from "react";

export function Article({ children }: { children: ReactNode }) {
  return <article className="">{children}</article>;
}
