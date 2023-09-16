import styled from "styled-components";
import { colors } from "../colors";
import { BoxAnimation } from "../animations";
import { motion } from "framer-motion";

interface Props {
  currentscrollposition: number;
}

export const ProgressFixedStyled = styled(motion.div)`
  display: flex;
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 5;
  border: 5px solid ${colors.red};
  animation: scale-in-center 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  ${BoxAnimation}
  border-radius: 50%;
  padding: 1vh;
  &:hover {
    cursor: pointer;
  }
`;

export const ImageFixedStyled = styled.img<Props>`
  display: flex;
  align-items: center;
  border-radius: 50%;
  justify-content: center;
  width: 8vh;
  height: 8vh;
  @media (max-width: 1024px) {
    width: 6vh;
    height: 6vh;
  }
`;
