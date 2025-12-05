import Link from "next/link";
import { Article, Divider, Header2, Header3, Paragraph } from "./ui";

export function Work() {
  return (
    <section>
      <header>
        <Header2>Work experience</Header2>
        <Divider />
      </header>
      <Article>
        <Header3>Awareify - fullstack app developer</Header3>
        <Paragraph>
          Supplied a proof of concept for an update of their{" "}
          <Link href="http://awareify.se/_files/ugd/3ad616_73d1756a2f564f89b3fe62723a762b76.pdf" className="underline"
          rel="noopener noreferrer"
          target="_blank">"Awareify Effektvy"</Link>
          {" "}in React native.
        </Paragraph>
      </Article>
      <Article>
        <Header3>Salt - post graduate program JavaScript Fullstack</Header3>
        <Paragraph>
          Began a rewrite of the salt talent site. - Ended before results were reached as a result of lay-offs.
        </Paragraph>
      </Article>
      <Article>
        <Header3>Brick - summer job</Header3>
        <Paragraph>
          I worked on their admin dashboard as a full-stack developer. The
          dashboard is written in React using TypeScript and fetches data from
          AWS. One of the things I added was a feature to upload images to S3.
        </Paragraph>
      </Article>
      <Article>
        <Header3>Brick - internship</Header3>
        <Paragraph>
          As part of my education I had a 10 week internship, during this
          internship I worked on their admin dashboard as a front-end developer.
          The page is written in React using TypeScript.
        </Paragraph>
      </Article>
    </section>
  );
}
