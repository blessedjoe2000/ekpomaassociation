"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

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

  const sliderImages = [
    "https://y0j76v8ehu.ufs.sh/f/ixPJlD0BR7ylRYYfATr9CYLAUnbsQrZE0D2tzdcKP6SilWFy",
    "https://y0j76v8ehu.ufs.sh/f/ixPJlD0BR7ylcfi2u6Ito4UnRQ2FHbWYLvBlqZi897yKgOpr",
    "https://y0j76v8ehu.ufs.sh/f/ixPJlD0BR7yljSdEd8m9XoWtGaPLNJyhVmdbR3EKv720SrlB",
    "https://y0j76v8ehu.ufs.sh/f/ixPJlD0BR7ylOMDTSFCxK85yQTsgScRPJkoVMtX7lqdIwzHD",
    "https://y0j76v8ehu.ufs.sh/f/ixPJlD0BR7ylbaOPVXvuFOnjBxXlHKGIYUz6NqMmwCd3QuTo",
  ];

  return (
    <PhotoSilderContainer>
      <PhotoSilderHeading>
        <h3>Photos Speak Louder</h3>
      </PhotoSilderHeading>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {sliderImages.map((src, index) => (
            <div className="embla__slide " key={src}>
              <Image
                src={src}
                alt={`slider${index + 1}`}
                width={0}
                height={0}
                sizes="100vw"
                className="embla__slide-img"
              />
            </div>
          ))}
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
