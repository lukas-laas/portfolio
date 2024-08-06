import { Article, Header1, Header2, Header3, Paragraph, Section } from "./ui";

export function Summary() {
  return (
    <Section>
      <header>
        <Header1>Lukas Låås</Header1>
        <Header2>Fullstack javascript developer</Header2>
        <ul>
          <li>GitHub</li>
          <li>LinkedIn</li>
        </ul>
      </header>
      <Article>
        <div>Image</div>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          explicabo ullam? Cumque amet dolorem aspernatur. Libero soluta aut
          laboriosam explicabo odio sint aliquid nesciunt debitis nam non sunt
          expedita dolorem molestiae quae ullam dicta perspiciatis rem nostrum
          animi molestias doloribus, placeat ex! Ducimus iste vel eveniet vitae
          distinctio adipisci, illo quisquam, pariatur odio placeat libero
          porro, sapiente nulla fugit alias.
        </Paragraph>
      </Article>
      <Article>
        <Header3>Languages</Header3>
        <ul>
          <li>Javascript/Typescript</li>
          <li>Javascript/Typescript</li>
          <li>Javascript/Typescript</li>
          <li>Javascript/Typescript</li>
        </ul>
        <ul>
          <li>Swedish native</li>
          <li>English fuent</li>
        </ul>
      </Article>
    </Section>
  );
}
