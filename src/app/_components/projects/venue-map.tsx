import Link from "next/link";
import { Article, Gallery, Header3, Paragraph } from "../ui";

export function VenueMap() {
  return (
    <Article>
      <Link
        href="https://venue-map.vercel.app"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Header3>Venue map</Header3>
      </Link>
      <Gallery
        images={[
          {
            url: "/venue-map/Screenshot from 2024-11-13 13-55-22.png",
            title: "Venue map",
            alt: "Venue map",
          },
          {
            url: "/venue-map/Screenshot from 2024-11-13 13-55-37.png",
            title: "Venue map",
            alt: "Venue map",
          },
          {
            url: "/venue-map/Screenshot from 2024-11-13 13-55-47.png",
            title: "Venue map",
            alt: "Venue map",
          },
        ]}
      />
      <Paragraph>
        A web app to crowd source data about music venues. The goal was to make
        it easier for smaller artists and concert goers to keep track of music
        venues. At the moment the user submits data and I add and update venues
        through the admin panel. The main page shows details about music venues
        around the country. Please feel free to contribute if you feel like it!
      </Paragraph>
    </Article>
  );
}
