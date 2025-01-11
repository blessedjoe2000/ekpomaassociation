"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import slier1 from "../../public/images/eahslider1.jpg";
import slier2 from "../../public/images/eahslider2.jpg";
import slier3 from "../../public/images/eahslider3.jpg";

import Image from "next/image";
import { BriefHeading } from "../BriefAbout/styles";
import { Button } from "@mui/material";
import { PhotoSilderContainer } from "./styles";

export default function PhotoSlider() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ speed: 2 }),
  ]);
  return (
    <PhotoSilderContainer>
      <PhotoSilderContainer>
        <h3>Photo Speaks Louder</h3>
      </PhotoSilderContainer>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <Image src={slier1} alt="slider1" />
          </div>
          <div className="embla__slide">
            <Image src={slier2} alt="slider2" />
          </div>
          <div className="embla__slide">
            <Image src={slier3} alt="slider3" />
          </div>
          <div className="embla__slide">
            <Image src={slier1} alt="slider4" />
          </div>
          <div className="embla__slide">
            <Image src={slier2} alt="slider5" />
          </div>
          <div className="embla__slide">
            <Image src={slier3} alt="slider6" />
          </div>
          <div className="embla__slide">
            <Image src={slier1} alt="slider17" />
          </div>
        </div>
      </div>
      <Button>View more</Button>
    </PhotoSilderContainer>
  );
}
