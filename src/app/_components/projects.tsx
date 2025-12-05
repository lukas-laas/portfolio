import { BrickDashboard } from "./projects/brick-dashboard";
import { SlowMessagingApp } from "./projects/slow-messaging-app";
import { TetrisSharp } from "./projects/tetris-sharp";
import { VenueMap } from "./projects/venue-map";
import { Divider, Header2 } from "./ui";

export function Projects() {
  return (
    <>
      <header>
        <Header2>Projects</Header2>
        <Divider />
      </header>
      <TetrisSharp/>
      <VenueMap />  
      <BrickDashboard />
      <SlowMessagingApp />
    </>
  );
}
