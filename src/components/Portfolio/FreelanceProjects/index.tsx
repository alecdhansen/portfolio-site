import { motion } from "framer-motion";
import { Props } from "../../../utils/types";
import {
  Container,
  LinksContainer,
  TechnologiesContainer,
  TechnologyIcon,
  Link,
  Underline,
  ContentContainer,
  ProjectHeader,
  CompanyTag,
  ProjectContainer,
  ProjectHeaderText,
} from "../style";
import { TitleHeader, BlurbContainer } from "../style";
import { HPSTech, ULTech, cargillTech, content, mobileContent } from "../utils";
import { useEffect, useState } from "react";
import { ModalContainer, ModalImage } from "./style";
import image from "../../../assets/images/braggem.png";

const FreelanceProjects: React.FC<Props> = ({ c1, c2 }) => {
  const mobile = window.innerWidth < 480;
  const contentVariant = mobile ? mobileContent : content;
  const [hovered1, setHovered1] = useState<boolean>(false);
  const [hovered2, setHovered2] = useState<boolean>(false);
  const [hovered3, setHovered3] = useState<boolean>(false);

  const handleCloseModal = () => {
    setHovered1(false);
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
      setHovered1(false);
    }
  };

  useEffect(() => {
    console.log({ hovered1 });
    hovered1 ? (document.body.style.position = "fixed") : "initial";
    hovered1 ? (document.body.style.top = `-${window.scrollY}px`) : "0px";
    !hovered1 ? (document.body.style.position = "initial") : "fixed";
    !hovered1 ? (document.body.style.top = "0px") : `-${window.scrollY}px`;
  }, [hovered1]);

  return (
    <Container
      variants={contentVariant}
      initial="offscreen"
      whileInView="onscreen"
    >
      <TitleHeader fontSize="80px" lineHeight="4rem">
        Freelance Projects
      </TitleHeader>

      <ContentContainer
        borderImage={`linear-gradient(
      to bottom, 
      ${c1}, 
      ${c2}
    ) 1 100%;`}
      >
        <ProjectContainer>
          <ModalContainer
            onClick={handleOutsideClick}
            className={hovered1 ? "visible" : "hidden"}
          >
            {hovered1 && (
              <ModalImage
                src={image}
                alt="Modal Image"
                loading="lazy"
                onClick={handleCloseModal}
                className={hovered1 ? "visible" : "hidden"}
              />
            )}
          </ModalContainer>
          <ProjectHeader>
            <ProjectHeaderText onMouseOver={() => setHovered1(true)}>
              React Native Application
            </ProjectHeaderText>
          </ProjectHeader>
          <BlurbContainer>
            I worked with{" "}
            <CompanyTag href="https://purplewrendigital.com/" target="_blank">
              Purple Wren Digital
            </CompanyTag>{" "}
            and{" "}
            <CompanyTag href="https://nicer.io/" target="_blank">
              Nicer Studio
            </CompanyTag>{" "}
            to build an internal sales application for one of the largest
            privately-owned companies in the world. Ask me more about this
            project!
          </BlurbContainer>
          <TechnologiesContainer>
            {cargillTech.map((tech: string, i: number) => (
              <TechnologyIcon key={i}>{tech}</TechnologyIcon>
            ))}
          </TechnologiesContainer>
          <LinksContainer>
            <Underline>
              <Link
                href="https://www.linkedin.com/feed/update/urn:li:activity:7046133779664408576/"
                target="_blank"
                borderImage={`linear-gradient(
        to left,
        ${c1},
        ${c2}
      ) 1 10%;`}
                hover={`linear-gradient(
        to left,
        ${c2},
        ${c1}
      ) 1 10%;`}
              >
                Purple Wren Digital's write up
              </Link>
            </Underline>
          </LinksContainer>
        </ProjectContainer>
        <div style={{ marginBlock: "50px" }} />
        <ProjectContainer>
          <ProjectHeader>Universal Ledger</ProjectHeader>
          <BlurbContainer>
            I worked with a small design team and partner web developer to bring
            Universal Ledger's landing page to life. One thing I'm most proud
            of: I personally engineered scroll animation functionality and
            optimized performance of the components.
          </BlurbContainer>
          <TechnologiesContainer>
            {ULTech.map((tech: string, i: number) => (
              <TechnologyIcon key={i}>{tech}</TechnologyIcon>
            ))}
          </TechnologiesContainer>
          <LinksContainer>
            <Underline>
              <Link
                // href="https://uled.netlify.app/"
                target="_blank"
                borderImage={`linear-gradient(
        to left,
        ${c1},
        ${c2}
      ) 1 10%;`}
                hover={`linear-gradient(
        to left,
        ${c2},
        ${c1}
      ) 1 10%;`}
              >
                Launching soon!
              </Link>
            </Underline>
          </LinksContainer>
        </ProjectContainer>
        <div style={{ marginBlock: "50px" }} />
        <ProjectContainer>
          <ProjectHeader>Hansen Production Studios</ProjectHeader>
          <BlurbContainer>
            This was a solo project. I worked with the client to reimagine his
            business website, and I think it was a huge success!
          </BlurbContainer>
          <TechnologiesContainer>
            {HPSTech.map((tech: string, i: number) => (
              <TechnologyIcon key={i}>{tech}</TechnologyIcon>
            ))}
          </TechnologiesContainer>
          <LinksContainer>
            <Underline>
              <Link
                // href="https://hps.netlify.app/"
                target="_blank"
                borderImage={`linear-gradient(
        to left,
        ${c1},
        ${c2}
      ) 1 10%;`}
                hover={`linear-gradient(
        to left,
        ${c2},
        ${c1}
      ) 1 10%;`}
              >
                Launching soon!
              </Link>
            </Underline>
          </LinksContainer>
        </ProjectContainer>
      </ContentContainer>
    </Container>
  );
};
export default FreelanceProjects;
