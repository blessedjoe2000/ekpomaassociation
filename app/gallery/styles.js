import { Box, styled } from "@mui/system";

export const GalleryPhotosContainer = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
`;

export const GalleryPhotoAndTitle = styled(Box)`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 2rem;
`;

export const PhotoTitle = styled(Box)`
  font-size: 1.5rem;
  font-weight: 400;
  color: #118b50;
  text-align: center;
`;
