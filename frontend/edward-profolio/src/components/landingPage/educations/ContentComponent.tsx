import { Timeline, TimelineItem, TimelineOppositeContent, TimelineSeparator, TimelineConnector, TimelineDot, TimelineContent } from "@mui/lab";
import BYear1 from "../../../assets/img/Byear1.jpg";
import BYear2 from "../../../assets/img/Byear2.jpg";
import BYear3 from "../../../assets/img/Byear3.jpg";
import BYear4 from "../../../assets/img/Byear4.jpg";
import MYear1 from "../../../assets/img/MYear1.jpg";
import MYear2 from "../../../assets/img/MYear2.jpg";
import { FaUniversity, FaSchool } from "react-icons/fa";
import { TbSchool } from "react-icons/tb";
import { twMerge } from "tailwind-merge";
import { Button, Collapse, Tooltip } from "@mui/material";
import { courseSet } from "../../../assets/data/course";
import { useMemo, useState } from "react";

export const EducationContent = () => {
	const [open, setOpen] = useState<string>("");
	return (
		<div className="min-h-[100vh] bg-[url(/src/assets/img/5-dark.png)]">
			<div className="w-full min-h-[100vh] p-4 bg-gradient-174 from-gray-700 from-20% via-transparent to-80% to-gray-600">
				<div className="flex flex-col h-full gap-6 mx-10">
					<div>
						<Timeline position="alternate">
							<TimelineItem>
								<TimelineOppositeContent sx={{ m: "auto 0" }} align="right" variant="body2" color="text.secondary">
									2019-2021
								</TimelineOppositeContent>
								<TimelineSeparator>
									<TimelineConnector />
									<TimelineDot className="text-blue-500 bg-slate-600">
										<FaUniversity />
									</TimelineDot>
									<TimelineConnector />
								</TimelineSeparator>
								<TimelineContent>
									<h6 className="text-xl font-bold">Hong Kong University of Science and Technology</h6>
									<p className="font-bold">{"Master of philosophy in Life Science"}</p>
									<p className="italic">{"Scientific Computation"}</p>
								</TimelineContent>
							</TimelineItem>
							<TimelineItem>
								<TimelineOppositeContent sx={{ m: "auto 0" }} align="right" variant="body2" color="text.secondary">
									2015-2019
								</TimelineOppositeContent>
								<TimelineSeparator>
									<TimelineConnector />
									<TimelineDot className="text-blue-600 bg-slate-600">
										<TbSchool />
									</TimelineDot>
									<TimelineConnector />
								</TimelineSeparator>
								<TimelineContent>
									<h6 className="text-xl font-bold">Hong Kong University of Science and Technology</h6>
									<p className="font-bold">{"Bachelor of Science in Biochemistry and Cell biology"}</p>
									<p className="italic">{"Chemistry, Biological Physics, Information Technology"}</p>
								</TimelineContent>
							</TimelineItem>
							<TimelineItem>
								<TimelineOppositeContent sx={{ m: "auto 0" }} align="right" variant="body2" color="text.secondary">
									2008-2015
								</TimelineOppositeContent>
								<TimelineSeparator>
									<TimelineConnector />
									<TimelineDot className="bg-slate-600 text-sky-500">
										<FaSchool />
									</TimelineDot>
									<TimelineConnector />
								</TimelineSeparator>
								<TimelineContent>
									<h6 className="text-xl font-bold">The Y.W.C.A Hioe Tjo Yoeng College</h6>
									<p className="font-bold">{"HKDSE graduate"}</p>
									<p className="italic">{"Physics, Chemistry, Biology"}</p>
								</TimelineContent>
							</TimelineItem>
						</Timeline>
					</div>
					<div className="flex flex-col items-center">
						<CourseCategory
							year={1}
							level="bachelor"
							open={open}
							openfnc={(id) => setOpen(id)}
							id="B1"
							image={BYear1}
							primaryColor="bg-blue-700"
							secondaryColor="bg-blue-600"
							side="left"
							institute="HKUST"></CourseCategory>
						<CourseCategory
							year={2}
							open={open}
							level="bachelor"
							openfnc={(id) => setOpen(id)}
							id="B2"
							image={BYear2}
							primaryColor="bg-sky-700"
							secondaryColor="bg-sky-600"
							side="right"
							institute="HKUST"></CourseCategory>
						<CourseCategory
							year={3}
							open={open}
							level="bachelor"
							openfnc={(id) => setOpen(id)}
							id="B3"
							image={BYear3}
							primaryColor="bg-cyan-700"
							secondaryColor="bg-cyan-600"
							side="left"
							institute="HKUST"></CourseCategory>
						<CourseCategory
							year={4}
							open={open}
							level="bachelor"
							openfnc={(id) => setOpen(id)}
							id="B4"
							image={BYear4}
							primaryColor="bg-indigo-700"
							secondaryColor="bg-indigo-600"
							side="right"
							institute="HKUST"></CourseCategory>
						<CourseCategory
							year={1}
							open={open}
							level="master"
							openfnc={(id) => setOpen(id)}
							id="M1"
							image={MYear1}
							primaryColor="bg-violet-700"
							secondaryColor="bg-violet-600"
							side="left"
							institute="HKUST"></CourseCategory>
						<CourseCategory
							year={2}
							open={open}
							level="master"
							openfnc={(id) => setOpen(id)}
							id="M2"
							image={MYear2}
							primaryColor="bg-purple-700"
							secondaryColor="bg-purple-600"
							side="right"
							institute="HKUST"></CourseCategory>
					</div>
				</div>
			</div>
		</div>
	);
};
export interface ICourseCategoryProps {
	id: string;
	openfnc: (id: string) => void;
	open: string;
	year: number;
	level: "bachelor" | "master" | "doctor";
	image: string;
	primaryColor: `bg-${string}`;
	secondaryColor: `bg-${string}`;
	side: "left" | "right";
	institute: string;
}
export const CourseCategory = ({ id, openfnc, open, year, level, image, primaryColor, secondaryColor, side, institute, ...props }: ICourseCategoryProps) => {
	const thisOpen = useMemo(() => open === id, [id, open]);
	return (
		<div className="flex flex-col">
			<div className="flex justify-center h-[200px] md:h-[400px] xl:h-[600px]">
				{side === "left" ? (
					<div className="relative w-1/2 h-full max-h-full">
						<img className="object-cover w-full h-full aspect-square" src={image}></img>
						<div className="absolute top-0 left-0 flex items-end justify-end w-full h-full p-4">
							<Button variant="contained" onClick={() => openfnc(thisOpen ? "" : id)}>
								more
							</Button>
						</div>
					</div>
				) : (
					<></>
				)}
				<div className={twMerge("p-4 flex flex-col items-end justify-end w-[200px] md:w-[400px] xl:w-[600px]", primaryColor)}>
					<div className="flex-1"></div>
					<h6 className={`w-full text-2xl font-bold ${side === "left" ? "text-left" : "text-right"}`}>
						<span className="uppercase">{`${level} `}</span>
						{`Year ${year}`}
					</h6>
					<p className={`w-full text-slate-300 ${side === "left" ? "text-left" : "text-right"}`}>{institute}</p>
				</div>
				{side === "right" ? (
					<div className="relative w-1/2 h-full max-h-full">
						<img className="object-cover w-full h-full aspect-square" src={image}></img>
						<div className="absolute top-0 left-0 flex items-end justify-start w-full h-full p-4">
							<Button variant="contained" onClick={() => openfnc(thisOpen ? "" : id)}>
								more
							</Button>
						</div>
					</div>
				) : (
					<></>
				)}
			</div>
			<Collapse in={thisOpen}>
				<div className={twMerge(`flex gap-4 p-4 w-[400px] md:w-[800px] xl:w-[1200px] flex-wrap justify-between`, secondaryColor)}>
					<div className="flex flex-col items-stretch w-full gap-2 md:w-[48%]">
						<h6>Fall Semester</h6>
						{courseSet
							.filter((e) => e.semester === "fall" && e.level === level && e.year === year)
							.map((e) => {
								return (
									<Tooltip title={e.title}>
										<div className="flex justify-between px-4 py-2 bg-transparent border-2 border-white hover:bg-slate-700">
											<p>{e.code}</p>
											<p className="text-slate-300">Credit: {e.credit}</p>
										</div>
									</Tooltip>
								);
							})}
						<div className="flex-1"></div>
						<p className="self-end text-slate-300">
							Total Credit: {courseSet.filter((e) => e.semester === "fall" && e.level === level && e.year === year).reduce((accum, curr) => accum + curr.credit, 0)}
						</p>
					</div>
					<div className="flex flex-col w-full gap-2 md:w-[48%]">
						<h6>Spring Semester</h6>
						{courseSet
							.filter((e) => e.semester === "spring" && e.level === level && e.year === year)
							.map((e) => {
								return (
									<Tooltip title={e.title}>
										<div className="flex justify-between px-4 py-2 bg-transparent border-2 border-white hover:bg-slate-700">
											<p>{e.code}</p>
											<p className="text-slate-300">Credit: {e.credit}</p>
										</div>
									</Tooltip>
								);
							})}
						<div className="flex-1"></div>

						<p className="self-end text-slate-300">
							Total Credit: {courseSet.filter((e) => e.semester === "spring" && e.level === level && e.year === year).reduce((accum, curr) => accum + curr.credit, 0)}
						</p>
					</div>
				</div>
			</Collapse>
		</div>
	);
};
