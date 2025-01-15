"use client";

import Image from "next/image";
import Link from "next/link";
import { Box, Container } from "@mui/system";
import { BriefHeading } from "@/components/BriefAbout/styles";
import slider1 from "../../public/images/eahslider1.jpg";
import slider2 from "../../public/images/eahslider2.jpg";
import slider3 from "../../public/images/eahslider3.jpg";
import market from "../../public/images/eahmarket.png";
import img from "../../public/images/ai-generated.jpg";
import {
  GalleryPhotoAndTitle,
  GalleryPhotosContainer,
  PhotoTitle,
} from "./styles";

export default function Gallery() {
  return (
    <Container sx={{ py: "3rem" }}>
      <Box>
        <BriefHeading>
          <h3>Photo Speaks Louder</h3>
        </BriefHeading>

        <GalleryPhotosContainer>
          <GalleryPhotoAndTitle>
            <Link href="/christmasparty2024">
              <Image
                src={slider1}
                alt="photo gallery"
                width={300}
                height={200}
              />
              <PhotoTitle>Christmas Party 2024</PhotoTitle>
            </Link>
          </GalleryPhotoAndTitle>
          <GalleryPhotoAndTitle>
            <Link href="/christmasparty2024">
              <Image
                src={market}
                alt="photo gallery"
                width={300}
                height={200}
              />
              <PhotoTitle>Picnic 2024</PhotoTitle>
            </Link>
          </GalleryPhotoAndTitle>
          <GalleryPhotoAndTitle>
            <Link href="/christmasparty2024">
              <Image
                src={slider2}
                alt="photo gallery"
                width={300}
                height={200}
              />
              <PhotoTitle>Christmas Party 2023</PhotoTitle>
            </Link>
          </GalleryPhotoAndTitle>
          <GalleryPhotoAndTitle>
            <Link href="/christmasparty2024">
              <Image src={img} alt="photo gallery" width={300} height={200} />
              <PhotoTitle>Award Night 2023</PhotoTitle>
            </Link>
          </GalleryPhotoAndTitle>
          <GalleryPhotoAndTitle>
            <Link href="/christmasparty2024">
              <Image
                src={slider3}
                alt="photo gallery"
                width={300}
                height={200}
              />
              <PhotoTitle>Christmas Party 2022</PhotoTitle>
            </Link>
          </GalleryPhotoAndTitle>
        </GalleryPhotosContainer>
      </Box>
    </Container>
  );
}
