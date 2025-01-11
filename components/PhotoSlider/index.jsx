"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import slier1 from "../../public/images/eahslider1.jpg";
import slier2 from "../../public/images/eahslider2.jpg";
import slier3 from "../../public/images/eahslider3.jpg";

import Image from "next/image";
import { Button } from "@mui/material";
import {
  PhotoSilderButton,
  PhotoSilderContainer,
  PhotoSilderHeading,
} from "./styles";

export default function PhotoSlider() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ speed: 2 }),
  ]);
  return (
    <PhotoSilderContainer>
      <PhotoSilderHeading>
        <h3>Photos Speak Louder</h3>
      </PhotoSilderHeading>
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
      <PhotoSilderButton>View more</PhotoSilderButton>
    </PhotoSilderContainer>
  );
}
