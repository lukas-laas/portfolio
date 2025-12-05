import { Article, Divider, Header2, Header3, Header4, List, ListItem, Paragraph } from "./ui";

export function Education() {
  return (
    <section>
      <header>
        <Header2>Education</Header2>
        <Divider />
      </header>
      <Article>
        <Header3>Uppsala university</Header3>
        <Header4>Bachelor's Programme in Information systems - Systems Development</Header4>
        <List>
          <ListItem>Current: Databases (SQL)</ListItem>
          <ListItem>Object-Oriented Programming I (C#)</ListItem>
          <ListItem>Introduction to Programming (C#)</ListItem>
          <ListItem>Informations Systems</ListItem>
        </List>
        <Header4>Other courses</Header4>
        <List>
          <ListItem>Computers and Programming (C++)</ListItem>
          <ListItem>Introduction to Programming with Java</ListItem>
          <ListItem>Computer Programming II (Python)</ListItem>
          <ListItem>Computer Programming I (Python)</ListItem>
        </List>
      </Article>
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
