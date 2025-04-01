import schedule from "../../../assets/img/timetable.jpg";
import { Pills } from "../../common/Pills";
import { Reveal } from "../../common/Reveal";
import { SectionHeader } from "../../common/sectionHeader";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";

export const ScheduleHeader = () => {
	const { t } = useTranslation();

	return (
		<SectionHeader
			after
			before
			src={schedule}
			className="after:border-white before:border-gray-600"
			imgClassName="object-[50%_5%]"
			titleSlot={
				<Reveal>
					<h1 className="text-6xl font-bold">{t("SCHEDULE_TITLE")}</h1>
				</Reveal>
			}
			subTitleSlot={
				<Reveal>
					<div className="flex flex-wrap gap-1">
						<Pills hover IconSlot={<BsFillCalendarWeekFill className="font-bold text-blue-500"></BsFillCalendarWeekFill>} TextSlot={t("SCHEDULE_SUBTITLE_BOOK_A_TIME")}></Pills>
					</div>
				</Reveal>
			}
		/>
	);
};
