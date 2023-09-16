import { useInView } from "react-intersection-observer";
import { ContainerStyled } from "../../styles/container";
import {
  TitleSectionsStyled,
  TitleSectionUsedStyled,
} from "../../styles/technologies";
import { ExperienceEnum } from "./enum";
import { VerticalTimelineComponent } from "../timeline";
import { ContainerComponentStyled } from "../../styles/timeline";

export const ExperienceComponent = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });
  return (
    <ContainerStyled heightsize={null} ref={ref}>
      {inView && (
        <>
          <TitleSectionsStyled>
            <TitleSectionUsedStyled textcolorselected="white">
              {ExperienceEnum.Title}
            </TitleSectionUsedStyled>
          </TitleSectionsStyled>
          <ContainerComponentStyled>
            <VerticalTimelineComponent />
          </ContainerComponentStyled>
        </>
      )}
    </ContainerStyled>
  );
};
