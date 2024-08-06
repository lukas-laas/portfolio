"use client";
import Image from "next/image";

type Image = {
  url: string;
  title: string;
  alt: string;
};

type Props = {
  images: Image[];
};

export function Gallery({ ...props }: Props) {
  return (
    <div className="flex gap-2 max-w-full flex-wrap">
      {props.images.map((image) => (
        <Image
          key={image.url}
          src={image.url}
          alt={image.alt}
          height={200}
          width={200}
          className="max-h-24 max-w-32"
        />
      ))}
    </div>
  );
}
