"use client";

import { BriefHeading } from "@/components/BriefAbout/styles";
import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { MissionVisionContainer } from "../about/styles";
import { PhotoSilderHeading } from "@/components/PhotoSlider/styles";
import { TownTourProduceContainer } from "./styles";
import esanwestmap from "../../public/images/eahesanwestmap.png";
import Image from "next/image";
import WardsTable from "@/components/WardsTable";

export default function culture() {
  return (
    <div>
      <Container>
        <BriefHeading>
          <h2>Esan West People And Culture</h2>
        </BriefHeading>
        <Box>
          <Typography>
            Esan West is a Local Government Area in Edo State, Nigeria, with its
            administrative headquarters located in the town of Ekpoma. Covering
            a total area of 502 km², Esan West has an estimated population of
            over 190,000 people, comprising more than 60,000 adult males and
            60,000 adult females, according to the 2016 census. With a
            population density of approximately 333.3 people per km², it is one
            of the key regions contributing to the socio-economic growth of Edo
            State.
          </Typography>
          <Typography>
            Esan West is home to the prestigious Ambrose Alli University (AAU),
            Ekpoma, which was founded in 1981 by Professor Ambrose Folorunsho
            Alli, a former governor of Bendel State (now Edo and Delta States).
            The university has since become a center for academic excellence,
            attracting students from across the country and beyond.
          </Typography>
        </Box>
        <Box>
          <Box>
            <Image src={esanwestmap} alt="map of esan west" width={700} />
            <WardsTable />
          </Box>
        </Box>
        <TownTourProduceContainer>
          <MissionVisionContainer>
            <PhotoSilderHeading>Towns and Villages</PhotoSilderHeading>
            <Typography>
              Ekpoma, Iruekpen, Ujemen, Idumebo, Ihumudumu, Uhiele, Emuhi, Ogwa,
              Ekhiro, Ukpenu, Ujoelen Eguare, Emaudo, Egoro Amede, Egoro Naoka,
              Ebhakuala, Ukhun, Idoa, Urohi, Akahio, Illeh, Ekoh-Ine, Ujiogba.
            </Typography>
          </MissionVisionContainer>
          <MissionVisionContainer>
            <PhotoSilderHeading>Agricultural Products</PhotoSilderHeading>
            <Typography>
              Cocoa, Oil palm, Rubber, Kola, Cassava, Cocoyam, Pineapple,
              Plantain, Rice and Citrus fruits, Pepper, Tomatoes.
            </Typography>
          </MissionVisionContainer>
          <MissionVisionContainer>
            <PhotoSilderHeading>Tourist Attractions</PhotoSilderHeading>
            <Typography>
              Commemorative statue of Professor Ambrose Alli, Ibiekuma River and
              Onojie Palaces; Ukhun Shrine, Oghedekpe River, Orosun Water falls
              in Ukhun Kingdom.
            </Typography>
          </MissionVisionContainer>
        </TownTourProduceContainer>
      </Container>
    </div>
  );
}
