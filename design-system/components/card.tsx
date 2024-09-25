import { Button, ButtonProps } from "@nextui-org/button";
import { Card, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import ButtonComponent from "./button.component";
import { cn } from "../core/tailwindMerge";

interface CardProps extends ButtonProps {
  imgPath: string;
  imgAltText: string;
  ImgClassname?: string;
  ImgHeight?: number;
  ImgWidth?: number;
  cardTitle: string;
  btnLabel: string;
}

export default function CardComponent({
  imgPath,
  imgAltText,
  ImgClassname,
  ImgHeight = 200,
  ImgWidth = 200,
  cardTitle,
  btnLabel,
}: CardProps) {
  return (
    <Card isFooterBlurred radius="lg" className="border-none w-fit">
      <Image
        alt={imgAltText}
        className={cn("object-cover", ImgClassname)}
        height={ImgHeight}
        src={imgPath}
        width={ImgWidth}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">{cardTitle}</p>
        <ButtonComponent
          label={btnLabel}
          classname="text-tiny text-white bg-black/20 bg-black"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
        />
      </CardFooter>
    </Card>
  );
}
