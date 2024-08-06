import { Details } from "./_components/details";
import { Summary } from "./_components/summary";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Summary />
      <Details />
    </main>
  );
}
