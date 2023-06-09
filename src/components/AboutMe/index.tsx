import {
  AboutMeContainer,
  BlurbContainer,
  Link,
  GreetingHeader,
  Underline,
} from "./style";
import { Props } from "../../utils/types";
import Form from "../Form";
import { motion } from "framer-motion";
import { content, mobileContent } from "../Portfolio/utils";
import { CompanyTag } from "../Portfolio/style";

const AboutMe: React.FC<Props> = ({ c1, c2 }) => {
  const mobile = window.innerWidth < 480;
  const contentVariant = mobile ? mobileContent : content;
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <AboutMeContainer variants={contentVariant}>
        <GreetingHeader>Hello There!</GreetingHeader>
        <BlurbContainer
          borderImage={`linear-gradient(
      to bottom, 
      ${c1}, 
      ${c2}
    ) 1 100%;`}
        >
          My name is Alec Hansen. Currently, I'm a freelance software developer
          residing in Greenville, South Carolina, USA. Coding has changed my
          life! My previous career gave me a strong background in client care
          and team management. I now use these skills to build web and mobile
          applications with a great attention to detail and I (when with a team)
          collaborate thoughtfully and efficiently.
          <br />
          <br />
          I'm currently working full-time on a React Native application for{" "}
          <CompanyTag href="https://purplewrendigital.com/" target="_blank">
            Purple Wren Digital.
          </CompanyTag>{" "}
        </BlurbContainer>
        <Underline>
          <Link
            href="mailto:alecdhansen@gmail.com"
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
            Message Me!
          </Link>
        </Underline>
        {/* <Form /> */}
      </AboutMeContainer>
    </motion.div>
  );
};
export default AboutMe;
