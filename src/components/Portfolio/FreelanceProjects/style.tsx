import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease-in-out;
  z-index: 50;
  &.visible {
    opacity: 1;
    pointer-events: auto;
  }
`;

export const ModalImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  border: 2px solid var(--offWhite);
  transform: scale(1);
  &.visible {
    opacity: 1;
    pointer-events: auto;
  }
  &.hidden {
    transform: scale(0);
  }
`;
