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
        <Typography>
          Esan West is a Local Government Area in Edo State, Nigeria, with its
          headquarters in the town of Ekpoma. The area has a population of over
          290,000 people, including more than 90,000 adult males and 80,000
          adult females, according to the 2016 census. Esan West is politically
          divided into 10 wards and covers a land mass of 502 km² (194 sq mi),
          making it one of the prominent regions in Edo State.
        </Typography>
        <Typography sx={{ py: "1rem" }}>
          The people of Esan West are predominantly of the Esan tribe, and many
          are academic and non-academic staff of Ambrose Alli University, owners
          of small and medium enterprises (SMEs), subsistence farmers, and
          others engaged in civil service, trading, transportation, and students
          of Ambrose Alli University. The primary language spoken is Esan, which
          is consistent with the general Esan language spoken across Esanland.
        </Typography>
        <Typography>
          Esan West is home to the prestigious Ambrose Alli University (AAU),
          Ekpoma, which was founded in 1981 by Professor Ambrose Folorunsho
          Alli, a former governor of Bendel State (now Edo and Delta States).
          The university has since become a center for academic excellence,
          attracting students from across the country and beyond.
        </Typography>
        <Typography sx={{ pt: "1rem" }}>
          Ekpoma's traditional leadership is headed by the Onojie, the king of
          the town, whose position is hereditary, passed down from father to
          son. The Onojie,s palace is situated in a community named Eguare. The
          village council, known as Iko-Edion, is led by the Odionwele, the
          eldest member of the community, who presides over matters involving
          the elders. The Edion (elders) are responsible for resolving disputes
          and administering justice in the community. Communication from the
          Onojie is conveyed through the Okhaimon to the Odionwele, who then
          convenes a meeting of elders to discuss and address community matters.
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
