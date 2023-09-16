import { TitleComponentStiled, TitleDivComponent } from "../../styles/title";
import { TitleEnum } from "./enum";

export const TitleComponent = () => {
  return (
    <TitleDivComponent>
      <TitleComponentStiled>{TitleEnum.welcome} </TitleComponentStiled>
    </TitleDivComponent>
  );
};
