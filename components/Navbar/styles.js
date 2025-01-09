import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

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
