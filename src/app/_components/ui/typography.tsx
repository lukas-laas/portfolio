import { ReactNode } from "react";

export function Header1({ children }: { children: ReactNode }) {
  return <h1 className="text-2xl text-slate-950">{children}</h1>;
}

export function Header2({ children }: { children: ReactNode }) {
  return <h2 className="text-xl text-slate-900">{children}</h2>;
}

export function Header3({ children }: { children: ReactNode }) {
  return <h3 className="text-lg text-slate-700">{children}</h3>;
}

export function Paragraph({ children }: { children: ReactNode }) {
  return <p className="text-md text-slate-900">{children}</p>;
}
