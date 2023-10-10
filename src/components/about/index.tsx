import { TextAboutComponet } from "../textAbout";
import { TitleComponent } from "../title";
import { TextAboutEnum } from "../textAbout/enum/";
import { LogoComponent } from "../logo";
import { useInView } from "react-intersection-observer";
import { ContainerStyled } from "../../styles/container";

export const AboutComponent = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <ContainerStyled heightsize={null} ref={ref}>
      {inView && (
        <>
          <TitleComponent />
          <LogoComponent />
          <TextAboutComponet
            TitleComponent={TextAboutEnum.TitleAbout}
            TextComponent={TextAboutEnum.TextAbout}
          />
          <TextAboutComponet
            TitleComponent={TextAboutEnum.TitleJourney}
            TextComponent={TextAboutEnum.TextJourney}
          />
          <TextAboutComponet
            TitleComponent={TextAboutEnum.TitleProfessionalEthos}
            TextComponent={TextAboutEnum.TextProfessionalEthos}
          />
        </>
      )}
    </ContainerStyled>
  );
};
