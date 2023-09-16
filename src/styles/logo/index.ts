import styled from "styled-components";
import { colors } from "../colors";
import { fontFamily, fontSizes } from "../fonts";
import { BoxAnimation } from "../animations";

export const ConatinerLogoStyled = styled.div`
  display: flex;
  width: 90%;
  height: fit-content;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  animation: scale-in-center 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  ${BoxAnimation}
  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const LogoStyled = styled.img`
  display: flex;
  align-items: center;
  border-radius: 5px;
  justify-content: center;
  border-radius: 5px;
  border: 2px solid ${colors.red};
  width: 15vh;
  height: 15vh;
  @media (max-width: 1024px) {
    width: 8vh;
    height: 8vh;
  }
`;

export const AuxColumStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextLogoStyled = styled.h3`
  display: flex;
  font-family: ${fontFamily.bungee};
  font-size: ${fontSizes.subTitleWeb};
  color: ${colors.white};
  text-shadow: -1px -1px 0 ${colors.red}, 1px -1px 0 ${colors.red},
    1px 1px 0 ${colors.red}, 1px 1px 0 ${colors.red};
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 1vh;
  @media (max-width: 1024px) {
    font-size: ${fontSizes.subTitleMobile};
  }
`;
