"use client";

import { Stack } from "@mui/material";
import logo from "../../public/images/ekpomaassologo.png";
import Link from "next/link";
import Image from "next/image";
import { DonateButton, MenuButton } from "./styles";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/">
        <Image
          src={logo}
          alt="logo ekpoma association of houston"
          width={100}
          height={100}
        />
      </Link>
      <Stack direction="row" spacing={5}>
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
      </Stack>

      <Link href="/">
        <DonateButton variant="contained">
          Donate
          <VolunteerActivismRoundedIcon fontSize="small" />
        </DonateButton>
      </Link>
    </nav>
  );
}
