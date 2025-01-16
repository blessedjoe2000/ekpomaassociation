import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";

export const ContactContainer = styled(Box)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  margin: 2rem 0 5rem 0;

  @media (max-width: 680px) {
    flex-direction: column;
  }
`;

export const AddressHeading = styled(Box)`
  font-size: 1.8rem;
  font-weight: 500;
  padding: 1rem 0;
  color: #118b50;

  @media (max-width: 680px) {
    padding-bottom: 5px;
  }
`;

export const AddressContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const PhoneOrMailAddressPO = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const AddressText = styled(Typography)`
  font-size: 1.2rem;
  text-align: center;
`;
export const AddressPO = styled(Box)`
  display: flex;
  flex-direction: column;
`;
