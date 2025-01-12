import { Box, styled } from "@mui/system";

export const FooterSocialMediaTitle = styled(Box)`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #118b50;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 5px;
  }
`;
export const FooterSocialMediaIcons = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const FooterContentContainer = styled(Box)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  padding: 3rem;

  @media (max-width: 768px) {
    padding: 2rem;
    gap: 1rem;
  }
  @media (max-width: 548px) {
    flex-direction: column;
    gap: 2rem;
  }
`;
export const FooterMenuContent = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (max-width: 548px) {
    flex-direction: row;
  }
`;

export const FooterBottonContent = styled(Box)`
  padding: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
