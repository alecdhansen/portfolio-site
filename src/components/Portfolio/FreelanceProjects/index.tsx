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
} from "../style";
import { TitleHeader, BlurbContainer } from "../style";
import { HPSTech, ULTech, cargillTech, content, flikaTech, mobileContent } from "../utils";
import { useState } from "react";

const FreelanceProjects: React.FC<Props> = ({ c1, c2 }) => {
  const mobile = window.innerWidth < 480;
  const contentVariant = mobile ? mobileContent : content;
  const [hovered, setHovered] = useState<boolean>(false);

  // const handleCloseModal = () => {
  //   setSelectedImage(null);
  // };

  // const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
  //   if (e.target === e.currentTarget) {
  //     handleCloseModal();
  //   }
  // };

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
          <ProjectHeader>Flika</ProjectHeader>
          <BlurbContainer>
            I'm currently working for{" "}
            <CompanyTag href="https://purplewrendigital.com/" target="_blank">
              Purple Wren Digital
            </CompanyTag>{" "}
            on Flika. We recently released V1 and I’d love for you to try out the app and let me know what you think! If you’re on an iPhone, you can download it from the link below.
            Coming soon to the Google Play store!
          </BlurbContainer>
          <TechnologiesContainer>
            {flikaTech.map((tech: string, i: number) => (
              <TechnologyIcon key={i}>{tech}</TechnologyIcon>
            ))}
          </TechnologiesContainer>
          <LinksContainer>
            <Underline>
              <Link
                href="https://apps.apple.com/us/app/flika-real-estate/id6448050206"
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
                Flika - Apple App Store
              </Link>
            </Underline>
          </LinksContainer>
        </ProjectContainer>
        <div style={{ marginBlock: "50px" }} />
        <ProjectContainer>
          <ProjectHeader onMouseOver={(e) => setHovered(true)}>
            Agricultural Sales Application
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
                href="https://uled.io/"
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
                Universal Ledger
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
                href="https://hps.netlify.app/"
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
                Hansen Production Studios
              </Link>
            </Underline>
          </LinksContainer>
        </ProjectContainer>
      </ContentContainer>
    </Container>
  );
};
export default FreelanceProjects;
