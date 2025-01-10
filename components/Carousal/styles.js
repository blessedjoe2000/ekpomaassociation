import { Button } from "@mui/material";
import { Box, styled } from "@mui/system";
export const CarousalContainer = styled(Box)`
  background-color: #1b1833;
  color: #fff;
  padding: 2rem;
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 10vw;

  @media (max-width: 768px) {
  }
`;

export const CarousalContentContainer = styled(Box)`
  @media (max-width: 768px) {
  }
`;

export const CarousalTitleContainer = styled(Box)`
  font-size: 3.5rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const CarousalParagraph = styled(Box)({
  fontSize: "1.2rem",
  fontWeight: "200",
  padding: "2rem 0",
});

export const CarousalButton = styled(Button)({
  display: "flex",
  alignItems: "center",
  padding: " 0.8rem 1.8rem",
  borderRadius: "6rem",
  border: "1px solid #FFF4B7",
  backgroundColor: "transparent",
  color: "#FFF4B7",
  textAlign: "center",
  transition: "background-color 0.15s ease, color 0.15s ease",

  "&:hover": {
    color: "#118B50",
    border: "1px solid #118B50",
  },
});

export const CarousalImagesContainer = styled(Box)`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  height: 35rem;
  @media (max-width: 768px) {
  }
`;

export const CarousalFirstImage = styled(Box)`
  z-index: 2;
  width: 22rem;
  height: auto;
  position: absolute;
`;
export const CarousalSecondImage = styled(Box)`
  z-index: 1;
  width: 22rem;
  height: auto;
  position: absolute;
`;
export const CarousalThirdImage = styled(Box)`
  z-index: 0;
  width: 22rem;
  height: auto;
  position: absolute;
`;
export const CarousalControls = styled(Box)`
  display: flex;
  justify-content: space-between;
  position: absolute;
  z-index: 3;
  left: 0;
  bottom: 0;
  @media (max-width: 768px) {
  }
`;
export const CarousalPrevButton = styled(Button)`
  border-radius: 100%;
  padding: 5px;
  border: 1px solid #fff4b7;

  &:hover {
    border: 1px solid #118b50;
  }

  @media (max-width: 768px) {
  }
`;
export const CarousalNextButton = styled(Button)`
  border-radius: 100%;
  padding: 5px;
  border: 1px solid #fff4b7;
  transition: "background-color 0.15s ease, color 0.15s ease";

  &:hover {
    border: 1px solid #118b50;
  }
  @media (max-width: 768px) {
  }
`;
