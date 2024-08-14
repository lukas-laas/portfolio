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
              src={"/Lukas.png"}
              width={300}
              height={300}
              alt="Profile picture"
              className="float-right size-48 rounded-full hidden md:flex shadow-md"
            />
            <Header1>
              <span style={{ color: "#F5EFE4" }}>Lukas Låås</span>
            </Header1>
          </header>
          <Header2>
            <span style={{ color: "#ECE2D1" }}>
              Fullstack JavaScript developer
            </span>
          </Header2>
          <div className="flex flex-col gap-4 py-12">
            <Link
              href={"https://github.com/lukas-laas"}
              rel="noopener noreferrer"
              target="_blank"
              className="flex gap-1 text-xl items-center"
              style={{ color: "#ECE2D1" }}
            >
              <GitHub style={{ color: "#ECE2D1" }} />
              GitHub
            </Link>
            <Link
              href={
                "https://www.linkedin.com/in/lukas-l%C3%A5%C3%A5s-48931b251/"
              }
              className="flex gap-1 text-xl items-center"
              style={{ color: "#ECE2D1" }}
              rel="noopener noreferrer"
              target="_blank"
            >
              <LinkedInIcon style={{ color: "#ECE2D1" }} />
              LinkedIn
            </Link>
          </div>
          <div className="flex  flex-wrap flex-col md:flex-row">
            <div className="md:w-1/2">
              <Article>
                <Header3>
                  <span style={{ color: "#F5EFE4" }}>
                    <strong className="text-2xl"> ~ whoami</strong>
                  </span>
                </Header3>
                <Paragraph>
                  <span style={{ color: "#ECE2D1" }}>
                    I am a Fullstack JS programmer with a heart for music. I've
                    been programming since middleschool and have been coding
                    full-time for three years. Currently available for
                    try-and-hire through Salt and spending most of my free time
                    on music and personal projects.
                  </span>
                </Paragraph>
              </Article>
            </div>
            <div className="md:w-1/2">
              <Article>
                <Header3>
                  <span style={{ color: "#ECE2D1" }}> Technical abilities</span>
                </Header3>
                <List>
                  <ListItem>
                    <span style={{ color: "#ECE2D1" }}>
                      JavaScript/TypeScript
                    </span>
                  </ListItem>
                  <ListItem>
                    <span style={{ color: "#ECE2D1" }}> Next.js/React.js</span>
                  </ListItem>
                  <ListItem>
                    <span style={{ color: "#ECE2D1" }}> HTML/CSS</span>
                  </ListItem>
                  <ListItem>
                    <span style={{ color: "#ECE2D1" }}> Express.js</span>
                  </ListItem>
                  <ListItem>
                    <span style={{ color: "#ECE2D1" }}>
                      {" "}
                      Drizzle/PostgreSQL
                    </span>
                  </ListItem>
                  <ListItem>
                    <span style={{ color: "#ECE2D1" }}> Python</span>
                  </ListItem>
                  <ListItem>
                    <span style={{ color: "#ECE2D1" }}> C#</span>
                  </ListItem>
                </List>
                <List>
                  <ListItem>
                    <span style={{ color: "#ECE2D1" }}> Swedish native</span>
                  </ListItem>
                  <ListItem>
                    <span style={{ color: "#ECE2D1" }}> English fluent</span>
                  </ListItem>
                </List>
              </Article>
            </div>
          </div>
        </Article>
      </SummarySection>
    </div>
  );
}
