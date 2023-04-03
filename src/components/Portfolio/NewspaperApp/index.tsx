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
  SubContainer,
  SubItem,
} from "../style";
import { TitleHeader, BlurbContainer } from "../style";
import { content, mobileContent, newspaperTech } from "../utils";

const NewspaperApp: React.FC<Props> = ({ c1, c2 }) => {
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
          Newspaper App
        </TitleHeader>
        <ContentContainer
          borderImage={`linear-gradient(
      to bottom, 
      ${c1}, 
      ${c2}
    ) 1 100%;`}
        >
          <BlurbContainer>
            Full CRUD application designed for three distinct user types:
          </BlurbContainer>
          <SubContainer>
            <SubItem>
              ● The general user is able to view articles on the homepage.
            </SubItem>
            <SubItem>
              ● Authors are able to write articles and submit for review.
            </SubItem>
            <SubItem>
              ● The editor is able to approve articles for publication or reject
              those articles.
            </SubItem>
          </SubContainer>
          <TechnologiesContainer>
            {newspaperTech.map((tech, i) => (
              <TechnologyIcon key={i}>{tech}</TechnologyIcon>
            ))}
          </TechnologiesContainer>
          <LinksContainer>
            <Underline>
              <Link
                href="https://newspaper-app-alecdhansen.herokuapp.com/"
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
                View Site
              </Link>
            </Underline>
            <Underline>
              <Link
                href="https://github.com/alecdhansen/django_newspaper_app"
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
export default NewspaperApp;
