import Link from "next/link";
import { Article, Gallery, Header3, Paragraph } from "../ui";

export function MusicWebsite() {
  return (
    <Article>
      <Header3>
        <Link
          href="https://lukas-music.vercel.app"
          rel="noopener noreferrer"
          target="_blank"
        >
          Music app
        </Link>
      </Header3>
      <Gallery
        images={[
          {
            url: "/Screenshot 2024-02-06 171606.png",
            title: "Music website",
            alt: "Music website",
          },
        ]}
      />
      <Paragraph>
        An app for me to show off some music demos. Built with Next.js. Future
        plans include a admin page for easier uploading and a cleaner interface.
      </Paragraph>
    </Article>
  );
}
