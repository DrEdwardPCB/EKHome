import { useTranslation } from "react-i18next";
import about from "../../../assets/img/about.jpg";
import { Pills } from "../../common/Pills";
import { Reveal } from "../../common/Reveal";
import { SectionHeader } from "../../common/sectionHeader";
import { BsPerson, BsTextParagraph } from "react-icons/bs";
import { MdPrecisionManufacturing } from "react-icons/md";
import { GiSkills } from "react-icons/gi";

export const AboutHeader = () => {
	const { t } = useTranslation();
	return (
		<SectionHeader
			after
			src={about}
			className="after:border-gray-700"
			imgClassName="object-[50%_5%]"
			titleSlot={
				<Reveal>
					<h1 className="text-6xl font-bold">{t("ABOUT_TITLE")}</h1>
				</Reveal>
			}
			subTitleSlot={
				<Reveal>
					<div className="flex flex-wrap gap-1">
						<Pills hover IconSlot={<BsPerson className="font-bold text-blue-500"></BsPerson>} TextSlot={t("ABOUT_SUBTITLE_WHO_AM_I")}></Pills>
						<Pills hover IconSlot={<GiSkills className="font-bold text-sky-500"></GiSkills>} TextSlot={t("ABOUT_SUBTITLE_SKILLS")}></Pills>
						<Pills hover IconSlot={<MdPrecisionManufacturing className="font-bold text-blue-600"></MdPrecisionManufacturing>} TextSlot={t("ABOUT_SUBTITLE_FUN_FACT")}></Pills>
						{/* <Pills hover IconSlot={<BsTextParagraph className="font-bold text-sky-600"></BsTextParagraph>} TextSlot={t("ABOUT_SUBTITLE_MOTTO")}></Pills> */}
					</div>
				</Reveal>
			}
		/>
	);
};
