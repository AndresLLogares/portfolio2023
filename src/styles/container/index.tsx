import styled from "styled-components";

export const ContainerStyled = styled.div<{ heightsize: number | null }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: ${(props) =>
    props.heightsize ? `${props.heightsize}vh` : `150vh`};
  height: fit-content;
  flex-direction: column;
  padding-bottom: 5vh;
  z-index: 1;
`;

export const ContainerPatternStyled = styled.div<{ heightsize: number | null }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: ${(props) =>
    props.heightsize ? `${props.heightsize}vh` : `150vh`};
  height: fit-content;
  flex-direction: column;
  padding-bottom: 5vh;
  background-color: #e9e9e9;
  background-image: linear-gradient(
      30deg,
      #ff007f 12%,
      transparent 12.5%,
      transparent 87%,
      #ff007f 87.5%,
      #ff007f
    ),
    linear-gradient(
      150deg,
      #ff007f 12%,
      transparent 12.5%,
      transparent 87%,
      #ff007f 87.5%,
      #ff007f
    ),
    linear-gradient(
      30deg,
      #ff007f 12%,
      transparent 12.5%,
      transparent 87%,
      #ff007f 87.5%,
      #ff007f
    ),
    linear-gradient(
      150deg,
      #ff007f 12%,
      transparent 12.5%,
      transparent 87%,
      #ff007f 87.5%,
      #ff007f
    ),
    linear-gradient(
      60deg,
      #ff007f77 25%,
      transparent 25.5%,
      transparent 75%,
      #ff007f77 75%,
      #ff007f77
    ),
    linear-gradient(
      60deg,
      #ff007f77 25%,
      transparent 25.5%,
      transparent 75%,
      #ff007f77 75%,
      #ff007f77
    );
  background-size: 78px 137px;
  background-position: 0 0, 0 0, 39px 68px, 39px 68px, 0 0, 39px 68px;
  z-index: 3;
`;
