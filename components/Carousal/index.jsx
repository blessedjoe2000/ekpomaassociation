"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import imageOne from "../../public/images/carousal/eahimage1.jpg";
import imageTwo from "../../public/images/carousal/eahimage2.jpg";
import imageThree from "../../public/images/carousal/eahimage3.jpg";
import prevDisabled from "../../public/images/carousal/previous-disabled.svg";
import nextDisabled from "../../public/images/carousal/next-disabled.svg";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  CarousalButton,
  CarousalContainer,
  CarousalControls,
  CarousalImagesContainer,
  CarousalNextButton,
  CarousalParagraph,
  CarousalPrevButton,
  CarousalTitleContainer,
} from "./styles";
import Link from "next/link";

export default function Carousal() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitionDirection, setTransitionDirection] = useState("next");

  const handleNextClick = () => {
    setTransitionDirection("next");
    setActiveIndex((prevIndex) =>
      prevIndex === 2 ? prevIndex : prevIndex + 1
    );
  };

  const handlePreviousClick = () => {
    setTransitionDirection("previous");
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };

  const carousalContent = [
    {
      title: "We Are Closer to You Than You Think",
      description:
        "The Esan West community is an active and vibrant part of society, committed to fostering unity and promoting our shared heritage. We are more than just neighbors; we are a family that values support, culture, and togetherness. Wherever you find yourself, you are never far from an Esan brother or sister.",
      link: "/about",
    },
    {
      title: "Honoring an Icon: Ambrose Alli",
      description:
        "Prof. Ambrose Alli, a revered son of Esan West, was a trailblazing leader and the first civilian governor of the old Bendel State. His tireless efforts in expanding access to education, healthcare, and infrastructure have left an indelible mark on our history. We proudly carry on his legacy by advocating for progress and excellence.",
      link: "/culture",
    },
    {
      title: "Celebrating Esan Tradition and Culture",
      description:
        "Our traditions define us, and we take pride in preserving the rich culture of Esan. From our colorful festivals to our unique language and storytelling, we are dedicated to keeping our heritage alive. Through our gatherings, we ensure that the beauty of Esan culture thrives, connecting past, present, and future generations.",
      link: "/culture",
    },
  ];

  const textVariants = {
    hidden: {
      opacity: 0,
      x: transitionDirection === "next" ? 100 : -100,
      transition: { duration: "0.5", ease: "easeInOut" },
    },

    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: "0.5", ease: "easeInOut" },
    },
  };

  const textContainerVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };
  return (
    <CarousalContainer>
      <motion.div
        className="carousalContentContainer"
        key={activeIndex}
        variants={textContainerVariant}
        initial="hidden"
        animate="visible"
      >
        <CarousalTitleContainer>
          <motion.h1 variants={textVariants}>
            {carousalContent[activeIndex].title}
          </motion.h1>
        </CarousalTitleContainer>
        <CarousalParagraph>
          <motion.p variants={textVariants}>
            {carousalContent[activeIndex].description}
          </motion.p>
        </CarousalParagraph>
        <motion.div variants={textVariants}>
          <Link href={`${carousalContent[activeIndex].link}`}>
            <CarousalButton>Learn More</CarousalButton>
          </Link>
        </motion.div>
      </motion.div>
      <CarousalImagesContainer>
        <motion.div
          className="carousal-first-img"
          initial={{ opacity: 1 }}
          animate={{
            opacity: activeIndex === 0 ? 1 : 0,
            x: activeIndex === 0 ? "0px" : "96px",
            scale: activeIndex === 0 ? 1 : 1.2,
          }}
          transition={{ duration: 0.5, delay: 0, ease: "easeInOut" }}
        >
          <Image
            className="firstImg"
            src={imageOne}
            alt="men wearing igbulu"
            priority
          />
        </motion.div>
        <motion.div
          className="carousal-second-img"
          initial={{ opacity: 0 }}
          animate={{
            opacity: activeIndex === 0 ? 0.66 : activeIndex === 1 ? 1 : 0,
            x: activeIndex === 0 ? "-96px" : activeIndex === 1 ? "0px" : "96px",
            scale: activeIndex === 0 ? 0.8 : activeIndex === 1 ? 1 : 1.2,
          }}
          transition={{ duration: 0.5, delay: 0, ease: "easeInOut" }}
        >
          <Image className="secondImg" src={imageTwo} alt="Ambrose Alli" />
        </motion.div>
        <motion.div
          className="carousal-third-img"
          initial={{ opacity: 0 }}
          animate={{
            opacity: activeIndex === 0 ? 0.33 : activeIndex === 1 ? 0.66 : 1,
            x: activeIndex === 0 ? "-192px" : activeIndex === 1 ? "-96px" : 0,
            scale: activeIndex === 0 ? 0.6 : activeIndex === 1 ? 0.8 : 1,
          }}
          transition={{ duration: 0.5, delay: 0, ease: "easeInOut" }}
        >
          <Image
            className="thirdImg"
            src={imageThree}
            alt="traditional beads"
          />
        </motion.div>
        <CarousalControls>
          <div onClick={handlePreviousClick}>
            {activeIndex === 0 ? (
              <Image
                src={prevDisabled}
                alt="previous button"
                width={30}
                className="disabled-img"
                sx={{
                  opacity: 1,
                  transform: "translateY(0)",
                  transition: "opacity 0.3s ease, transform 0.3s ease",
                }}
              />
            ) : (
              <CarousalPrevButton>
                <ArrowBackIcon
                  sx={{
                    color: "#FFF4B7",
                    fontSize: "3rem",
                    transition: "color 0.15s ease",
                  }}
                />
              </CarousalPrevButton>
            )}
          </div>
          <div onClick={handleNextClick}>
            {activeIndex === 2 ? (
              <Image
                src={nextDisabled}
                alt="previous button"
                width={30}
                className="disabled-img"
                style={{
                  opacity: 0.5,
                  transition: "opacity 0.3s ease",
                }}
              />
            ) : (
              <CarousalNextButton
                sx={{
                  opacity: 1,
                  transform: "translateY(0)",
                  transition: "opacity 0.3s ease, transform 0.3s ease",
                }}
              >
                <ArrowForwardIcon
                  sx={{
                    color: "#FFF4B7",
                    fontSize: "3rem",
                    transition: "color 0.15s ease",
                  }}
                />
              </CarousalNextButton>
            )}
          </div>
        </CarousalControls>
      </CarousalImagesContainer>
    </CarousalContainer>
  );
}
