import {
  Article,
  Header1,
  Header2,
  Header3,
  List,
  ListItem,
  Paragraph,
  SummarySection,
} from "./ui";
import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { GitHub } from "@mui/icons-material";
import Link from "next/link";
export function Summary() {
  return (
    <div className="md:h-full">
      <SummarySection>
        <Article>
          <header>
            <Image
              src={"/pfp.jpg"}
              width={300}
              height={300}
              alt="Profile picture"
              className="float-right size-48 rounded-full hidden md:flex shadow-md"
            />
            <Header1>Lukas Låås</Header1>
          </header>
          <Header2>Fullstack developer</Header2>
          <div className="flex flex-col gap-4 py-12">
            <Link
              href={"https://github.com/lukas-laas"}
              rel="noopener noreferrer"
              target="_blank"
              className="flex gap-1 text-xl items-center"
            >
              <GitHub />
              GitHub
            </Link>
            <Link
              href={
                "https://www.linkedin.com/in/lukas-l%C3%A5%C3%A5s-48931b251/"
              }
              className="flex gap-1 text-xl items-center"
              rel="noopener noreferrer"
              target="_blank"
            >
              <LinkedInIcon />
              LinkedIn
            </Link>
          </div>
            <Link
              href="/contact"
              className="relative inline-block rounded bg-textAccent py-2 px-4 text-fuchsia-100 text-2xl transition-all duration-300 overflow-hidden hover:shadow-lg group"
            >
              <strong className="relative z-10">Hire me</strong>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
            </Link>
          <div className="flex  flex-wrap flex-col md:flex-row">
            <div className="md:w-1/2">
              <Article>
                <Header3>
                  <strong className="text-2xl"> ~ whoami</strong>
                </Header3>
                <Paragraph>
                  I am a programmer with a heart for music. I've been
                  programming since middleschool and have been coding full-time
                  for three years. If you need a programmer or just want to have
                  a chat please reach out. Currently I'm spending most of my
                  free time on music and personal projects.
                </Paragraph>
              </Article>
            </div>
            <div className="md:w-1/2">
              <Article>
                <Header3>Technical abilities</Header3>
                <List>
                  <ListItem>C#</ListItem>
                  <ListItem>JavaScript/TypeScript</ListItem>
                  <ListItem>Python</ListItem>
                  <ListItem>C++</ListItem>
                  <ListItem>Next.js/React.js</ListItem>
                  <ListItem>Express.js</ListItem>
                  <ListItem>SQL</ListItem>
                </List>
                <Header3>Languages</Header3>
                <List>
                  <ListItem>Swedish native</ListItem>
                  <ListItem>English fluent</ListItem>
                </List>
              </Article>
            </div>
          </div>
        </Article>
      </SummarySection>
    </div>
  );
}
