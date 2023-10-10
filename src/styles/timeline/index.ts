import styled from "styled-components";
import { colors } from "../colors";
import { fontFamily, fontSizes } from "../fonts";
import { BoxAnimation } from "../animations";

export const ContainerComponentStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  z-index: 3;
  animation: scale-in-center 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  ${BoxAnimation}
  @media (max-width: 1024px) {
    width: 90%;
  }
`;

export const TitleCardTimeline = styled.h3<{
  textcolorselected: string | null;
}>`
  font-size: ${fontSizes.subTitleWeb};
  font-weight: bold;
  font-family: ${fontFamily.roboto};
  margin: 0;
  margin-bottom: 2vh;
  margin-top: 2vh;
  color: ${(props) => (props.textcolorselected ? colors.black : colors.white)};
  @media (max-width: 1024px) {
    font-size: ${fontSizes.subTitleMobile};
  }
`;

export const SubTitleCardTimeline = styled.h4<{
  textcolorselected: string | null;
}>`
  font-size: ${fontSizes.textWeb};
  font-weight: bold;
  font-family: ${fontFamily.poppins};
  margin: 0;
  margin-bottom: 2vh;
  margin-top: 2vh;
  color: ${(props) => (props.textcolorselected ? colors.black : colors.white)};
`;

export const TextCardTimeline = styled.p<{ textcolorselected: string | null }>`
  font-size: ${fontSizes.textWeb};
  font-family: ${fontFamily.poppins};
  margin: 0;
  margin-bottom: 1vh;
  margin-top: 1vh;
  color: ${(props) => (props.textcolorselected ? colors.black : colors.white)};
`;
