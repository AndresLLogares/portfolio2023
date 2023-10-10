import React, { useEffect } from "react";
import { LayoutComponentStyled } from "../../styles/layout";
import {
  SliderThumbBefore,
  Star,
  StarBackgroundContainer,
} from "../../styles/motion";

export interface WrapperProps {
  children: React.ReactNode;
}

export const LayoutComponent = (props: WrapperProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const stars = Array.from({ length: 100 }, (_x, i) => <Star key={i} />);

  return (
    <LayoutComponentStyled>
      <StarBackgroundContainer>{stars}</StarBackgroundContainer>
      <SliderThumbBefore />

      {props.children}
    </LayoutComponentStyled>
  );
};
