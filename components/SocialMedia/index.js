import { Box } from "@mui/system";
import React from "react";
import {
  FooterSocialMediaIcons,
  FooterSocialMediaTitle,
} from "../Footer/styles";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";

export default function SocialMedia() {
  return (
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
  );
}
