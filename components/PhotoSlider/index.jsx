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
            <Image src={slider1} alt="slider1" />
          </div>
          <div className="embla__slide">
            <Image src={slider2} alt="slider2" />
          </div>
          <div className="embla__slide">
            <Image src={slider3} alt="slider3" />
          </div>
          <div className="embla__slide">
            <Image src={slider1} alt="slider4" />
          </div>
          <div className="embla__slide">
            <Image src={slider2} alt="slider5" />
          </div>
          <div className="embla__slide">
            <Image src={slider3} alt="slider6" />
          </div>
          <div className="embla__slide">
            <Image src={slider1} alt="slider17" />
          </div>
        </div>
      </div>
      <PhotoSilderButton>View more</PhotoSilderButton>
    </PhotoSilderContainer>
  );
}
