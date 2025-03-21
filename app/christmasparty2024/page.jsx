"use client";

import { BriefHeading } from "@/components/BriefAbout/styles";
import { Box, Container } from "@mui/system";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  GalleryImageContainer,
  NextButton,
  PhotoPreviewContainer,
  PrevButton,
} from "./styles";
import Link from "next/link";
import { DuesButton } from "../about/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const images = [
  "https://y0j76v8ehu.ufs.sh/f/ixPJlD0BR7ylRYYfATr9CYLAUnbsQrZE0D2tzdcKP6SilWFy",
  "https://y0j76v8ehu.ufs.sh/f/ixPJlD0BR7yli9RssCBR7yleDIi3rQqZPCoN1hanUJT0f2Fw",
  "https://y0j76v8ehu.ufs.sh/f/ixPJlD0BR7ylVSbrL3Eq8Ckl7gdPxpa5TyKHznUiuAr1Oq93",
  "https://y0j76v8ehu.ufs.sh/f/ixPJlD0BR7ylnB7Cv2DOSk9MGyezAuI7xVBXjNqvPmZhop24",
  "https://y0j76v8ehu.ufs.sh/f/ixPJlD0BR7ylGHkJ0FKFxVWDe3tbp97nSCa80GAdjXZi2KhM",
  "https://y0j76v8ehu.ufs.sh/f/ixPJlD0BR7yl0F6OWFh1318kcaiIfUEGpg7LlO4MKyYh59Pu",
  "https://y0j76v8ehu.ufs.sh/f/ixPJlD0BR7ylodhSMX0DiwObjC6uXvY5QPqmRgz9VK18aWML",
  "https://y0j76v8ehu.ufs.sh/f/ixPJlD0BR7ylbFa89guFOnjBxXlHKGIYUz6NqMmwCd3QuTot",
  "https://y0j76v8ehu.ufs.sh/f/ixPJlD0BR7ylxhcQGHUTGKEm1lUuJ4ZFNH2r6aWP7ygO5ehd",
  "https://y0j76v8ehu.ufs.sh/f/ixPJlD0BR7yl6h5v01NkRfzXLC3TaonvK6eyq7P1Zli54tcO",
  "https://y0j76v8ehu.ufs.sh/f/ixPJlD0BR7yl0Riknz1318kcaiIfUEGpg7LlO4MKyYh59Puq",
  "https://y0j76v8ehu.ufs.sh/f/ixPJlD0BR7ylKr8BvG5WUl0zLIR6AQesbi38mV25D4ntg7Np",
  "https://y0j76v8ehu.ufs.sh/f/ixPJlD0BR7ylLx7oRVvFGmS65j0YbPvl4Z8NxRo7quM2kgJ1",
  "https://y0j76v8ehu.ufs.sh/f/ixPJlD0BR7ylwflwFFj14lsFeMIp2Jq9KTRZWygmcndQBoUH",
  "https://y0j76v8ehu.ufs.sh/f/ixPJlD0BR7ylGRHWbVbKFxVWDe3tbp97nSCa80GAdjXZi2Kh",
];

export default function ChristmasParty2024() {
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
        <h3>Christmas Party 2024</h3>
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
