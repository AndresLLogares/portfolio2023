import { FaBriefcase } from "react-icons/fa6";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { colors } from "../../styles/colors";
import {
  SubTitleCardTimeline,
  TextCardTimeline,
  TitleCardTimeline,
} from "../../styles/timeline";
import { ExperienceEnum } from "../experience/enum";

export const VerticalTimelineComponent = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: `${colors.red}`,
          color: `${colors.white}`,
        }}
        contentArrowStyle={{ borderRight: `7px solid  ${colors.red}` }}
        iconStyle={{ background: `${colors.red}`, color: `${colors.white}` }}
        icon={<FaBriefcase />}
      >
        <TitleCardTimeline textcolorselected={null}>
          {ExperienceEnum.Accenture}
        </TitleCardTimeline>
        <SubTitleCardTimeline textcolorselected={null}>
          {ExperienceEnum.AccentureDate}
        </SubTitleCardTimeline>
        <TextCardTimeline textcolorselected={null}>
          {ExperienceEnum.AccentureFirst}
        </TextCardTimeline>
        <TextCardTimeline textcolorselected={null}>
          {ExperienceEnum.AccentureSecond}
        </TextCardTimeline>
        <TextCardTimeline textcolorselected={null}>
          {ExperienceEnum.AccentureThird}
        </TextCardTimeline>
        <TextCardTimeline textcolorselected={null}>
          {ExperienceEnum.AccentureFourth}
        </TextCardTimeline>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: `${colors.white}`,
          color: `${colors.red}`,
        }}
        contentArrowStyle={{ borderRight: `7px solid  ${colors.red}` }}
        iconStyle={{ background: `${colors.black}`, color: `${colors.red}` }}
        icon={<FaBriefcase />}
      >
        <TitleCardTimeline textcolorselected={"true"}>
          {ExperienceEnum.ALT}
        </TitleCardTimeline>
        <SubTitleCardTimeline textcolorselected={"true"}>
          {ExperienceEnum.ALTDate}
        </SubTitleCardTimeline>
        <TextCardTimeline textcolorselected={"true"}>
          {ExperienceEnum.ALTFirst}
        </TextCardTimeline>
        <TextCardTimeline textcolorselected={"true"}>
          {ExperienceEnum.ALTSecond}
        </TextCardTimeline>
        <TextCardTimeline textcolorselected={"true"}>
          {ExperienceEnum.ALTThird}
        </TextCardTimeline>
        <TextCardTimeline textcolorselected={"true"}>
          {ExperienceEnum.ALTFourth}
        </TextCardTimeline>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: `${colors.red}`,
          color: `${colors.white}`,
        }}
        contentArrowStyle={{ borderRight: `7px solid  ${colors.red}` }}
        iconStyle={{ background: `${colors.red}`, color: `${colors.white}` }}
        icon={<FaBriefcase />}
      >
        <TitleCardTimeline textcolorselected={null}>
          {ExperienceEnum.OCTOSOFT}
        </TitleCardTimeline>
        <SubTitleCardTimeline textcolorselected={null}>
          {" "}
          {ExperienceEnum.OCTOSOFTDate}
        </SubTitleCardTimeline>
        <TextCardTimeline textcolorselected={null}>
          {ExperienceEnum.OCTOSOFTFirst}
        </TextCardTimeline>
        <TextCardTimeline textcolorselected={null}>
          {ExperienceEnum.OCTOSOFTSecond}
        </TextCardTimeline>
        <TextCardTimeline textcolorselected={null}>
          {ExperienceEnum.OCTOSOFTThird}
        </TextCardTimeline>
        <TextCardTimeline textcolorselected={null}>
          {ExperienceEnum.OCTOSOFTFourth}
        </TextCardTimeline>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};
