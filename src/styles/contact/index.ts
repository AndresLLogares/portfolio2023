import styled from "styled-components";
import { colors } from "../colors";
import { fontFamily, fontSizes } from "../fonts";

export const ContainerHistoryText = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  height: fit-content;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  background-color: ${colors.white};
  border-radius: 5px;
  padding: 25px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  @media (max-width: 1024px) {
    width: 80%;
  }
`;

export const TextHistoryStyled = styled.p`
  display: flex;
  margin: 0;
  margin-bottom: 1vh;
  margin-top: 1vh;
  font-weight: bold;
  color: ${colors.black};
  font-size: ${fontSizes.textWeb};
  font-family: ${fontFamily.poppins};
`;

export const ButtonContainerContact = styled.a`
  display: flex;
  justify-content: center;
  text-decoration: none;
  align-items: center;
  padding: 0.1em 0.25em;
  width: 200px;
  height: 50px;
  background-color: ${colors.white};
  border: 3px solid ${colors.black};
  border-radius: 0.3em;
  font-size: 12px;
  margin: 10px;
`;

export const ButtonTextContact = styled.span`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 190px;
  bottom: 5px;
  height: 45px;
  font-size: ${fontSizes.textWeb};
  font-family: ${fontFamily.poppins};
  background-color: ${colors.white};
  font-weight: bold;
  border-radius: 0.2em;
  color: ${colors.black};
  border: 0.08em solid ${colors.black};
  box-shadow: 0 0.4em 0.1em 0.019em ${colors.black};
  transition: all 0.5s;
  &:hover {
    transform: translate(0, 0.4em);
    box-shadow: 0 0 0 0 ${colors.white};
    transition: all 0.5s;
    cursor: pointer;
  }
`;
