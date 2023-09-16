import styled from "styled-components";
import { colors } from "../colors";
import { parallaxStars, sliderShapeAnimation } from "../animations";

export const StarBackgroundContainer = styled.div`
  position: absolute;
  top: 150vh;
  left: 0;
  width: 100%;
  height: 100vh;
  pointer-events: none;
  z-index: 0;
  background: ${colors.red};
`;

export const Star = styled.div`
  position: absolute;
  background: ${colors.white};
  width: 5px;
  height: 5px;
  border-radius: 50%;
  animation: ${parallaxStars} 10s linear infinite;
  left: ${() => Math.random() * 100}%;
  top: ${() => Math.random() * 100}%;
  opacity: ${() => Math.random()};
  transform: scale(${() => Math.random()});
`;

export const SliderThumbBefore = styled.div`
  position: absolute;
  content: "";
  right: 10%;
  top: 60%;
  width: 450px;
  height: 450px;
  background: ${colors.red};
  border-radius: 62% 47% 82% 35% / 45% 45% 80% 66%;
  will-change: border-radius, transform, opacity;
  animation: ${sliderShapeAnimation} 5s linear infinite;
  display: block;
  z-index: 0;
  pointer-events: none;
  -webkit-animation: ${sliderShapeAnimation} 5s linear infinite;
`;
