"use client";

import { Box } from "@mui/system";
import Link from "next/link";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import { DonateButton, MenuButton } from "../Navbar/styles";
import { Divider } from "@mui/material";
import {
  FooterBottonContent,
  FooterContentContainer,
  FooterMenuContent,
} from "./styles";
import SocialMedia from "../SocialMedia";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#b59f78", color: "#fff" }}>
      <FooterContentContainer>
        <SocialMedia />
        <FooterMenuContent>
          <Link href="/about">
            <MenuButton variant="outlined">About</MenuButton>
          </Link>
          <Link href="/culture">
            <MenuButton variant="outlined">Culture</MenuButton>
          </Link>
        </FooterMenuContent>
        <FooterMenuContent>
          <Link href="/gallery">
            <MenuButton variant="outlined">Gallery</MenuButton>
          </Link>
          <Link href="/contact">
            <MenuButton variant="outlined">Contact</MenuButton>
          </Link>
        </FooterMenuContent>
        <Link href="/https://buy.stripe.com/8wMcPN2zKebL8XSfZ1">
          <DonateButton variant="contained">
            Donate
            <VolunteerActivismRoundedIcon fontSize="small" />
          </DonateButton>
        </Link>
      </FooterContentContainer>
      <Divider sx={{ backgroundColor: "#fff", height: "2px" }} />

      <FooterBottonContent>
        Ekpoma Association of Houston. ©{new Date().getFullYear()} All Rights
        Reserved.
      </FooterBottonContent>
    </Box>
  );
}
