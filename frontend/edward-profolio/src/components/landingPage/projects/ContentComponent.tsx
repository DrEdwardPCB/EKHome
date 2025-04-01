import { EProjectType, EStatus, ProjectList } from "../../../assets/data/projectList";
import { ProjectItem } from "./projectItem";
import { useForm, Controller } from "react-hook-form";
import { TextField, Autocomplete } from "@mui/material";
import { ESkillCategory, skillsSet } from "../../../assets/data/skills";
import { compact, toLower } from "lodash";
import { useMemo } from "react";
import { useDebounce } from "usehooks-ts";

export interface IProjectFilterForm {
	title: string;
	skill: (typeof skillsSet)[number]["title"][];
	status: { id: EStatus; name: string }[];
	type: { id: EProjectType; name: string }[];
}
export const skillOptions = skillsSet.map((e) => e.title);
export const statusOptions = compact(
	Object.entries(EStatus).map(([key, value]) => {
		if (Number.isNaN(Number(key))) {
			return {
				id: value,
				name: toLower(key),
			};
		}
		return undefined;
	})
);
export const typeOptions = Object.entries(EProjectType).map(([key, value]) => ({
	id: value,
	name: toLower(key),
}));
export const ProjectsContent = () => {
	const {
		control,
		watch,
		formState: { errors },
	} = useForm<IProjectFilterForm>({
		defaultValues: {
			title: "",
			skill: [],
			status: [],
			type: [],
		},
	});
	const watching = watch();
	const projectList = useMemo(() => {
		const { title, skill, status, type } = watching;
		return ProjectList.filter((e) => {
			return title === "" ? true : e.name.includes(title);
		})
			.filter((e) => {
				return skill.length === 0 ? true : e.skills.map((f) => f.title).some((g) => skill.includes(g));
			})
			.filter((e) => {
				return status.length === 0 ? true : e.status.some((g) => status.map((h) => h.id).includes(g));
			})
			.filter((e) => {
				return type.length === 0 ? true : e.type.some((g) => type.map((h) => h.id).includes(g));
			});
	}, [watching]);
	const debouncedProjectList = useDebounce(projectList, 1000);
	return (
		<div className="h-[80vh] bg-[url(/src/assets/img/4-dark.png)]">
			<div className="relative w-full h-[80vh] bg-gradient-174 from-gray-700 from-20% via-transparent to-80% to-gray-600 before:absolute before:w-full after:w-full before:h-8 before:w-full before:bg-gradient-to-b before:from-gray-700 before:translate-y-3 before:to-transparent before:top-0 after:absolute after:h-10 after:w-full after:bg-gradient-to-t after:from-gray-600 after:to-transparent after:bottom-0">
				<div className="flex flex-col gap-4 p-10">
					<h1 className="text-2xl font-bold">Project Filter</h1>
					<div className="flex gap-4">
						<Controller
							control={control}
							name="title"
							render={({ field: { onChange, value } }) => (
								<TextField className="min-w-[calc(25%-1rem)]" value={value} onChange={(e) => onChange(e.target.value)} label="Title" placeholder="Project Title" />
							)}
						/>
						<Controller
							control={control}
							name="skill"
							render={({ field: { onChange } }) => (
								<Autocomplete
									className="flex-1 min-w-[calc(25%-1rem)]"
									defaultValue={[]}
									multiple
									disableCloseOnSelect
									options={skillOptions}
									getOptionLabel={(option) => option}
									onChange={(event, values) => {
										onChange(values);
									}}
									renderInput={(params) => <TextField {...params} label="Skill" placeholder="Project Skill" />}
								/>
							)}
						/>
						<Controller
							control={control}
							name="status"
							render={({ field: { onChange } }) => (
								<Autocomplete
									className="flex-1 min-w-[calc(25%-1rem)]"
									defaultValue={[]}
									multiple
									disableCloseOnSelect
									options={statusOptions}
									getOptionLabel={(option) => option.name}
									onChange={(event, values) => {
										onChange(values);
									}}
									renderInput={(params) => <TextField {...params} label="Status" placeholder="Project Status" />}
								/>
							)}
						/>
						<Controller
							control={control}
							name="type"
							render={({ field: { onChange } }) => (
								<Autocomplete
									className="flex-1 min-w-[calc(25%-1rem)]"
									defaultValue={[]}
									multiple
									disableCloseOnSelect
									options={typeOptions}
									getOptionLabel={(option) => option.name}
									onChange={(event, values) => {
										onChange(values);
									}}
									renderInput={(params) => <TextField {...params} label="Type" placeholder="Project Type" />}
								/>
							)}
						/>
					</div>
					<p className="text-sm text-slate-300">you may navigate and filter my projects based on the above filters</p>
				</div>
				<div className="h-full px-10 py-6 overflow-x-hidden overflow-y-auto">
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
						{/* TODO: add filter mui autocomplete or etc */}
						{debouncedProjectList.map((e) => {
							return <ProjectItem key={e.name} item={e}></ProjectItem>;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
