import { Collapse, Button, Chip, Tooltip } from "@mui/material";
import { useState } from "react";
import { EProjectType, EStatus, IProject } from "../../../assets/data/projectList";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import noimage from "../../../assets/img/noimage.png";
import { ESkillCategory } from "../../../assets/data/skills";
export interface IProjectItemProps {
	item: IProject;
}
export const ProjectItem = ({ item }: IProjectItemProps) => {
	const [open, setOpen] = useState(false);
	const renderStatus = () => {
		return item.status.map((e) => {
			switch (e) {
				case EStatus.DEVELOPING:
					return (
						<Tooltip title="actively developing">
							<Chip className="bg-slate-800 text-emerald-500" label={"Developing"} />
						</Tooltip>
					);
				case EStatus.PUBLIC:
					return (
						<Tooltip title="released and deployed with public access">
							<Chip className="text-blue-500 bg-slate-800" label={"Public"} />
						</Tooltip>
					);
				case EStatus.PRIVATE:
					return (
						<Tooltip title="released and deployed with private access">
							<Chip className="text-yellow-500 bg-slate-800" label={"Private"} />
						</Tooltip>
					);
				case EStatus.ARCHIVED:
					return (
						<Tooltip title="no longer maintained">
							<Chip className="text-red-500 bg-slate-800" label={"Archived"} />
						</Tooltip>
					);
			}
		});
	};
	const renderType = () => {
		return item.type.map((e) => {
			switch (e) {
				case EProjectType.BACKEND:
					return <Chip className="bg-slate-800 text-emerald-500" label={"Backend"} />;
				case EProjectType.FRONTEND:
					return <Chip className="text-blue-500 bg-slate-800" label={"Frontend"} />;
				case EProjectType.FULLSTACK:
					return <Chip className="bg-slate-800 text-sky-500" label={"Fullstack"} />;
				case EProjectType.LIBS:
					return <Chip className="bg-slate-800 text-cyan-500" label={"Libs"} />;
				case EProjectType.NATIVE:
					return <Chip className="text-green-500 bg-slate-800" label={"Native"} />;
				case EProjectType.RESEARCH:
					return <Chip className="text-teal-500 bg-slate-800" label={"Research"} />;
			}
		});
	};
	const renderSkills = () => {
		return item.skills.map((e) => {
			switch (e.category) {
				case ESkillCategory.PROGRAMMING_LANGUAGE:
					return <Chip className="bg-slate-800 text-emerald-500" label={e.title} />;
				case ESkillCategory.FRAMEWORK_LIBS:
					return <Chip className="text-blue-500 bg-slate-800" label={e.title} />;
				case ESkillCategory.SOFTWARE:
					return <Chip className="bg-slate-800 text-sky-500" label={e.title} />;
				case ESkillCategory.TOOLS:
					return <Chip className="bg-slate-800 text-cyan-500" label={e.title} />;
				case ESkillCategory.PROTOCOL:
					return <Chip className="text-green-500 bg-slate-800" label={e.title} />;
				case ESkillCategory.EXPERIMENTAL_SKILLS:
					return <Chip className="text-teal-500 bg-slate-800" label={e.title} />;
			}
		});
	};
	const renderDescription = () => {
		if (open) {
			return <p>{item.description}</p>;
		}
		return <p>{`${item.description.split(" ").slice(0, 20).join(" ")}...`}</p>;
	};
	return (
		<div className="rounded shadow-2xl bg-slate-700">
			<div className="relative">
				<img className={`rounded relative object-cover object-center max-h-40 w-full aspect-auto`} src={item.image || noimage}></img>
				<div className="absolute bottom-0 right-0 flex flex-col gap-2 px-10 py-6 w-fit">
					<p className="self-end p-2 font-bold rounded w-fit backdrop-blur-sm bg-black/60">{item.name}</p>
					<div className="flex flex-wrap justify-end gap-1">
						{item.links.map((e) => {
							return (
								<Button variant="contained" className="flex gap-1">
									{e.icon}
									<a href={e.href}>{e.displayText}</a>
								</Button>
							);
						})}
					</div>
				</div>
			</div>
			<div className="flex items-center justify-between p-2">
				<div>
					<Button
						onClick={() => {
							setOpen(!open);
						}}>
						{open ? (
							<>
								<BsChevronDown></BsChevronDown>
								<p>show less</p>{" "}
							</>
						) : (
							<>
								<BsChevronUp></BsChevronUp>
								<p>show more</p>
							</>
						)}
					</Button>
				</div>

				<div className="flex justify-between gap-2 p-4">
					<div className="flex flex-wrap flex-1 gap-1 flex-end">{renderType()}</div>
				</div>
			</div>
			<div className="p-4">{renderDescription()}</div>
			<Collapse in={open}>
				<div className="p-4">
					<div className="flex justify-between gap-2">
						<p className="font-bold">Status:</p>
						<div className="flex flex-wrap flex-1 gap-1 flex-end">{renderStatus()}</div>
					</div>
					<div>
						<p className="font-bold">Motivation:</p>
						<div>{item.motivation}</div>
					</div>
					<ul className="pl-4 my-2 list-disc">
						{item.bulletPoint.map((e) => (
							<li>{e}</li>
						))}
					</ul>
					<div className="flex items-center justify-between gap-2">
						<p className="font-bold">Skills:</p>
						<div className="flex flex-wrap flex-1 gap-1 p-2 flex-end">{renderSkills()}</div>
					</div>
				</div>
			</Collapse>
		</div>
	);
};
