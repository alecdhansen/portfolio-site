import { motion } from "framer-motion";
import { Props } from "../../../utils/types";
import {
  BlurbContainer,
  Container,
  ContentContainer,
  Link,
  LinksContainer,
  SubContainer,
  SubItem,
  TechnologiesContainer,
  TechnologyIcon,
  TitleHeader,
  Underline,
} from "../style";
import { NPMTech, content, mobileContent } from "../utils";

const NPM = ({ c1, c2 }: Props) => {
  const mobile = window.innerWidth < 480;
  const contentVariant = mobile ? mobileContent : content;
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <Container variants={contentVariant}>
        <TitleHeader fontSize="75px" lineHeight="4rem">
          React-Native-Confirmation
        </TitleHeader>
        <ContentContainer
          borderImage={`linear-gradient(
      to bottom, 
      ${c1}, 
      ${c2}
    ) 1 100%;`}
        >
          <BlurbContainer>
            NPM package I built for use in my current RN project. This package
            provides a confirmation modal for React Native applications. Check
            it out and let me know what you think!
          </BlurbContainer>
          <TechnologiesContainer>
            {NPMTech.map((tech, i) => (
              <TechnologyIcon key={i}>{tech}</TechnologyIcon>
            ))}
          </TechnologiesContainer>
          <LinksContainer>
            <Underline>
              <Link
                href="https://www.npmjs.com/package/react-native-confirmation"
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
                NPM Package
              </Link>
            </Underline>
            <Underline>
              <Link
                href="https://github.com/alecdhansen/react-native-confirmation"
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
                Github Repo
              </Link>
            </Underline>
          </LinksContainer>
        </ContentContainer>
      </Container>
    </motion.div>
  );
};
export default NPM;
