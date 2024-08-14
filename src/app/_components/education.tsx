import { Article, Divider, Header2, Header3, Paragraph } from "./ui";

export function Education() {
  return (
    <section>
      <header>
        <Header2>Education</Header2>
        <Divider />
      </header>
      <Article>
        <Header3>Salt JavaScript Fullstack</Header3>
        <Paragraph>
          3 month bootcamp learning fullstack JavaScript and working in mobs.
          Focus on Express.js, Next.js, Drizzle, and other modern JS frameworks.
        </Paragraph>
      </Article>
      <Article>
        <Header3>Gymnasieingenjör NTI</Header3>
        <Paragraph>
          "Vidareutbildning i form av ett fjärde tekniskt år, profil:
          informationsteknik."
        </Paragraph>
        <Paragraph>
          EN: "Continuing education in the form of a fourth technical year,
          profile: information technology"
        </Paragraph>
        <Paragraph>
          One year of learning agile and scrum on real projects including a 10
          week internship at a real company.
        </Paragraph>
      </Article>
      <Article>
        <Header3>Teknikprogrammet NTI</Header3>
        <Paragraph>Highschool technology program.</Paragraph>
      </Article>
    </section>
  );
}
