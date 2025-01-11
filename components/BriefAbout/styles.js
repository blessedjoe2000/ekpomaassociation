import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";

export const BriefHeading = styled(Box)`
  font-size: 2.5rem;
  text-align: center;
  padding-top: 2rem;

  @media (max-width: 1060px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const WelcomeContainer = styled(Box)`
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 1rem 0 2rem 0;

  @media (max-width: 1060px) {
    grid-template-columns: 100%;
  }
`;

export const WelcomeParagraph = styled(Typography)`
  border: 2px solid #118b50;
  border-radius: 10px;
  padding: 1rem;
`;
