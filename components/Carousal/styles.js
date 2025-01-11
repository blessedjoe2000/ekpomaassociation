import { Button } from "@mui/material";
import { Box, styled } from "@mui/system";

export const CarousalContainer = styled(Box)`
  background-color: #1b1833;
  color: #fff;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 0 10vw 5rem 10vw;
  margin-top: 7rem;

  @media (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-rows: 1fr 1fr;
    padding: 0 5vw 5rem 5vw;
    height: 100vh;
  }
`;

export const CarousalContentContainer = styled(Box)`
  @media (max-width: 768px) {
  }
`;

export const CarousalTitleContainer = styled(Box)`
  font-size: 2rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const CarousalParagraph = styled(Box)`
  font-size: 1.2rem;
  font-weight: 200;
  padding: 2rem 0;
  color: #bcccdc;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

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

export const CarousalControls = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  position: absolute;
  z-index: 3;
  left: 0;
  bottom: 0;
  transform: translateY(3rem);
  @media (max-width: 768px) {
  }
`;
export const CarousalPrevButton = styled(Button)`
  border-radius: 100%;
  padding: 5px;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid #fff4b7;
  }

  @media (max-width: 768px) {
  }
`;
export const CarousalNextButton = styled(Button)`
  border-radius: 100%;
  padding: 5px;
  border: 1px solid transparent;
  transition: "background-color 0.15s ease, color 0.15s ease";

  &:hover {
    border: 1px solid #fff4b7;
  }
  @media (max-width: 768px) {
  }
`;
