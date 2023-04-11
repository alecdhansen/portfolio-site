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
} from "../style";
import { TitleHeader, BlurbContainer } from "../style";
import { ULTech, cargillTech, content, mobileContent } from "../utils";

const FreelanceProjects: React.FC<Props> = ({ c1, c2 }) => {
  const mobile = window.innerWidth < 480;
  const contentVariant = mobile ? mobileContent : content;
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <Container variants={contentVariant}>
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
          <ProjectHeader>React Native Application</ProjectHeader>
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
          <div style={{ marginBlock: "50px" }} />
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
        </ContentContainer>
      </Container>
    </motion.div>
  );
};
export default FreelanceProjects;
