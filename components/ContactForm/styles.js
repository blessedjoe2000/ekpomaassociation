import { Button } from "@mui/material";
import { Box, styled } from "@mui/system";

export const FormContainer = styled(Box)`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const InputField = styled(Box)`
  width: 100%;
`;

export const ContactButton = styled(Button)`
  width: 100%;
  padding: 1px 3px;
`;
