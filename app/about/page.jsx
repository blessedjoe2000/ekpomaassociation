"use client";

import { BriefHeading, WelcomeContainer } from "@/components/BriefAbout/styles";
import { PhotoSilderHeading } from "@/components/PhotoSlider/styles";
import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Image from "next/image";
import president from "@/public/images/eah_president.jpg";
import vp from "@/public/images/eah_vicepresident.jpg";
import secretary from "@/public/images/eah_secretary.jpg";
import pro from "@/public/images/eah_pro.jpg";
import {
  DuesButton,
  ExecutiveContainer,
  ExecutiveName,
  ExecutiveProfile,
  ExecutiveTitle,
  ImageAndTitle,
  MeetingContainer,
  MissionVisionContainer,
} from "./styles";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <Container sx={{ mt: "8rem" }}>
        <BriefHeading>
          <h2>A Brief Of Us</h2>
        </BriefHeading>
        <Box sx={{ pb: "2rem", pt: "1rem" }}>
          <Typography>
            The Ekpoma Association of Houston, Texas, is a non-profit,
            non-political organization dedicated to fostering unity, cultural
            preservation, and the socio-economic development of the Esan people
            of the Esan West Local Government Area of Edo State Nigeria.
            Established in 2011 to uphold and promote the rich cultural heritage
            of the Esan West ethnic group, the Association seeks to serve as a
            bridge between Esan West indigenes in the diaspora and their
            homeland by encouraging mutual cooperation and support among Esan
            communities, Edo indigenes, and other Nigerian groups both in the
            United States and beyond.
          </Typography>
        </Box>

        <WelcomeContainer sx={{ mb: "5rem" }}>
          <MissionVisionContainer>
            <PhotoSilderHeading>Vision Statement</PhotoSilderHeading>
            <Typography>
              Our vision is to build a vibrant, cohesive, and thriving community
              of Esan West indigenes in the diaspora, where cultural values are
              preserved, unity is fostered, and members contribute meaningfully
              to the progress of Esan West both locally and globally. We aspire
              to be a model association known for cultural preservation,
              humanitarian service, and the empowerment of future generations.
            </Typography>
          </MissionVisionContainer>
          <MissionVisionContainer>
            <PhotoSilderHeading>Mission Statement</PhotoSilderHeading>
            <Typography>
              Our mission is to unite and empower all indigenes of Esan West
              Local Government Area residing in the diaspora by fostering a
              strong sense of community, preserving our rich cultural heritage,
              and promoting the socio-economic well-being of our people. We are
              dedicated to creating opportunities for mutual cooperation,
              supporting charitable initiatives, and strengthening ties with our
              homeland.
            </Typography>
          </MissionVisionContainer>
        </WelcomeContainer>
      </Container>

      <ExecutiveContainer sx={{ py: "2rem" }}>
        <BriefHeading>
          <h3>Our Executives</h3>
        </BriefHeading>
        <ExecutiveProfile>
          <ImageAndTitle>
            <Image
              src={president}
              alt="president"
              width={300}
              height={300}
              className="img"
            />
            <ExecutiveName>Mr. Solomon Aikharaekpen</ExecutiveName>
            <ExecutiveTitle>President</ExecutiveTitle>
          </ImageAndTitle>
          <ImageAndTitle>
            <Image
              src={vp}
              alt="vice president"
              width={300}
              height={300}
              className="img"
            />
            <ExecutiveName>Dr. Deborah Irabor</ExecutiveName>
            <ExecutiveTitle>Vice President</ExecutiveTitle>
          </ImageAndTitle>

          <ImageAndTitle>
            <Image
              src={secretary}
              alt="secretary"
              width={300}
              height={300}
              className="img"
            />
            <ExecutiveName>Mrs. Adesua Penn</ExecutiveName>
            <ExecutiveTitle>Secretary</ExecutiveTitle>
          </ImageAndTitle>
          <ImageAndTitle>
            <Image
              src={pro}
              alt="PRO"
              width={300}
              height={300}
              className="img"
            />

            <ExecutiveName>Mrs Philomena Ohen</ExecutiveName>
            <ExecutiveTitle>PRO</ExecutiveTitle>
          </ImageAndTitle>
        </ExecutiveProfile>
      </ExecutiveContainer>

      <Container>
        <BriefHeading>
          <h3>Our Meetings</h3>
        </BriefHeading>
        <MeetingContainer>
          <Typography>
            The Ekpoma Association of Houston, Texas, meets once a month, every
            <span> first Sunday</span>, from <span>6:00 PM to 8:00 PM</span>.
            Our meetings provide an opportunity for members to connect, discuss
            community initiatives, and plan future activities aimed at
            supporting Esan West indigenes. We encourage new members to join us
            and become part of our vibrant community.
            <span> A monthly due of $20</span> is required from members to help
            fund our programs and support our mission of cultural preservation
            and community development.
          </Typography>
          <Link href="https://buy.stripe.com/4gw2b9a2caZzeiceUY">
            <DuesButton>Click here to pay monthly dues</DuesButton>
          </Link>
        </MeetingContainer>
      </Container>
    </div>
  );
}
