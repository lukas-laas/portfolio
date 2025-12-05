import Link from "next/link";
import { Article, Gallery, Header3, Paragraph } from "../ui";

export function SlowMessagingApp() {
  return (
    <Article>
      <Link
        href="https://github.com/lukas-laas/slow-messaging-app"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Header3>Slow Messaging App</Header3>
      </Link>
      <Gallery
        images={[
          {
            src: "/Screenshot from 2024-08-13 20-07-04.png",
            // title: "Slow messaging app",
            alt: "Slow messaging app",
          },
          {
            src: "/Screenshot from 2024-08-13 20-08-02.png",
            // title: "Slow messaging app",
            alt: "Slow messaging app",
          },
          {
            src: "/Screenshot from 2024-08-13 20-09-41.png",
            // title: "Slow messaging app",
            alt: "Slow messaging app",
          },
          {
            src: "/Screenshot from 2024-08-13 20-28-14.png",
            // title: "Slow messaging app",
            alt: "Slow messaging app",
          },
        ]}
      />
      <Paragraph>
        For our final weekend assignment in the Salt bootcamp we were supposed
        to build a full stack messaging app. The tech stack included Next.js,
        PostgreSQL and Docker. In 3 days I was able to meet all the requirements
        and end up with a result that I am very proud of.
      </Paragraph>
    </Article>
  );
}
