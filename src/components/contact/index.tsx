import { useInView } from "react-intersection-observer";
import { ContainerPatternStyled } from "../../styles/container";
import {
  TitleSectionsStyled,
  TitleSectionUsedStyled,
} from "../../styles/technologies";
import { ContactEnum } from "./enum";
import {
  ButtonContainerContact,
  ButtonTextContact,
  ContainerHistoryText,
  TextHistoryStyled,
} from "../../styles/contact";
import { BsMailbox } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoDocumentTextSharp, IoLogoWhatsapp } from "react-icons/io5";
import MyResume from "../../assets/Resume.pdf";
export const ContactComponent = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <ContainerPatternStyled heightsize={150} ref={ref}>
      {inView && (
        <>
          <TitleSectionsStyled>
            <TitleSectionUsedStyled textcolorselected={"true"}>
              {ContactEnum.TitleContact}
            </TitleSectionUsedStyled>
          </TitleSectionsStyled>
          <ContainerHistoryText>
            <TextHistoryStyled>{ContactEnum.TextYou}</TextHistoryStyled>
            <ButtonContainerContact
              rel="noreferrer"
              target="_blank"
              href="mailto:andresl940@hotmail.com"
            >
              <ButtonTextContact>
                <BsMailbox style={{ fontSize: "15px", marginRight: "5px" }} />
                {ContactEnum.Email}
              </ButtonTextContact>
            </ButtonContainerContact>
            <TextHistoryStyled>{ContactEnum.TextYou2}</TextHistoryStyled>
            <ButtonContainerContact
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/andr%C3%A9s-luis-logares-522595172/"
            >
              <ButtonTextContact>
                <FaLinkedin style={{ fontSize: "15px", marginRight: "5px" }} />
                {ContactEnum.Linkedin}
              </ButtonTextContact>
            </ButtonContainerContact>
            <TextHistoryStyled>{ContactEnum.TextYou3}</TextHistoryStyled>
            <ButtonContainerContact
              rel="noreferrer"
              target="_blank"
              href="https://wa.me/5491136005563"
            >
              <ButtonTextContact>
                <IoLogoWhatsapp
                  style={{ fontSize: "15px", marginRight: "5px" }}
                />
                {ContactEnum.WhastApp}
              </ButtonTextContact>
            </ButtonContainerContact>
            <TextHistoryStyled>{ContactEnum.TextYou4}</TextHistoryStyled>
            <ButtonContainerContact
              rel="noreferrer"
              target="_blank"
              href={MyResume}
              download
            >
              <ButtonTextContact>
                <IoDocumentTextSharp
                  style={{ fontSize: "15px", marginRight: "5px" }}
                />
                {ContactEnum.Resume}
              </ButtonTextContact>
            </ButtonContainerContact>
            <TextHistoryStyled>{ContactEnum.TextYou5}</TextHistoryStyled>
            <ButtonContainerContact
              rel="noreferrer"
              target="_blank"
              href="https://github.com/AndresLLogares"
            >
              <ButtonTextContact>
                <FaGithub style={{ fontSize: "15px", marginRight: "5px" }} />
                {ContactEnum.Github}
              </ButtonTextContact>
            </ButtonContainerContact>
          </ContainerHistoryText>
        </>
      )}
    </ContainerPatternStyled>
  );
};
