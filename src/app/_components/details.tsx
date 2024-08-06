import { Education } from "./education";
import { Projects } from "./projects";
import { Section } from "./ui";
import { Work } from "./work";

export function Details() {
  return (
    <Section>
      <Projects />
      <Work />
      <Education />
    </Section>
  );
}
