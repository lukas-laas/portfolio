"use client";

import React, { useState } from "react";
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import Image from "next/image";
import NextJsImage from "./next-js-image";
import "yet-another-react-lightbox/styles.css";

type Image = {
  url: string;
  title: string;
  alt: string;
};

type Props = {
  images: SlideImage[];
};

export function Gallery({ images }: Props) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex gap-2 max-w-full flex-wrap">
      {images.map((image, i) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt!}
          height={200}
          width={200}
          className="max-h-24 max-w-32 hover:cursor-pointer"
          onClick={() => {
            setPhotoIndex(i);
            setIsOpen(true);
          }}
        />
      ))}
      <div>
        {isOpen && (
          <Lightbox
            // mainSrc={images[photoIndex].url}
            // nextSrc={images[(photoIndex + 1) % images.length].url}
            // prevSrc={
            //   images[(photoIndex + images.length - 1) % images.length].url
            // }
            // onCloseRequest={() => setIsOpen(false)}
            // onMovePrevRequest={() =>
            //   setPhotoIndex((photoIndex + images.length - 1) % images.length)
            // }
            // onMoveNextRequest={() =>
            //   setPhotoIndex((photoIndex + 1) % images.length)
            // }
            open={isOpen}
            close={() => setIsOpen(false)}
            slides={images}
            render={{ slide: NextJsImage }}
          />
        )}
      </div>
    </div>
  );
}
