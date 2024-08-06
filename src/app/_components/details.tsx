import { Education } from "./education";
import { Projects } from "./projects";
import { Section, Footer } from "./ui";
import { Work } from "./work";

export function Details() {
  return (
    <div className="md:float-right h-full max-w-full md:max-h-screen overflow-y-scroll">
      <Section>
        <Projects />
        <Work />
        <Education />
      </Section>
      {/* <Footer /> */}
    </div>
  );
}
