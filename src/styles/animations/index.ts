import { css, keyframes } from "styled-components";

export const Spinner = css`
  @keyframes spinner-d3wgkg {
    to {
      transform: rotate(1turn);
    }
  }
`;

export const TitleAnimation = css`
  @keyframes focus-in-expand {
    0% {
      letter-spacing: -0.5em;
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      filter: blur(0px);
      opacity: 1;
    }
  }
`;

export const BoxAnimation = css`
  @keyframes scale-in-center {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export const ScrollAnimation = css`
  @keyframes loader {
    0% {
      width: 0%;
      left: 0;
    }
    50% {
      width: 100%;
    }
    99% {
      width: 0%;
      right: 0;
    }
  }
`;
export const parallaxStars = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100vh);
  }
`;

export const sliderShapeAnimation = keyframes`
  0%, 100% {
    border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
    transform: translate3d(0, 0, 0) rotateZ(0.01deg);
  }
  34% {
    border-radius: 70% 30% 46% 54% / 30% 29% 71% 70%;
    transform: translate3d(0, 5px, 0) rotateZ(0.01deg);
  }
  50% {
    transform: translate3d(0, 0, 0) rotateZ(0.01deg);
  }
  67% {
    border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
    transform: translate3d(0, -3px, 0) rotateZ(0.01deg);
  }
`;
export const waveAnimation = keyframes`
  0% {
    background-position-x: 0px;
  }
  100% {
    background-position-x: 1000px;
  }
`;
