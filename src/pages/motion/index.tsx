import { AboutComponent } from "../../components/about";
import { LayoutComponent } from "../../components/layout";
import { ButtonFixedComponent } from "../../components/buttonFixed";
import { TechnologiesComponent } from "../../components/technologies";
import { ExperienceComponent } from "../../components/experience";
import { ContactComponent } from "../../components/contact";

export const MotionPage = () => {
  return (
    <LayoutComponent>
      <ButtonFixedComponent />
      <AboutComponent />
      <TechnologiesComponent />
      <ExperienceComponent />
      <ContactComponent />
    </LayoutComponent>
  );
};
