import { useTranslation } from "react-i18next";
import education from "../../../assets/img/course.jpg";
import { Pills } from "../../common/Pills";
import { Reveal } from "../../common/Reveal";
import { SectionHeader } from "../../common/sectionHeader";
import { FaUniversity, FaSchool } from "react-icons/fa";
import { TbSchool } from "react-icons/tb";
export const EducationHeader = () => {
	const { t } = useTranslation();
	return (
		<SectionHeader
			before
			after
			src={education}
			className="after:border-gray-700 before:border-gray-600"
			imgClassName="object-[50%_5%]"
			titleSlot={
				<Reveal>
					<h1 className="text-6xl font-bold">{t("EDUCATION_TITLE")}</h1>
				</Reveal>
			}
			subTitleSlot={
				<Reveal>
					<div className="flex flex-wrap gap-1">
						<Pills hover IconSlot={<FaUniversity className="font-bold text-blue-500"></FaUniversity>} TextSlot={t("EDUCATION_SUBTITLE_MASTER")}></Pills>
						<Pills hover IconSlot={<TbSchool className="font-bold text-blue-600"></TbSchool>} TextSlot={t("EDUCATION_SUBTITLE_BACHELOR")}></Pills>
						<Pills hover IconSlot={<FaSchool className="font-bold text-sky-500"></FaSchool>} TextSlot={t("EDUCATION_SUBTITLE_SECONDARY")}></Pills>
					</div>
				</Reveal>
			}
		/>
	);
};
