import { Box, styled } from "@mui/system";

export const TownTourProduceContainer = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  gap: 2rem;
  margin: 5rem 0;
  text-align: center;

  @media (max-width: 868px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const ProduceAndTour = styled(Box)`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export const DrawerMenu = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const MobileMenuLogoContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MapWardTableContainer = styled(Box)`
  display: grid;
  grid-template-columns: 60% 40%;
  gap: 1rem;
  margin: 2rem 0 5rem 0;

  @media (max-width: 1068px) {
    grid-template-columns: 70% 30%;
    gap: 5px;
  }
  @media (max-width: 868px) {
    grid-template-columns: 100%;
    grid-template-rows: 1fr;
    gap: 1rem;
  }
`;
