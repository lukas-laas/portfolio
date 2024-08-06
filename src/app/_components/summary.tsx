import { Article, Section } from "./ui";

export function Summary() {
  return (
    <Section>
      <header>
        <h1>Lukas Låås</h1>
        <h2>Fullstack javascript developer</h2>
        <ul>
          <li>GitHub</li>
          <li>LinkedIn</li>
        </ul>
      </header>
      <Article>
        <div>Image</div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          explicabo ullam? Cumque amet dolorem aspernatur. Libero soluta aut
          laboriosam explicabo odio sint aliquid nesciunt debitis nam non sunt
          expedita dolorem molestiae quae ullam dicta perspiciatis rem nostrum
          animi molestias doloribus, placeat ex! Ducimus iste vel eveniet vitae
          distinctio adipisci, illo quisquam, pariatur odio placeat libero
          porro, sapiente nulla fugit alias.
        </p>
      </Article>
      <Article>
        <h2>Languages</h2>
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
