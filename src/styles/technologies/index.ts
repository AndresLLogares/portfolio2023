import styled from "styled-components";
import { colors } from "../colors";
import { fontFamily, fontSizes } from "../fonts";
import { BoxAnimation, TitleAnimation } from "../animations";

export const TitleSectionsStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 90%;
  height: fit-content;
`;

export const TitleSectionUsedStyled = styled.h3<{
  textcolorselected: string | null;
}>`
  display: flex;
  font-family: ${fontFamily.bungee};
  font-size: ${fontSizes.subTitleWeb};
  color: ${(props) => (props.textcolorselected ? colors.white : colors.black)};
  text-transform: uppercase;
  ${TitleAnimation}
  animation: focus-in-expand 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  margin: 0;
  margin-bottom: 4vh;
  @media (max-width: 1024px) {
    font-size: ${fontSizes.subTitleMobile};
  }
`;

export const DivComponentTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: row;
  height: fit-content;
  align-items: center;
  justify-content: center;
  animation: scale-in-center 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  ${BoxAnimation}
`;
export const ButtonTechnologiesComponent = styled.a`
  display: flex;
  margin-right: 50px;
  margin-left: 50px;
  margin-bottom: 30px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-decoration: none;
  font-family: ${fontFamily.poppins}
  font-size: ${fontSizes.textWeb}
  font-weight: bold;
  width: 95px;
  height: 95px;
  border-radius: 5px;
  color: ${colors.white};
  background-color: ${colors.black};
  box-shadow: -5px 5px ${colors.black}, -4px 4px ${colors.black},
    -2px 2px ${colors.black};
  border: 3px solid ${colors.white};
  transition-duration: 1s;
  transform: skewX(5deg);
  transiton-duration: 1s;
  &:hover {
    transform: translate(5px, 5px);
    cursor: pointer;
  }
  @media (max-width: 1024px) {
    margin-right: 30px;
    margin-left: 30px;
    margin-bottom: 20px;
  }
`;
