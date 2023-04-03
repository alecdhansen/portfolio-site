import styled from "styled-components";
import { motion } from "framer-motion";
import {
  TitleProps,
  ContentContainerProps,
  UnderlineProps,
  TechIconProps,
  LinkProps,
} from "./types";

export const Container = styled(motion.div)`
  margin-top: 180px;
  margin-right: 10px;
`;

export const TitleHeader = styled.h2<TitleProps>`
  font-size: ${({ fontSize }) => fontSize};
  margin: 0 0 50px 0;
  pointer-events: none;
  flex-wrap: wrap;
  line-height: ${({ lineHeight }) => lineHeight};
  @media (min-width: 401px) and (max-width: 800px) {
    width: 12vw;
    line-height: ${({ lineHeight }) => lineHeight};
  }
  @media (max-width: 400px) {
    font-size: 14vw;
    line-height: ${({ lineHeight }) => lineHeight};
    margin: 0px;
  }
`;

export const ContentContainer = styled.div<ContentContainerProps>`
  border-image: ${({ borderImage }) => borderImage};
  border-left-width: 3px;
  border-left-style: solid;
`;

export const BlurbContainer = styled.p`
  padding: 0 0 0 30px;
  font-size: 18px;
`;

export const SubContainer = styled.div`
  padding-left: 60px;
  margin-bottom: 30px;
`;
export const SubItem = styled.p`
  margin: 0px;
`;

export const TechnologiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 0 0 30px;
`;
export const TechnologyIcon = styled.span<TechIconProps>`
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.color};
  border: 1px solid ${({ theme }) => theme.color};
  padding: 2px 6px;
  border-radius: 10px;
  font-size: 11px;
  margin: 0 10px 5px 0;
  font-weight: bold;
  pointer-events: none;
  @media (prefers-color-scheme: light) {
    background-color: var(--light);
    color: var(--dark);
    border: 1px solid var(--dark);
  }
`;

export const LinksContainer = styled.div`
  padding: 10px 0 0 30px;
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

export const Underline = styled.div<UnderlineProps>`
  margin: 0px 30px 10px 30px;
  @media (max-width: 1274px) {
    margin: ${({ margin }) => margin};
  }
`;

export const Link = styled.a<LinkProps>`
  border-image: ${({ borderImage }) => borderImage};
  border-bottom-width: 3px;
  border-bottom-style: solid;
  font-size: 18px;
  line-height: 40px;
  margin: 10px 0 10px 0;
  cursor: pointer;
  &:hover {
    border-image: ${({ hover }) => hover};
  }
  @media (max-width: 1274px) {
    font-size: ${({ fontSize }) => fontSize};
    margin: ${({ margin }) => margin};
    padding: 0;
  }
`;

export const ProjectHeader = styled.h2`
  padding: 0 0 0 30px;
`;

export const CompanyTag = styled.a`
  text-decoration: Underline;
`;
