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
  FooterSocialMediaIcons,
  FooterSocialMediaTitle,
} from "./styles";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#b59f78", color: "#fff" }}>
      <FooterContentContainer>
        <Box>
          <FooterSocialMediaTitle>Our Social Media</FooterSocialMediaTitle>
          <FooterSocialMediaIcons>
            <Link href="/">
              <InstagramIcon fontSize="large" sx={{ color: "#DA498D" }} />
            </Link>
            <Link href="/">
              <FacebookIcon fontSize="large" sx={{ color: "#0A5EB0" }} />
            </Link>
            <Link href="/">
              <YouTubeIcon fontSize="large" sx={{ color: "#F72C5B" }} />
            </Link>
            <Link href="/">
              <XIcon fontSize="large" sx={{ color: "#000" }} />
            </Link>
          </FooterSocialMediaIcons>
        </Box>

        <FooterMenuContent>
          <Link href="/about">
            <MenuButton variant="outlined">About</MenuButton>
          </Link>
          <Link href="/">
            <MenuButton variant="outlined">Culture</MenuButton>
          </Link>
        </FooterMenuContent>
        <FooterMenuContent>
          <Link href="/">
            <MenuButton variant="outlined">Gallery</MenuButton>
          </Link>
          <Link href="/">
            <MenuButton variant="outlined">Contact</MenuButton>
          </Link>
        </FooterMenuContent>
        <Link href="/">
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
