import styled from "styled-components";
import { colors } from "../colors";

export const LayoutComponentStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  flex-direction: column;
  overflow: hidden;
  background-color: ${colors.black};
`;
