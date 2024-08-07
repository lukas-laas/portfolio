import { BrickDashboard } from "./projects/brick-dashboard";
import { Article, Divider, Gallery, Header2, Header3, Paragraph } from "./ui";

export function Projects() {
  return (
    <>
      <header>
        <Header2>Projects</Header2>
        <Divider />
      </header>
      <BrickDashboard />
    </>
  );
}
