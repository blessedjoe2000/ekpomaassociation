import { Box, styled } from "@mui/system";

export const GalleryPhotosContainer = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;

  @media (max-width: 1060px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 545px) {
    grid-template-columns: 1fr;
  }
`;

export const GalleryPhotoAndTitle = styled(Box)`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PhotoWrapper = styled(Box)`
  width: 100%;
  max-width: 300px;
  height: 200px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
`;

export const PhotoTitle = styled(Box)`
  font-size: 1.5rem;
  font-weight: 400;
  color: #118b50;
  text-align: center;
`;
