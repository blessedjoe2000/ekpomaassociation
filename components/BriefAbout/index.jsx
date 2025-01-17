"use client";

import { Box, Container } from "@mui/system";
import { BriefHeading, WelcomeContainer, WelcomeParagraph } from "./styles";
import welcome from "../../public/images/eahwelcome.png";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function BriefAbout() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="brief" style={{ position: "relative" }}>
      <Image
        src="/images/eahgradient.jpg"
        alt="Background"
        fill
        quality={100}
        priority
      />
      <Container>
        <Box>
          <BriefHeading data-aos="fade-down">
            <h2>We Are One Big Family</h2>
          </BriefHeading>
          <WelcomeContainer>
            <div data-aos="fade-right">
              <WelcomeParagraph sx={{ mb: "5px" }}>
                Are you from Esan West Local Government Area in Edo State,
                Nigeria? The Ekpoma Association (EA) of Houston, Texas, warmly
                invites all sons and daughters of Esan West to join our vibrant
                community. As a non-profit, non-political organization, we are
                dedicated to preserving the unique cultural heritage of Esan
                West, fostering unity among our people, and promoting
                socio-economic development both locally and abroad.
              </WelcomeParagraph>

              <WelcomeParagraph>
                By joining the Ekpoma Association, you will become part of a
                supportive network that values our shared history, encourages
                mutual cooperation, and works toward improving the welfare of
                Esan West indigenes. Whether you are passionate about cultural
                preservation, community development, or simply connecting with
                others from home, we welcome you with open arms. Together, we
                can celebrate our identity, strengthen our bonds, and contribute
                meaningfully to the progress of Esan West, wherever we may be.
                Come, let's build a brighter future—together!
              </WelcomeParagraph>
            </div>
            <Box
              sx={{
                width: "100%",
                position: "relative",
                height: {
                  xs: "350px",
                  sm: "400px",
                  md: "410px",
                },
              }}
              data-aos="fade-left"
            >
              <Image
                src={welcome}
                alt="welcome handshake"
                className="welcome-img"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
                priority
              />
            </Box>
          </WelcomeContainer>
        </Box>
      </Container>
    </div>
  );
}
