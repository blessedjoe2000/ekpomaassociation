"use client";

import { Box } from "@mui/system";
import imageOne from "../../public/images/carousal/eahimage1.jpg";
import imageTwo from "../../public/images/carousal/eahimage2.jpg";
import imageThree from "../../public/images/carousal/eahimage3.jpg";
import prevDisabled from "../../public/images/carousal/previous-disabled.svg";
import nextDisabled from "../../public/images/carousal/next-disabled.svg";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  CarousalButton,
  CarousalContainer,
  CarousalContentContainer,
  CarousalControls,
  CarousalFirstImage,
  CarousalImagesContainer,
  CarousalNextButton,
  CarousalParagraph,
  CarousalPrevButton,
  CarousalSecondImage,
  CarousalThirdImage,
  CarousalTitleContainer,
} from "./styles";

export default function Carousal() {
  return (
    <CarousalContainer>
      <CarousalContentContainer>
        <CarousalTitleContainer>
          <Box>This will be the heading</Box>
        </CarousalTitleContainer>
        <CarousalParagraph>
          <Box>This will take the message</Box>
        </CarousalParagraph>
        <CarousalButton>
          <Box>Learn More</Box>
        </CarousalButton>
      </CarousalContentContainer>
      <CarousalImagesContainer>
        <CarousalFirstImage>
          <Image className="firstImg" src={imageOne} alt="men wearing igbulu" />
        </CarousalFirstImage>
        <CarousalSecondImage>
          <Image
            className="secondImg"
            src={imageTwo}
            alt="Ambrose Alli"
            width={300}
          />
        </CarousalSecondImage>
        <CarousalThirdImage>
          <Image
            className="thirdImg"
            src={imageThree}
            alt="traditional beads"
            width={300}
          />
        </CarousalThirdImage>
        <CarousalControls>
          <CarousalPrevButton>
            <Image src={prevDisabled} alt="previous button" width={20} />
          </CarousalPrevButton>
          <CarousalNextButton>
            <ArrowForwardIcon
              sx={{
                color: "#FFF4B7",
                fontSize: "3rem",
                transition: "color 0.15s ease",
                "&:hover": {
                  color: "#118B50",
                },
              }}
            />
          </CarousalNextButton>
        </CarousalControls>
      </CarousalImagesContainer>
    </CarousalContainer>
  );
}
