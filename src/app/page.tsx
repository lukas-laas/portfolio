import { Details } from "./_components/details";
import { Summary } from "./_components/summary";

export default function Home() {
  return (
    <main className="flex max-h-full flex-col justify-center md:flex-row h-full items-center gap-4 bg-light">
      <Summary />
      <Details />
    </main>
  );
}
