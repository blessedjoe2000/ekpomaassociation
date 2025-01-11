"use client";

import { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Link from "next/link";
import { DonateButton, MenuButton } from "@/components/Navbar/styles";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import { DrawerContainer, DrawerMenu, MobileMenuLogoContainer } from "./styles";
import { useMediaQuery } from "@mui/system";
import Image from "next/image";
import logo from "../../public/images/ekpomaassologo.png";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function culture() {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.up("769"));
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ backgroundColor: "#b59f78" }}>
      <Box
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={[
          {
            ml: 2,
          },
          open && { display: "none" },
        ]}
      >
        <MobileMenuLogoContainer>
          <MenuIcon sx={{ color: "#fff" }} />
          <Link href="/">
            <Image
              src={logo}
              alt="logo ekpoma association of houston"
              width={100}
              height={100}
            />
          </Link>
          <Box></Box>
        </MobileMenuLogoContainer>
      </Box>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{ backgroundColor: "#b59f78" }}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon sx={{ color: "#fff" }} />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <DrawerContainer>
          <DrawerMenu spacing={5}>
            <Link href="/">
              <MenuButton variant="outlined">Home</MenuButton>
            </Link>
            <Link href="/">
              <MenuButton variant="outlined">About</MenuButton>
            </Link>
            <Link href="/">
              <MenuButton variant="outlined">Culture</MenuButton>
            </Link>
            <Link href="/">
              <MenuButton variant="outlined">Contact</MenuButton>
            </Link>
          </DrawerMenu>
          <Link href="/">
            <DonateButton variant="contained">
              Donate
              <VolunteerActivismRoundedIcon fontSize="small" />
            </DonateButton>
          </Link>
        </DrawerContainer>
      </Drawer>
    </Box>
  );
}
