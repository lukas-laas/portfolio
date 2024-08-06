import { Details } from "./_components/details";
import { Summary } from "./_components/summary";

export default function Home() {
  return (
    <main className="flex max-h-full flex-col justify-center gap-4 md:flex-row h-full items-center">
      <Summary />
      <Details />
    </main>
  );
}
