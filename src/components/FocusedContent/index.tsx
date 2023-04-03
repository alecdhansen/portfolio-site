import { Props } from "../../utils/types";
import AboutMe from "../AboutMe";
import Braggem from "../Portfolio/Braggem";
import FreelanceProjects from "../Portfolio/FreelanceProjects";
import NewspaperApp from "../Portfolio/NewspaperApp";
import PixelPerfect from "../Portfolio/PixelPerfect";
import { ContentContainer } from "./style";

const FocusedContent: React.FC<Props> = ({ focus, c1, c2 }) => {
  let content;
  if (focus === 1) {
    content = <AboutMe c1={c1} c2={c2} />;
  }
  if (focus === 2) {
    content = <Braggem c1={c1} c2={c2} />;
  }
  if (focus === 3) {
    content = <NewspaperApp c1={c1} c2={c2} />;
  }
  if (focus === 4) {
    content = <PixelPerfect c1={c1} c2={c2} />;
  }
  if (focus === 5) {
    content = <FreelanceProjects c1={c1} c2={c2} />;
  }
  return <ContentContainer>{content}</ContentContainer>;
};

export default FocusedContent;
