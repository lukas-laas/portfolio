import { BrickDashboard } from "./projects/brick-dashboard";
import { MusicWebsite } from "./projects/music-website";
import { SlowMessagingApp } from "./projects/slow-messaging-app";
import { VenueMap } from "./projects/venue-map";
import { Divider, Header2 } from "./ui";

export function Projects() {
  return (
    <>
      <header>
        <Header2>Projects</Header2>
        <Divider />
      </header>
      <VenueMap />
      <SlowMessagingApp />
      {/* <MusicWebsite /> */}
      <BrickDashboard />
    </>
  );
}
