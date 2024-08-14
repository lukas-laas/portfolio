import { ReactNode } from "react";

import { Modak } from "next/font/google";
const modak = Modak({ weight: "400", subsets: ["devanagari"] });

export function Header1({ children }: { children: ReactNode }) {
  return (
    <h1 className={`${modak.className} text-4xl text-slate-950 pt-4 pb-2`}>
      {children}
    </h1>
  );
}

export function Header2({ children }: { children: ReactNode }) {
  return (
    <h2
      className="text-2xl text-slate-900 pt-2 pb-1"
      style={{ color: "#2d2d2d" }}
    >
      {children}
    </h2>
  );
}

export function Header3({ children }: { children: ReactNode }) {
  return (
    <h3
      className="text-xl text-slate-700 pt-1 pb-0.5"
      style={{ color: "#2d2d2d" }}
    >
      {children}
    </h3>
  );
}

export function Paragraph({ children }: { children: ReactNode }) {
  return (
    <p
      className="text-md text-slate-900 py-2  pt-1"
      style={{ color: "#2d2d2d" }}
    >
      {children}
    </p>
  );
}

export function List({ children }: { children: ReactNode }) {
  return (
    <ul className="px-6 py-2 list-disc" style={{ color: "#2d2d2d" }}>
      {children}
    </ul>
  );
}

export function ListItem({ children }: { children: ReactNode }) {
  return <li style={{ color: "#2d2d2d" }}>{children}</li>;
}
