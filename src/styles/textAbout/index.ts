import styled from "styled-components";
import { colors } from "../colors";
import { fontFamily, fontSizes } from "../fonts";
import { BoxAnimation, TitleAnimation } from "../animations";

export const AboutContainerComponent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 3vh;
  width: 90%;
  height: fit-content;
  @media (max-width: 1024px) {
    align-items: center;
    width: 80%;
  }
`;

export const TextAboutContainerStyled = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: justify;
  color: ${colors.black};
  font-family: ${fontFamily.roboto};
  font-size: ${fontSizes.textWeb};
  background-color: ${colors.white};
  flex-direction: column;
  animation: scale-in-center 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  ${BoxAnimation}
  border-radius: 5px;
  width: 100%;
  min-height: 10vh;
  height: fit-content;
  padding: 3vh;
  font-weight: bold;
  @media (max-width: 1024px) {
    align-items: center;
  }
`;

export const TitleTypewritterComponent = styled.h4`
  display: flex;
  color: ${colors.white};
  font-family: ${fontFamily.roboto};
  font-size: ${fontSizes.subTitleWeb};
  font-weight: bold;
  margin: 0;
  margin-bottom: 3vh;
  ${TitleAnimation}
  animation: focus-in-expand 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  width: 100%;
  @media (max-width: 1024px) {
    font-size: ${fontSizes.subTitleMobile};
  }
`;
