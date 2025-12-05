import Link from "next/link";
import { Article, Gallery, Header3, Paragraph } from "../ui";

export function TetrisSharp() {
  return (
    <Article>
      <Link
        href="https://github.com/lukas-laas/cs-tetris-p-42"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Header3>Tetris#</Header3>
      </Link>
      <Gallery
        images={[
          {
            src: "/welcome-multiplayer.png",
            // title: "Tetris#",
            alt: "Tetris#",
          },
          {
            src: "/singleplayer-playing.png",
            // title: "Tetris#",
            alt: "Tetris#",
          },
          {
            src: "/singleplayer-shopping.png",
            // title: "Tetris#",
            alt: "Tetris#",
          },
          
        ]}
      />
      <Paragraph>
        A rogue-like version of the classic game Tetris. Built using C#/DotNet.
      </Paragraph>
    </Article>
  );
}
