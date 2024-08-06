import { Article, Divider, Gallery, Header2, Header3, Paragraph } from "./ui";

export function Projects() {
  return (
    <>
      <header>
        <Header2>Projects</Header2>
        <Divider />
      </header>
      <Article>
        <Header3>Project!</Header3>
        <Gallery
          images={[
            { url: "https://picsum.photos/536/354", title: "cat", alt: "cat" },
            { url: "https://picsum.photos/536/354", title: "cat", alt: "cat" },
          ]}
        />
        <Paragraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
          quia sunt maiores repudiandae non, earum labore accusantium facere
          repellat ea?
        </Paragraph>
      </Article>
      <Article>
        <Header3>Project!</Header3>
        <Gallery
          images={[
            { url: "https://picsum.photos/536/354", title: "cat", alt: "cat" },
            { url: "https://picsum.photos/536/354", title: "cat", alt: "cat" },
          ]}
        />
        <Paragraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
          quia sunt maiores repudiandae non, earum labore accusantium facere
          repellat ea?
        </Paragraph>
      </Article>{" "}
      <Article>
        <Header3>Project!</Header3>
        <Gallery
          images={[
            { url: "https://picsum.photos/536/354", title: "cat", alt: "cat" },
            { url: "https://picsum.photos/536/354", title: "cat", alt: "cat" },
          ]}
        />
        <Paragraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
          quia sunt maiores repudiandae non, earum labore accusantium facere
          repellat ea?
        </Paragraph>
      </Article>
    </>
  );
}
