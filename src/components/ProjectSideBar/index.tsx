import { Props } from "../../utils/types";
import {
  ContentContainer,
  HeaderContent,
  Link,
  LinkContainer,
  ProjectNavContainer,
  Underline,
} from "./style";

const ProjectSideBar: React.FC<Props> = ({ focus, setFocus, c1, c2 }) => {
  const mobile = window.innerWidth < 480;
  const handleFocus = (position: number) => {
    mobile &&
      window.scroll({
        top: 300,
        left: 0,
        behavior: "smooth",
      });
    position === 2 &&
      setTimeout(() => {
        window.scroll({
          top: 300,
          left: 0,
          behavior: "smooth",
        });
      }, 250);

    setFocus(position);
  };
  return (
    <ContentContainer>
      <HeaderContent>My Work</HeaderContent>
      <ProjectNavContainer
        borderImage={`linear-gradient(
        to right,
        ${c1},
        ${c2}
      ) 1 40%;`}
        hover={`linear-gradient(
        to right,
        ${c2},
        ${c1}
      ) 1 40%;`}
      >
        <LinkContainer>
          <Underline
            transform={focus === 2 ? "scale(1.3)" : ""}
            pLeft={focus === 2 ? "27px" : ""}
            mLeft={focus === 2 ? "7px" : ""}
            hPleft={focus === 2 ? "-10px" : "10px"}
          >
            <Link
              onClick={() => handleFocus(2)}
              cursor="pointer"
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
              Freelance Projects
            </Link>
          </Underline>
          <Underline
            transform={focus === 3 ? "scale(1.3)" : ""}
            pLeft={focus === 3 ? "37px" : ""}
            mLeft={focus === 3 ? "7px" : ""}
            hPleft={focus === 3 ? "-10px" : "10px"}
          >
            <Link
              onClick={() => handleFocus(3)}
              cursor="pointer"
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
              Braggem
            </Link>
          </Underline>
          <Underline
            transform={focus === 4 ? "scale(1.4)" : ""}
            pLeft={focus === 4 ? "27px" : ""}
            mLeft={focus === 4 ? "7px" : ""}
            hPleft={focus === 4 ? "-10px" : "10px"}
          >
            <Link
              onClick={() => handleFocus(4)}
              cursor="pointer"
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
              Newspaper App
            </Link>
          </Underline>
          <Underline
            transform={focus === 5 ? "scale(1.3)" : ""}
            pLeft={focus === 5 ? "27px" : ""}
            mLeft={focus === 5 ? "7px" : ""}
            hPleft={focus === 5 ? "-10px" : "10px"}
          >
            <Link
              onClick={() => handleFocus(5)}
              cursor="pointer"
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
              Pixel Perfect
            </Link>
          </Underline>

          <Underline pLeft="" hPleft="0px" hTransform="scale(1)">
            <Link
              cursor="default"
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
              This Website!
            </Link>
          </Underline>
        </LinkContainer>
      </ProjectNavContainer>
    </ContentContainer>
  );
};

export default ProjectSideBar;
