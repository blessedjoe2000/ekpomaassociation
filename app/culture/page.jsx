"use client";

import { BriefHeading } from "@/components/BriefAbout/styles";
import { Divider, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { MissionVisionContainer } from "../about/styles";
import { PhotoSilderHeading } from "@/components/PhotoSlider/styles";
import {
  MapWardTableContainer,
  ProduceAndTour,
  TownTourProduceContainer,
} from "./styles";
import Image from "next/image";
import WardsTable from "@/components/WardsTable";

import esanwestmap from "../../public/images/eahesanwestmap.png";
import market from "../../public/images/eahmarket.png";

export default function culture() {
  return (
    <Container sx={{ mt: "10rem" }}>
      <BriefHeading>
        <h2>Esan West People And Culture</h2>
      </BriefHeading>
      <Box sx={{ py: "2rem" }}>
        <Typography sx={{ pb: "1rem" }}>
          Esan West is a Local Government Area in Edo State, Nigeria, with its
          administrative headquarters located in the town of Ekpoma. Covering a
          total area of 502 km², Esan West has an estimated population of over
          190,000 people, comprising more than 60,000 adult males and 60,000
          adult females, according to the 2016 census. With a population density
          of approximately 333.3 people per km², it is one of the key regions
          contributing to the socio-economic growth of Edo State.
        </Typography>
        <Typography>
          Esan West is home to the prestigious Ambrose Alli University (AAU),
          Ekpoma, which was founded in 1981 by Professor Ambrose Folorunsho
          Alli, a former governor of Bendel State (now Edo and Delta States).
          The university has since become a center for academic excellence,
          attracting students from across the country and beyond.
        </Typography>
      </Box>

      <MapWardTableContainer>
        <Image
          src={esanwestmap}
          alt="map of esan west"
          style={{ width: "100%", height: "auto" }}
        />
        <WardsTable />
      </MapWardTableContainer>
      <Divider />

      <TownTourProduceContainer>
        <Box>
          <ProduceAndTour>
            <PhotoSilderHeading>Agricultural Products</PhotoSilderHeading>
            <Typography>
              Cocoa, Oil palm, Rubber, Kola, Cassava, Cocoyam, Pineapple,
              Plantain, Rice and Citrus fruits, Pepper, Tomatoes.
            </Typography>
          </ProduceAndTour>
          <MissionVisionContainer>
            <PhotoSilderHeading>Tourist Attractions</PhotoSilderHeading>
            <Typography>
              Commemorative statue of Professor Ambrose Alli, Ibiekuma River and
              Onojie Palaces; Ukhun Shrine, Oghedekpe River, Orosun Water falls
              in Ukhun Kingdom.
            </Typography>
          </MissionVisionContainer>
        </Box>
        <Box>
          <Image
            src={market}
            alt="market"
            style={{ width: "100%", height: "auto" }}
            className="market"
          />
        </Box>
      </TownTourProduceContainer>
    </Container>
  );
}
