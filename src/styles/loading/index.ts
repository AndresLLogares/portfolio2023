import styled from "styled-components";
import { colors } from "../colors";
import { Spinner } from "../animations/index";
import { fontFamily, fontSizes } from "../fonts";

export const ContainerComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  background-color: ${colors.white};
  min-height: 100vh;
  height: 100%;
`;

export const SpinnerComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 96px;
  height: 96px;
  border-radius: 50%;
  border: 9px solid;
  border-color: ${colors.black};
  border-right-color: ${colors.red};
  ${Spinner}
  animation: spinner-d3wgkg  1s infinite linear;
`;

export const TextLoadingComponent = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.black};
  font-family: ${fontFamily.roboto};
  font-size: ${fontSizes.subTitleWeb};
  font-weight: bold;
`;
