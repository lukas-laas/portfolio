import { Article, Header1, Header2, Header3, Paragraph, Section } from "./ui";
import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { GitHub } from "@mui/icons-material";
import Link from "next/link";
export function Summary() {
  return (
    <div className="md:h-full">
      <Section>
        <Article>
          <header>
            <Image
              src={"https://picsum.photos/536/354"}
              width={400}
              height={400}
              alt="Profile picture"
              className="float-right size-48 rounded-full hidden md:flex shadow-md"
            />
            <Header1>Lukas Låås</Header1>
          </header>
          <Header2>Fullstack javascript developer</Header2>
          <div className="flex flex-col gap-4 pt-4 pb-12">
            <Link href={"#"} className="flex gap-1 text-xl items-center">
              <GitHub />
              GitHub
            </Link>
            <Link href={"#"} className="flex gap-1 text-xl items-center">
              <LinkedInIcon />
              LinkedIn
            </Link>
          </div>
          <Header3>~ whoami</Header3>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            explicabo ullam? Cumque amet dolorem aspernatur. Libero soluta aut
            laboriosam explicabo odio sint aliquid nesciunt debitis nam non sunt
            expedita dolorem molestiae quae ullam dicta perspiciatis rem nostrum
            animi molestias doloribus, placeat ex! Ducimus iste vel eveniet
            vitae distinctio adipisci, illo quisquam, pariatur odio placeat
            libero porro, sapiente nulla fugit alias.
          </Paragraph>
        </Article>
        <Article>
          <Header3>Languages & Frameworks</Header3>
          <div>
            <p>NextJS/React</p>
            <p>ExpressJS</p>
            <p>PostgreSQL</p>
            <p>Javascript/Typescript</p>
            <p>HTML/CSS</p>
            <p>Python</p>
            <p>C#</p>
          </div>
          <div>
            <p>Swedish native</p>
            <p>English fuent</p>
          </div>
        </Article>
      </Section>
    </div>
  );
}
