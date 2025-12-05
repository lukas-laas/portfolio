import { ReactNode } from "react";

import { Modak } from "next/font/google";
const modak = Modak({ weight: "400", subsets: ["devanagari"] });

export function Header1({ children }: { children: ReactNode }) {
  return <h1 className={`text-4xl pt-4 pb-2`}>{children}</h1>;
}

export function Header2({ children }: { children: ReactNode }) {
  return <h2 className="text-2xl pt-2 pb-1">{children}</h2>;
}

export function Header3({ children }: { children: ReactNode }) {
  return <h3 className="text-xl pt-1 pb-0.5">{children}</h3>;
}
export function Header4({ children }: { children: ReactNode }) {
  return <h3 className="text-l pt-1 pb-0.5">{children}</h3>;
}

export function Paragraph({ children }: { children: ReactNode }) {
  return <p className="text-md py-2  pt-1">{children}</p>;
}

export function List({ children }: { children: ReactNode }) {
  return <ul className="px-6 py-2 list-disc">{children}</ul>;
}

export function ListItem({ children }: { children: ReactNode }) {
  return <li>{children}</li>;
}
