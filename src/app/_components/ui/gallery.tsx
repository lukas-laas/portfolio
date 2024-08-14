"use client";

import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Image from "next/image";

type Image = {
  url: string;
  title: string;
  alt: string;
};

type Props = {
  images: Image[];
};

export function Gallery({ images }: Props) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex gap-2 max-w-full flex-wrap">
      {images.map((image, i) => (
        <Image
          key={image.url}
          src={image.url}
          alt={image.alt}
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
            mainSrc={images[photoIndex].url}
            nextSrc={images[(photoIndex + 1) % images.length].url}
            prevSrc={
              images[(photoIndex + images.length - 1) % images.length].url
            }
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % images.length)
            }
          />
        )}
      </div>
    </div>
  );
}
