"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import slider1 from "../../public/images/eahslider1.jpg";
import slider2 from "../../public/images/eahslider2.jpg";
import slider3 from "../../public/images/eahslider3.jpg";

import Image from "next/image";
import {
  PhotoSilderButton,
  PhotoSilderContainer,
  PhotoSilderHeading,
} from "./styles";
import Link from "next/link";
import { Container } from "@mui/system";

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
            <Image
              src={slider2}
              alt="slider1"
              width={1280}
              height={720}
              className="embla__slide-img"
            />
          </div>
          <div className="embla__slide">
            <Image
              src={slider1}
              alt="slider2"
              width={1280}
              height={720}
              className="embla__slide-img"
            />
          </div>
          <div className="embla__slide">
            <Image
              src={slider3}
              alt="slider3"
              width={1280}
              height={720}
              className="embla__slide-img"
            />
          </div>
          <div className="embla__slide">
            <Image
              src={slider2}
              alt="slider4"
              width={1280}
              height={720}
              className="embla__slide-img"
            />
          </div>
          <div className="embla__slide">
            <Image
              src={slider1}
              alt="slider5"
              width={1280}
              height={720}
              className="embla__slide-img"
            />
          </div>
          <div className="embla__slide">
            <Image
              src={slider3}
              alt="slider6"
              width={1280}
              height={720}
              className="embla__slide-img"
            />
          </div>
          <div className="embla__slide">
            <Image
              src={slider2}
              alt="slider17"
              width={1280}
              height={720}
              className="embla__slide-img"
            />
          </div>
        </div>
      </div>
      <Container>
        <Link href="/gallery">
          <PhotoSilderButton>View more</PhotoSilderButton>
        </Link>
      </Container>
    </PhotoSilderContainer>
  );
}
