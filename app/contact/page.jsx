"use client";

import { BriefHeading } from "@/components/BriefAbout/styles";
import ContactForm from "@/components/ContactForm";
import { Box, Container } from "@mui/system";
import "aos/dist/aos.css";
import {
  AddressContainer,
  AddressHeading,
  AddressPO,
  AddressText,
  ContactContainer,
  PhoneOrMailAddressPO,
} from "./styles";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Divider } from "@mui/material";

export default function Contact() {
  return (
    <Container
      sx={{ mt: { xs: "7rem", sm: "9rem" }, mb: { xs: "2rem", sm: "4rem" } }}
    >
      <BriefHeading sx={{ mb: { xs: "1rem", sm: "1rem", md: "2rem" } }}>
        <h3>Contact Us</h3>
      </BriefHeading>
      <ContactForm />
      <Divider />
      <ContactContainer>
        <AddressContainer>
          <AddressHeading>Meeting Address</AddressHeading>
          <PhoneOrMailAddressPO>
            <Box sx={{ color: "#118B50" }}>
              <PhoneIphoneIcon />
            </Box>
            <AddressText>123-456-7890</AddressText>
          </PhoneOrMailAddressPO>

          <PhoneOrMailAddressPO>
            <Box sx={{ color: "#118B50" }}>
              <LocationOnOutlinedIcon />
            </Box>
            <AddressPO className="flex flex-col">
              <AddressText>14829 Bellaire Blvd. Suite 18A, </AddressText>
              <AddressText>Houston, TX. 77083</AddressText>
            </AddressPO>
          </PhoneOrMailAddressPO>
        </AddressContainer>
        <AddressContainer>
          <AddressHeading>Mailing Address</AddressHeading>
          <PhoneOrMailAddressPO>
            <Box sx={{ color: "#118B50" }}>
              <ArchiveOutlinedIcon />
            </Box>

            <AddressPO className="flex flex-col">
              <AddressText>P. O. Box 2013, Alief,</AddressText>
              <AddressText> TX 77411-2013</AddressText>
            </AddressPO>
          </PhoneOrMailAddressPO>
          <PhoneOrMailAddressPO>
            <Box sx={{ color: "#118B50" }}>
              <MailOutlineIcon />
            </Box>

            <AddressText>info@eahhouston.org</AddressText>
          </PhoneOrMailAddressPO>
        </AddressContainer>
      </ContactContainer>
    </Container>
  );
}
