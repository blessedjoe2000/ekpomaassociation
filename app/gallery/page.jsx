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
  PhotoWrapper,
} from "./styles";

export default function Gallery() {
  const imageDetails = [
    {
      url: slider1,
      title: "Christmas Party 2024",
      link: "/christmasparty2024",
    },
    {
      url: market,
      title: "Picnic 2024",
      link: "/christmasparty2024",
    },
    {
      url: slider2,
      title: "Christmas Party 2023",
      link: "/christmasparty2024",
    },
    {
      url: img,
      title: "Workshop 2023",
      link: "/christmasparty2024",
    },
    {
      url: slider3,
      title: "Christmas Party 2022",
      link: "/christmasparty2024",
    },
  ];
  return (
    <Container sx={{ py: "3rem" }}>
      <Box>
        <BriefHeading>
          <h3>Photo Speaks Louder</h3>
        </BriefHeading>

        <GalleryPhotosContainer>
          {imageDetails.map((imageDetail, index) => (
            <GalleryPhotoAndTitle key={index}>
              <Link href={imageDetail.link}>
                <PhotoWrapper>
                  <Image
                    src={imageDetail.url}
                    alt="photo gallery"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                    sizes="(max-width: 600px) 100vw, 300px"
                  />
                </PhotoWrapper>
                <PhotoTitle>{imageDetail.title}</PhotoTitle>
              </Link>
            </GalleryPhotoAndTitle>
          ))}
        </GalleryPhotosContainer>
      </Box>
    </Container>
  );
}
