import { useTranslation } from "react-i18next";
import projects from "../../../assets/img/projects.jpg";
import { Pills } from "../../common/Pills";
import { Reveal } from "../../common/Reveal";
import { SectionHeader } from "../../common/sectionHeader";
import { BsStack, BsFillDeviceHddFill } from "react-icons/bs";
import { LiaNode, LiaReact } from "react-icons/lia";
import { GiTestTubes } from "react-icons/gi";
import { IoLibrarySharp } from "react-icons/io5";
export const ProjectsHeader = () => {
	const { t } = useTranslation();
	return (
		<SectionHeader
			before
			after
			src={projects}
			className="after:border-gray-700 before:border-gray-600"
			imgClassName="object-[50%_5%]"
			titleSlot={
				<Reveal>
					<h1 className="p-4 overflow-visible text-6xl font-bold rounded backdrop-blur-sm bg-black/30 ">{t("PROJECT_ROUTE_NAME")}</h1>
				</Reveal>
			}
			subTitleSlot={
				<Reveal>
					<div className="flex flex-wrap gap-1">
						<Pills hover IconSlot={<GiTestTubes className="font-bold text-emerald-400"></GiTestTubes>} TextSlot={t("PROJECT_SUBTITLE_RESEARCH")}></Pills>
						<Pills hover IconSlot={<LiaNode className="font-bold text-emerald-500"></LiaNode>} TextSlot={t("PROJECT_SUBTITLE_BACK")}></Pills>
						<Pills hover IconSlot={<LiaReact className="font-bold text-blue-400"></LiaReact>} TextSlot={t("PROJECT_SUBTITLE_FRONT")}></Pills>
						<Pills hover IconSlot={<BsStack className="font-bold text-blue-500"></BsStack>} TextSlot={t("PROJECT_SUBTITLE_FULL")}></Pills>
						<Pills hover IconSlot={<IoLibrarySharp className="font-bold text-sky-400"></IoLibrarySharp>} TextSlot={t("PROJECT_SUBTITLE_LIBS")}></Pills>
						<Pills hover IconSlot={<BsFillDeviceHddFill className="font-bold text-sky-500"></BsFillDeviceHddFill>} TextSlot={t("PROJECT_SUBTITLE_NATIVE")}></Pills>
					</div>
				</Reveal>
			}
		/>
	);
};
