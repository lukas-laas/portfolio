import { Article, Gallery, Header3, Paragraph } from "../ui";

export function BrickDashboard() {
  return (
    <Article>
      <Header3>Project!</Header3>
      <Gallery
        images={[
          { url: "/image (1).png", title: "cat", alt: "cat" },
          { url: "/image (2).png", title: "cat", alt: "cat" },
          { url: "/image (3).png", title: "cat", alt: "cat" },
          { url: "/image (4).png", title: "cat", alt: "cat" },
          { url: "/image (5).png", title: "cat", alt: "cat" },
        ]}
      />
      <Paragraph>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae quia
        sunt maiores repudiandae non, earum labore accusantium facere repellat
        ea?
      </Paragraph>
    </Article>
  );
}
