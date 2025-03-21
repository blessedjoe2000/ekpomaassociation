"use client";

import { BriefHeading } from "@/components/BriefAbout/styles";
import { Box, Container } from "@mui/system";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { DuesButton } from "../about/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  GalleryImageContainer,
  NextButton,
  PhotoPreviewContainer,
  PrevButton,
} from "../christmasparty2024/styles";

const images = [
  "https://y0j76v8ehu.ufs.sh/f/ixPJlD0BR7ylrCt0hXWxoDesRSI8hcfgtWaZlP9MYjzTBu1b",
  "https://y0j76v8ehu.ufs.sh/f/ixPJlD0BR7yl7xxEjKs2ZuSmvYG4TVUqzhstgiBI0oWwX5LD",
  "https://y0j76v8ehu.ufs.sh/f/ixPJlD0BR7ylWTo7Re4EJXb6jxskYz1HpPr7iCSqAl2NumcE",
  "https://y0j76v8ehu.ufs.sh/f/ixPJlD0BR7ylSbBdbrS6jChrdowiUVMmWRsP4f6u5731O0gn",
  "https://y0j76v8ehu.ufs.sh/f/ixPJlD0BR7ylGpiCGvKFxVWDe3tbp97nSCa80GAdjXZi2KhM",
  "https://y0j76v8ehu.ufs.sh/f/ixPJlD0BR7ylHWV3eO7yeYOfNubpKTBvq4inAo2lg106sCXc",
  "https://y0j76v8ehu.ufs.sh/f/ixPJlD0BR7ylAbHHuQT5FPbReoNBJyhHxriIDClKavVOMwGA",
  "https://y0j76v8ehu.ufs.sh/f/ixPJlD0BR7yl9vFeYvbyG43MvQCVFxZKLXognjy56I7kuiT8",
  "https://y0j76v8ehu.ufs.sh/f/ixPJlD0BR7ylXidEpFPYiUb4HElNBWgr3sevm75p8C9D0fJT",
  "https://y0j76v8ehu.ufs.sh/f/ixPJlD0BR7ylwQnS007j14lsFeMIp2Jq9KTRZWygmcndQBoU",
  "https://y0j76v8ehu.ufs.sh/f/ixPJlD0BR7ylrB2Cb1WxoDesRSI8hcfgtWaZlP9MYjzTBu1b",
  "https://y0j76v8ehu.ufs.sh/f/ixPJlD0BR7ylgfEfFchFckhm1szQgBJNa2le8WntAViy4qHj",
  "https://y0j76v8ehu.ufs.sh/f/ixPJlD0BR7yl5dBTvoRLAcfmhRMi2bukWKQpHZYr0dNqJzDy",
  "https://y0j76v8ehu.ufs.sh/f/ixPJlD0BR7ylpff6rpHFB8HUZjTC5R3fNdAiaJIFKsLzlSxt",
  "https://y0j76v8ehu.ufs.sh/f/ixPJlD0BR7ylEQ6PGfAzPBMejFxC251ZRhboGi9lJIqHcV08",
  "https://y0j76v8ehu.ufs.sh/f/ixPJlD0BR7ylgXqK30hFckhm1szQgBJNa2le8WntAViy4qHj",
  "https://y0j76v8ehu.ufs.sh/f/ixPJlD0BR7ylTxIvCwHFVfg4vHd7PeNlCj2xtXoc9YAaBJuK",
  "https://y0j76v8ehu.ufs.sh/f/ixPJlD0BR7yl9vFeYvbyG43MvQCVFxZKLXognjy56I7kuiT8",
  "https://y0j76v8ehu.ufs.sh/f/ixPJlD0BR7yl9Axo4ZyG43MvQCVFxZKLXognjy56I7kuiT80",
  "https://y0j76v8ehu.ufs.sh/f/ixPJlD0BR7yl68RZANkRfzXLC3TaonvK6eyq7P1Zli54tcON",
  "https://y0j76v8ehu.ufs.sh/f/ixPJlD0BR7ylg0kPobihFckhm1szQgBJNa2le8WntAViy4qH",
  "https://y0j76v8ehu.ufs.sh/f/ixPJlD0BR7yly4FniYjL1KU4BY9gSm23tNIMwd6TvrRCuO8J",
  "https://y0j76v8ehu.ufs.sh/f/ixPJlD0BR7ylNmiVJxbEsNj217JCU8IWSaruLRq5ZzMtXHPQ",
  "https://y0j76v8ehu.ufs.sh/f/ixPJlD0BR7ylxFR9RyUTGKEm1lUuJ4ZFNH2r6aWP7ygO5ehd",
  "https://y0j76v8ehu.ufs.sh/f/ixPJlD0BR7ylXQ8o4GPYiUb4HElNBWgr3sevm75p8C9D0fJT",
  "https://y0j76v8ehu.ufs.sh/f/ixPJlD0BR7yl4mbhHjgDU9LFuydA8welEVvsT63z1ipfkBGQ",
];

export default function Picnic2024() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const containerRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setSelectedImageIndex(null);
    } else if (e.key === "ArrowRight") {
      nextImage();
    } else if (e.key === "ArrowLeft") {
      prevImage();
    }
  };

  useEffect(() => {
    if (selectedImageIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImageIndex]);

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + images.length) % images.length
      );
    }
  };

  useEffect(() => {
    const galleryContainer = containerRef.current;
    const handleImageLoad = () => {
      if (galleryContainer) {
        const items = galleryContainer.querySelectorAll(".gallery-item");
        items.forEach((item) => {
          const img = item?.querySelector("img");
          if (img) {
            const ratio = img.naturalHeight / img.naturalWidth;
            const span = Math.ceil((250 * ratio) / 10);
            item.style.gridRowEnd = `span ${span}`;
          }
        });
      }
    };

    // Attach event listeners to all images
    const images = galleryContainer?.querySelectorAll("img");
    images?.forEach((img) => {
      if (img.complete) {
        handleImageLoad();
      } else {
        img.onload = handleImageLoad;
      }
    });

    // Cleanup
    return () => {
      images?.forEach((img) => (img.onload = null));
    };
  }, []);

  return (
    <Container
      sx={{
        mt: { xs: "7rem", sm: "9rem" },
        mb: { xs: "2rem", sm: "4rem" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <BriefHeading>
        <h3>Picnic 2024</h3>
      </BriefHeading>

      <GalleryImageContainer ref={containerRef}>
        {images.map((url, index) => (
          <Box key={index} className="gallery-item">
            <Image
              src={url}
              alt={`Gallery image ${index + 1}`}
              width={250}
              height={250}
              className="gallery-img"
              onClick={() => setSelectedImageIndex(index)}
              style={{ objectFit: "cover" }}
            />
          </Box>
        ))}
      </GalleryImageContainer>
      {selectedImageIndex !== null && (
        <PhotoPreviewContainer onClick={() => setSelectedImageIndex(null)}>
          <Box sx={{ position: "relative" }}>
            <PrevButton
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </PrevButton>
            <Box
              sx={{
                width: "100%",
                maxWidth: "900px",
                margin: "0 auto",
              }}
            >
              <Image
                src={images[selectedImageIndex]}
                alt="Selected"
                width={900}
                height={500}
                onClick={(e) => e.stopPropagation()}
                className="preview-img"
                layout="responsive"
                objectFit="contain"
              />
            </Box>
            <NextButton
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </NextButton>
          </Box>
        </PhotoPreviewContainer>
      )}
      <Link href="/gallery">
        <DuesButton>
          <ArrowBackIcon /> Photo Gallery
        </DuesButton>
      </Link>
    </Container>
  );
}
