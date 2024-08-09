import Link from "next/link";
import { Article, Gallery, Header3, Paragraph } from "../ui";

export function BrickDashboard() {
  return (
    <Article>
      <Header3>
        <Link
          href="https://www.brick.tech/en-us"
          rel="noopener noreferrer"
          target="_blank"
        >
          Brick Dashboard
        </Link>
      </Header3>
      <Gallery
        images={[
          {
            url: "/image (1).png",
            title: "Brick dashboard 1",
            alt: "Brick dashboard 1",
          },
          {
            url: "/image (2).png",
            title: "Brick dashboard 2",
            alt: "Brick dashboard 2",
          },
          {
            url: "/image (3).png",
            title: "Brick dashboard 3",
            alt: "Brick dashboard 3",
          },
          {
            url: "/image (4).png",
            title: "Brick dashboard 4",
            alt: "Brick dashboard 4",
          },
          {
            url: "/image (5).png",
            title: "Brick dashboard 4",
            alt: "Brick dashboard 4",
          },
        ]}
      />
      <Paragraph>
        The internal dashboard of{" "}
        <Link
          href="https://www.brick.tech/en-us"
          className="underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          Brick Technology
        </Link>
        , I remade a couple of pages based on new designs and added a system for
        uploading pictures for their venues to AWS S3. I also added a function
        for checking the health of batteries and a page for viewing articles.
      </Paragraph>
    </Article>
  );
}
