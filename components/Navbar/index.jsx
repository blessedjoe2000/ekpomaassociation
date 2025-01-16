"use client";

import { Stack, useMediaQuery } from "@mui/material";
import logo from "../../public/images/ekpomaassologo.png";
import Link from "next/link";
import Image from "next/image";
import {
  DonateButton,
  DrawerContainer,
  DrawerMenu,
  MenuButton,
  MobileMenuLogoContainer,
} from "./styles";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Navbar() {
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
    <div className="navbar-container">
      {isMobile ? (
        <nav className="navbar">
          <Link href="/">
            <Image
              src={logo}
              alt="logo ekpoma association of houston"
              width={100}
              height={100}
            />
          </Link>
          <Stack
            direction="row"
            spacing={{
              xs: 1,
              sm: 1,
              md: 5,
            }}
          >
            <Link href="/">
              <MenuButton variant="outlined">Home</MenuButton>
            </Link>
            <Link href="/about">
              <MenuButton variant="outlined">About</MenuButton>
            </Link>
            <Link href="/culture">
              <MenuButton variant="outlined">Culture</MenuButton>
            </Link>
            <Link href="/gallery">
              <MenuButton variant="outlined">Gallery</MenuButton>
            </Link>
            <Link href="/contact">
              <MenuButton variant="outlined">Contact</MenuButton>
            </Link>
          </Stack>

          <Link href="/https://buy.stripe.com/8wMcPN2zKebL8XSfZ1">
            <DonateButton variant="contained">
              Donate
              <VolunteerActivismRoundedIcon fontSize="small" />
            </DonateButton>
          </Link>
        </nav>
      ) : (
        <Box
          sx={{
            backgroundColor: "#b59f78",
            position: "fixed",
            width: "100%",
            top: 0,
            zIndex: 500,
            padding: "5px",
          }}
        >
          <Box
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={[
              {
                mx: 2,
              },
            ]}
          >
            <MobileMenuLogoContainer>
              <MenuIcon sx={{ color: "#fff" }} onClick={handleDrawerOpen} />
              <Link href="/" onClick={handleDrawerClose}>
                <Image
                  src={logo}
                  alt="logo ekpoma association of houston"
                  width={100}
                  height={100}
                />
              </Link>
              <MenuIcon sx={{ color: "transparent" }} />
            </MobileMenuLogoContainer>
          </Box>

          <Drawer
            sx={{
              width: "50vw",
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: "50vw",
                boxSizing: "border-box",
                height: {
                  xs: "415px",
                  sm: "423px",
                },
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <DrawerHeader
              sx={{ backgroundColor: "#b59f78" }}
              onClick={handleDrawerClose}
            >
              <IconButton>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon sx={{ color: "#fff" }} />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <DrawerContainer>
              <DrawerMenu spacing={5} sx={{ pt: "10px" }}>
                <Link href="/" onClick={handleDrawerClose}>
                  <MenuButton variant="outlined">Home</MenuButton>
                </Link>
                <Link href="/about" onClick={handleDrawerClose}>
                  <MenuButton variant="outlined">About</MenuButton>
                </Link>
                <Link href="/culture" onClick={handleDrawerClose}>
                  <MenuButton variant="outlined">Culture</MenuButton>
                </Link>
                <Link href="/gallery" onClick={handleDrawerClose}>
                  <MenuButton variant="outlined">Gallery</MenuButton>
                </Link>
                <Link href="/contact" onClick={handleDrawerClose}>
                  <MenuButton variant="outlined">Contact</MenuButton>
                </Link>
              </DrawerMenu>
              <Link href="/" onClick={handleDrawerClose}>
                <DonateButton variant="contained">
                  Donate
                  <VolunteerActivismRoundedIcon fontSize="small" />
                </DonateButton>
              </Link>
            </DrawerContainer>
          </Drawer>
        </Box>
      )}
    </div>
  );
}
