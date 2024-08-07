import {
  Article,
  Header1,
  Header2,
  Header3,
  List,
  ListItem,
  Paragraph,
  Section,
} from "./ui";
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
              src={"/TA01UCHBN-U070E6F3M0S-0d674497180f-512.jpeg"}
              width={300}
              height={300}
              alt="Profile picture"
              className="float-right size-48 rounded-full hidden md:flex shadow-md"
            />
            <Header1>Lukas Låås</Header1>
          </header>
          <Header2>Fullstack javascript developer</Header2>
          <div className="flex flex-col gap-4 py-12">
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
            I am a Fullstack JS programmer with a heart for music. I've been
            programming since middleschool and have studied it actively for
            about 3 years. Currently searching for a job and spending of my
            freetime on music and projects.
          </Paragraph>
        </Article>
        <Article>
          <Header3>Languages & Frameworks</Header3>
          <List>
            <ListItem>Javascript/Typescript</ListItem>
            <ListItem>NextJS/React</ListItem>
            <ListItem>HTML/CSS</ListItem>
            <ListItem>ExpressJS</ListItem>
            <ListItem>Drizzle/PostgreSQL</ListItem>
            <ListItem>Python</ListItem>
            <ListItem>C#</ListItem>
          </List>
          <List>
            <ListItem>Swedish native</ListItem>
            <ListItem>English fuent</ListItem>
          </List>
        </Article>
      </Section>
    </div>
  );
}
