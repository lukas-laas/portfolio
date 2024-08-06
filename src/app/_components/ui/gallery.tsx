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
    <div>
      {props.images.map((image) => (
        <Image src={image.url} alt={image.alt} height={20} />
      ))}
    </div>
  );
}
