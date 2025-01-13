import { Box, styled } from "@mui/system";
import { Button } from "@mui/material";

export const MenuButton = styled(Button)({
  color: "#fff",
  borderColor: "#fff",

  "&:hover": {
    backgroundColor: "#118B50",
    borderColor: "#fff",
    color: "#fff",
    boxShadow: "none",
  },
});

export const DonateButton = styled(Button)({
  display: "flex",
  alignItems: "center",
  gap: "5px",
  color: "#fff",
  backgroundColor: "#118B50",
  textDecoration: "none",

  "&:hover": {
    backgroundColor: "#FBF8EF",
    color: "#118B50",
    boxShadow: "none",
  },
});

export const DrawerContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: #b59f78;
  padding: 1rem 0 2rem 0;
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
