import styled from "styled-components";
import { colors } from "../colors";
import { TitleAnimation } from "../animations/index";
import { fontFamily, fontSizes } from "../fonts";

export const TitleDivComponent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  margin-top: 3vh;
  margin-bottom: 3vh;
  width: 100%;
  height: fit-content;
`;

export const TitleComponentStiled = styled.h1`
  display: flex;
  color: ${colors.white};
  text-shadow: -1px -1px 0 ${colors.red}, 1px -1px 0 ${colors.red},
    1px 1px 0 ${colors.red}, 1px 1px 0 ${colors.red};
  font-family: ${fontFamily.bungee};
  font-size: ${fontSizes.titleWeb};
  text-transform: uppercase;
  ${TitleAnimation}
  animation: focus-in-expand 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  margin: 0;
  @media (max-width: 1024px) {
    font-size: ${fontSizes.titleMobile};
  }
`;
