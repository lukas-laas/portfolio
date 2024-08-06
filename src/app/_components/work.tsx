import { Article, Divider, Header2, Header3, Paragraph } from "./ui";

export function Work() {
  return (
    <section>
      <header>
        <Header2>Work experience</Header2>
        <Divider />
      </header>
      <Article>
        <Header3>Brick - 2 month summer job</Header3>
        <Paragraph>
          I worked on their admin dashboard as a full-stack developer. The
          dashboard is written in React using TypeScript and fetches data from
          AWS. One of the things I added was a feature to upload images to S3.
        </Paragraph>
      </Article>
      <Article>
        <Header3>Brick - 10 week internship</Header3>
        <Paragraph>
          As part of my education I had a 10 week internship, during this
          internship I worked on their admin dashboard as a front-end developer.
          The page is written in React using TypeScript.
        </Paragraph>
      </Article>
    </section>
  );
}
