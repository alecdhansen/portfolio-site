import styled from "styled-components";

export const Button = styled.div`
  background: none;
  border: none;
  padding: 0px 10px;
  transition: all 0.2s linear;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  &:hover {
    transform: scale(1.2);
    transition: all 0.2s linear;
  }
  @media (max-width: 445px) {
    &:hover {
      transform: scale(1);
    }
  }
`;
