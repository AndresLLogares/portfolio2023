import { useEffect, useState } from "react";
import {
  AboutContainerComponent,
  TextAboutContainerStyled,
  TitleTypewritterComponent,
} from "../../styles/textAbout";

interface TextAboutInterface {
  TitleComponent: string;
  TextComponent: string;
}

export const TextAboutComponet = (props: TextAboutInterface) => {
  const [typeWritter, setTypeWritter] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTypeWritter(props.TextComponent.slice(0, typeWritter.length + 1));
    }, 50);
    return () => clearTimeout(timeout);
  }, [props.TextComponent, typeWritter]);

  return (
    <AboutContainerComponent>
      <TitleTypewritterComponent>
        {props.TitleComponent}
      </TitleTypewritterComponent>
      <TextAboutContainerStyled>{typeWritter}</TextAboutContainerStyled>
    </AboutContainerComponent>
  );
};
