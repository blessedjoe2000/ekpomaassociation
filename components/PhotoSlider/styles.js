import { Button } from "@mui/material";
import { Box, styled } from "@mui/system";

export const PhotoSilderContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  margin: 3rem 0 5rem 0;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

export const PhotoSilderHeading = styled(Box)`
  font-size: 2.5rem;
  text-align: center;
  padding-bottom: 1rem;
  color: #118b50;

  @media (max-width: 1060px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
export const PhotoSilderButton = styled(Button)`
  color: #fff;
  background-color: #118b50;
  border-radius: 10px;
  margin: 1rem;
`;
