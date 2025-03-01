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

  const carousalContent = [
    {
      title: "We Are Closer to You Than You Think",
      description:
        "The Esan West community is an active and vibrant part of society, committed to fostering unity and promoting our shared heritage. We are more than just neighbors; we are a family that values support, culture, and togetherness. Wherever you find yourself, you are never far from an Esan brother or sister.",
      link: "/about",
    },
    {
      title: "Honoring an Icon: Ambrose Alli",
      description:
        "Prof. Ambrose Alli, a revered son of Esan West, was a trailblazing leader and the first civilian governor of the old Bendel State. His tireless efforts in expanding access to education, healthcare, and infrastructure have left an indelible mark on our history. We proudly carry on his legacy by advocating for progress and excellence.",
      link: "/culture",
    },
    {
      title: "Celebrating Esan Tradition and Culture",
      description:
        "Our traditions define us, and we take pride in preserving the rich culture of Esan. From our colorful festivals to our unique language and storytelling, we are dedicated to keeping our heritage alive. Through our gatherings, we ensure that the beauty of Esan culture thrives, connecting past, present, and future generations.",
      link: "/culture",
    },
  ];

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
