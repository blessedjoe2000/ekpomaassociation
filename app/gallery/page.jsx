"use client";

import Image from "next/image";
import Link from "next/link";
import { Box, Container } from "@mui/system";
import { BriefHeading } from "@/components/BriefAbout/styles";

import {
  GalleryPhotoAndTitle,
  GalleryPhotosContainer,
  PhotoTitle,
  PhotoWrapper,
} from "./styles";

export default function Gallery() {
  const imageDetails = [
    {
      url: "https://y0j76v8ehu.ufs.sh/f/ixPJlD0BR7yli9RssCBR7yleDIi3rQqZPCoN1hanUJT0f2Fw",
      title: "Christmas Party 2024",
      link: "/christmasparty2024",
    },
    {
      url: "https://y0j76v8ehu.ufs.sh/f/ixPJlD0BR7ylYVSKo5HctAbyUL8zEmSuFJM39csh20ZRfIXW",
      title: "Picnic 2024",
      link: "/picnic2024",
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
                    className="card-cover"
                    width={300}
                    height={200}
                    sizes="(max-width: 300px) 100vw, 300px"
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
