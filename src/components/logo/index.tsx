import Logo from "../../assets/logo.svg";
import {
  AuxColumStyled,
  ConatinerLogoStyled,
  LogoStyled,
  TextLogoStyled,
} from "../../styles/logo";
import { TextAboutEnum } from "../textAbout/enum";

export const LogoComponent = () => {
  return (
    <ConatinerLogoStyled>
      <LogoStyled src={Logo} alt="" />
      <AuxColumStyled>
        <TextLogoStyled>{TextAboutEnum.Name}</TextLogoStyled>
        <TextLogoStyled>{TextAboutEnum.Role}</TextLogoStyled>
      </AuxColumStyled>
    </ConatinerLogoStyled>
  );
};
