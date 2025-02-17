import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";

export const BriefHeading = styled(Box)`
  font-size: 2.5rem;
  text-align: center;
  padding-top: 2rem;
  color: #118b50;

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
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 10px;
  padding: 1rem;
`;
