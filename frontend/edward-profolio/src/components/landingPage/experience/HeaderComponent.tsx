import { useTranslation } from "react-i18next";
import experience from "../../../assets/img/link.jpg";
import { Pills } from "../../common/Pills";
import { Reveal } from "../../common/Reveal";
import { SectionHeader } from "../../common/sectionHeader";
import { GrUserWorker } from "react-icons/gr";
import { MdWork, MdOutlineLocalActivity } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
export const ExperienceHeader = () => {
	const { t } = useTranslation();
	return (
		<SectionHeader
			before
			after
			src={experience}
			className="after:border-gray-700 before:border-gray-600"
			imgClassName="object-[50%_5%]"
			titleSlot={
				<Reveal>
					<h1 className="text-6xl font-bold">{t("EXPERIENCE_TITLE")}</h1>
				</Reveal>
			}
			subTitleSlot={
				<Reveal>
					<div className="flex flex-wrap gap-1">
						<Pills hover IconSlot={<MdWork className="font-bold text-blue-500"></MdWork>} TextSlot={t("EXPERIENCE_SUB_TITLE_FULL")}></Pills>
						<Pills hover IconSlot={<GrUserWorker className="font-bold text-blue-600"></GrUserWorker>} TextSlot={t("EXPERIENCE_SUB_TITLE_PART")}></Pills>
						<Pills hover IconSlot={<PiStudent className="font-bold text-sky-500"></PiStudent>} TextSlot={t("EXPERIENCE_SUB_TITLE_INTERN")}></Pills>
						<Pills hover IconSlot={<MdOutlineLocalActivity className="font-bold text-sky-600"></MdOutlineLocalActivity>} TextSlot={t("EXPERIENCE_SUB_TITLE_VOLUNTARY")}></Pills>
					</div>
				</Reveal>
			}
		/>
	);
};
