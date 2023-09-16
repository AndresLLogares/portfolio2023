import {
  ProgressFixedStyled,
  ImageFixedStyled,
} from "../../styles/buttonFixed";
import Logo from "../../assets/logo.svg";
import { useEffect, useState } from "react";

export const ButtonFixedComponent = () => {
  const [scrollYRotate, setScrollYRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      requestAnimationFrame(() => {
        const rotation = (window.scrollY / 10) % Math.PI;
        setScrollYRotate(rotation);
      });
    });
  }, []);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <ProgressFixedStyled onClick={handleClick}>
      <ImageFixedStyled
        currentscrollposition={scrollYRotate}
        alt=""
        src={Logo}
      />
    </ProgressFixedStyled>
  );
};
