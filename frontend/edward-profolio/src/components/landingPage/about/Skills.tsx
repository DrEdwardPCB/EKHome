import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Reveal } from "../../common/Reveal";
import { Pills } from "../../common/Pills";
import { GoDotFill } from "react-icons/go";
import { GiSkills } from "react-icons/gi";
import { BsCheckCircleFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { ESkillCategory, ISkillItem, skillsSet } from "../../../assets/data/skills";

const RenderCategoryPills = ({ category, selected = false, ...props }: { category: ESkillCategory; selected?: boolean; hover?: boolean } & React.HTMLProps<HTMLDivElement>) => {
	const { t } = useTranslation();
	switch (category) {
		case ESkillCategory.PROGRAMMING_LANGUAGE: {
			return (
				<Pills
					{...props}
					className={`${props.className} ${selected ? "bg-slate-400" : ""}`}
					IconSlot={selected ? <BsCheckCircleFill className="text-emerald-300" /> : <GoDotFill className="text-emerald-300" />}
					TextSlot={t(category)}></Pills>
			);
		}
		case ESkillCategory.FRAMEWORK_LIBS: {
			return (
				<Pills
					{...props}
					className={`${props.className} ${selected ? "bg-slate-400" : ""}`}
					IconSlot={selected ? <BsCheckCircleFill className="text-emerald-400" /> : <GoDotFill className="text-emerald-400"></GoDotFill>}
					TextSlot={t(category)}></Pills>
			);
		}
		case ESkillCategory.SOFTWARE: {
			return (
				<Pills
					{...props}
					className={`${props.className} ${selected ? "bg-slate-400" : ""}`}
					IconSlot={selected ? <BsCheckCircleFill className="text-sky-500" /> : <GoDotFill className="text-sky-500"></GoDotFill>}
					TextSlot={t(category)}></Pills>
			);
		}
		case ESkillCategory.PROTOCOL: {
			return (
				<Pills
					{...props}
					className={`${props.className} ${selected ? "bg-slate-400" : ""}`}
					IconSlot={selected ? <BsCheckCircleFill className="text-sky-600" /> : <GoDotFill className="text-sky-600"></GoDotFill>}
					TextSlot={t(category)}></Pills>
			);
		}
		case ESkillCategory.EXPERIMENTAL_SKILLS: {
			return (
				<Pills
					{...props}
					className={`${props.className} ${selected ? "bg-slate-400" : ""}`}
					IconSlot={selected ? <BsCheckCircleFill className="text-blue-600" /> : <GoDotFill className="text-blue-600"></GoDotFill>}
					TextSlot={t(category)}></Pills>
			);
		}
		case ESkillCategory.TOOLS: {
			return (
				<Pills
					{...props}
					className={`${props.className} ${selected ? "bg-slate-400" : ""}`}
					IconSlot={selected ? <BsCheckCircleFill className="text-emerald-400" /> : <GoDotFill className="text-emerald-400"></GoDotFill>}
					TextSlot={t(category)}></Pills>
			);
		}
		default:
			return <></>;
	}
};
export const SkillItem = ({ color, category, marks, title, ...props }: ISkillItem & React.HTMLProps<HTMLDivElement>) => {
	return (
		<div className={props.className}>
			<Reveal>
				<div className={`flex flex-col py-2 px-6 gap-1 justify-center bg-slate-300 bg-opacity-25 rounded-xl`}>
					<div className="flex items-center justify-between gap-3">
						<h3 className="text-lg font-bold uppercase">{title}</h3>
						<RenderCategoryPills category={category}></RenderCategoryPills>
					</div>
					{marks && (
						<div className="flex items-center gap-3 pr-6">
							<div className="relative flex-1 h-1 bg-slate-500">
								<div className={`${color} absolute left-0 h-full`} style={{ width: `${marks * 10}%` }}></div>
							</div>
							<div>{`${marks}/10`}</div>
						</div>
					)}
				</div>
			</Reveal>
		</div>
	);
};

export const Skills = () => {
	const { t } = useTranslation();
	const [selectedState, setSelectedState] = useState<ESkillCategory[]>(Object.values(ESkillCategory));
	return (
		<div className="flex flex-col flex-start h-[80vh]">
			<div className="flex">
				<Pills IconSlot={<GiSkills className="font-bold text-sky-500"></GiSkills>} TextSlot={t("ABOUT_SUBTITLE_SKILLS")}></Pills>
			</div>
			<h1 className="mx-3 mb-10 text-3xl font-bold"> Skills I Process</h1>
			<div className="flex flex-wrap gap-2">
				{Object.values(ESkillCategory).map((e) => {
					return (
						<RenderCategoryPills
							//@ts-ignore
							onClick={() => setSelectedState((prev) => (prev.includes(e) ? prev.toSpliced(prev.indexOf(e), 1) : [...prev, e]))}
							category={e}
							selected={selectedState.includes(e)}
							hover={true}></RenderCategoryPills>
					);
				})}
			</div>
			<div className="relative flex-1 min-w-0 min-h-0 mb-10 before:absolute before:h-4 before:w-full before:bg-gradient-to-b before:from-slate-800 before:to-transparent before:top-0 after:absolute after:h-4 after:w-full after:bg-gradient-to-t after:from-slate-600 after:to-transparent after:bottom-0">
				<div className="w-full h-full overflow-y-auto">
					<div className="grid grid-flow-row-dense grid-cols-3 gap-6 lg:grid-cols-5 xl:grid-cols-6">
						{skillsSet
							.filter((e) => selectedState.includes(e.category))
							.map((e) => {
								return <SkillItem {...e} key={JSON.stringify(e)} />;
							})}
					</div>
				</div>
			</div>
		</div>
	);
};
