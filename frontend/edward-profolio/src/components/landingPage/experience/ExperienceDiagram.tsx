import dayjs from "dayjs";
import { ExperienceList, IExperience } from "../../../assets/data/experience";
import { cloneDeep, constant, isNil, range, times, uniq } from "lodash";
import { Timeline, TimelineItem, TimelineOppositeContent, TimelineSeparator, TimelineConnector, TimelineDot, TimelineContent } from "@mui/lab";
import { useWindowSize } from "usehooks-ts";
import { useMemo } from "react";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Pills } from "../../common/Pills";
import { useTranslation } from "react-i18next";
import { GrUserWorker } from "react-icons/gr";
import { MdWork, MdOutlineLocalActivity } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { Tooltip } from "@mui/material";
import { SiFreelancer } from "react-icons/si";
dayjs.extend(customParseFormat);
export const ExperienceDiagram = () => {
	const { width } = useWindowSize();
	const { t } = useTranslation();
	const isSm = useMemo(() => width < 1200, [width]);
	const yearList = uniq(
		ExperienceList.flatMap((exp) => [exp.start, exp.end])
			.sort((a, b) => (dayjs(a).isAfter(b) ? (dayjs(b).isAfter(a) ? 1 : 0) : -1))
			.map((e) => Number(dayjs(e).format("YYYY")))
	);
	const filledYearList = range(Math.min(...yearList), Math.max(...yearList) + 1)
		.reverse()
		.map((e) => e.toString());
	const concurrentYear = filledYearList.map(
		(year) =>
			ExperienceList.filter((exp) => dayjs(year).isSame(dayjs(exp.start)) || dayjs(year).isSame(dayjs(exp.end)) || (dayjs(year).isAfter(exp.start) && dayjs(year).isBefore(exp.end))).length + 1
	);
	const maxConcurrent = Math.max(...concurrentYear);
	const PerYearExperienceList: (IExperience | undefined)[][] = filledYearList
		.map<(IExperience | undefined)[]>((e) => times(maxConcurrent, constant(undefined)))
		.reduce((accum, curr, i) => {
			const year = filledYearList[i];
			const experienceThisYear = ExperienceList.filter((exp) => {
				return dayjs(exp.start).isSame(dayjs(year), "year") || dayjs(exp.end).isSame(dayjs(year), "year") || (dayjs(year).isAfter(dayjs(exp.start)) && dayjs(year).isBefore(dayjs(exp.end)));
			});
			if (i === 0) {
				curr = curr.map((e, idx) => {
					return experienceThisYear[idx] ?? e;
				});
				accum.push(curr);
			} else {
				//check experience t+1 year

				curr = curr
					.map((e, idx) => {
						return accum[i - 1][idx];
					})
					.map((e, idx) => {
						const hasInThisYear = experienceThisYear.find((f) => dayjs(f.start).isSame(dayjs(e?.start)));
						if (hasInThisYear) {
							return e;
						} else {
							return undefined;
						}
					});
				for (const item of experienceThisYear) {
					const currItem = curr.find((e) => dayjs(e?.start).isSame(dayjs(item.start)));
					if (currItem) {
						continue;
					}
					const indexUndefined = curr.indexOf(undefined);
					curr[indexUndefined] = cloneDeep(item);
				}
				accum.push(curr);
			}
			return accum;
		}, [] as (IExperience | undefined)[][]);

	const renderPills = (nature: string) => {
		switch (nature) {
			case "fulltime":
				return <Pills hover IconSlot={<MdWork className="font-bold text-blue-500"></MdWork>} TextSlot={t("EXPERIENCE_SUB_TITLE_FULL")}></Pills>;
			case "parttime":
				return <Pills hover IconSlot={<GrUserWorker className="font-bold text-blue-600"></GrUserWorker>} TextSlot={t("EXPERIENCE_SUB_TITLE_PART")}></Pills>;
			case "intern":
				return <Pills hover IconSlot={<PiStudent className="font-bold text-sky-500"></PiStudent>} TextSlot={t("EXPERIENCE_SUB_TITLE_INTERN")}></Pills>;
			case "voluntary":
				return <Pills hover IconSlot={<MdOutlineLocalActivity className="font-bold text-sky-600"></MdOutlineLocalActivity>} TextSlot={t("EXPERIENCE_SUB_TITLE_VOLUNTARY")}></Pills>;
			case "freelance":
				return <Pills hover IconSlot={<SiFreelancer className="font-bold text-cyan-500"></SiFreelancer>} TextSlot={t("EXPERIENCE_SUB_TITLE_FREELANCE")}></Pills>;
		}
	};
	const classNameTemplate =
		"grid-cols-1 grid-cols-2 grid-cols-3 grid-cols-4 h-[calc(20rem-1rem)] h-[calc(40rem-2rem)] h-[60rem-3rem] h-[calc(80rem-4rem)] h-[calc(100rem-5rem)] h-[calc(120rem-6rem)] h-[calc(140rem-7rem)]";
	if (isSm) {
		return (
			<div className="flex flex-col items-center gap-2">
				{ExperienceList.sort((a, b) => (dayjs(a.end).isAfter(b.end) ? (dayjs(b.end).isAfter(a.end) ? 1 : 0) : -1)).map((e) => (
					<div className="relative w-full overflow-visible" key={e?.start?.toString() + e?.end?.toString()}>
						<div className={`rounded-2xl bg-slate-500 bg-opacity-50 p-4 flex flex-col gap-2 `}>
							<div className="flex flex-wrap items-center gap-2">
								<div className="py-3 px-4 border-white border-[1px] rounded-lg w-fit">
									{`${dayjs(e.start).format("YYYY MMM")} - ${dayjs(e.end).isBefore(dayjs()) ? dayjs(e.end).format("YYYY MMM") : "NOW"}`}
								</div>
								{renderPills(e.nature)}
							</div>
							<div>
								<Tooltip title={e.companyDesc}>
									<span className="font-bold">{e.company}</span>
								</Tooltip>
								{"; "}
								<span className="italic">
									{`${e.title}
														 ${e.role ? `, ${e.role}` : ""}`}
								</span>
							</div>
							<div className="flex flex-1 min-h-0 overflow-y-auto">
								<div className="pl-5 space-y-3 list-disc o marker:text-sky-400 min-h-fit">
									{e.jobDuty.map((e) => (
										<li key={e}>{e}</li>
									))}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		);
	}
	return (
		<Timeline position="right">
			{filledYearList.map((year, idx) => {
				return (
					<TimelineItem key={year}>
						<TimelineOppositeContent sx={{ m: "auto 0", maxWidth: "4rem" }} align="right" variant="body2" color="text.secondary">
							{year}
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineConnector />
							<TimelineDot></TimelineDot>
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent className={`h-80 grid gap-3 grid-cols-${maxConcurrent}`}>
							{PerYearExperienceList[idx].map((e, i, arr) => {
								if (isNil(e) || !(dayjs(e?.end).format("YYYY") === year)) {
									return <div className="relative col-span-1 overflow-visible"></div>;
								} else {
									return (
										<div className="relative overflow-visible" key={e?.start?.toString() + e?.end?.toString()}>
											<div
												className={`rounded-2xl bg-slate-500 bg-opacity-50 p-4 flex flex-col gap-2 h-[calc(${
													(Math.abs(dayjs(e.end).endOf("year").diff(dayjs(e.start).startOf("year"), "year")) + 1) * 20
												}rem-${(Math.abs(dayjs(e.end).endOf("year").diff(dayjs(e.start).startOf("year"), "year")) + 1) * 1}rem)]`}>
												<div className="flex flex-wrap items-center gap-2">
													<div className="py-3 px-4 border-white border-[1px] rounded-lg w-fit">
														{`${dayjs(e.start).format("YYYY MMM")} - ${dayjs(e.end).isBefore(dayjs()) ? dayjs(e.end).format("YYYY MMM") : "NOW"}`}
													</div>
													{renderPills(e.nature)}
												</div>
												<div>
													<Tooltip title={e.companyDesc}>
														<span className="font-bold">{e.company}</span>
													</Tooltip>
													{"; "}
													<span className="italic">
														{`${e.title}
														 ${e.role ? `, ${e.role}` : ""}`}
													</span>
												</div>
												<div className="flex flex-1 min-h-0 overflow-y-auto">
													<div className="pl-5 space-y-3 list-disc o marker:text-sky-400 min-h-fit">
														{e.jobDuty.map((e) => (
															<li key={e}>{e}</li>
														))}
													</div>
												</div>
											</div>
										</div>
									);
								}
							})}
						</TimelineContent>
					</TimelineItem>
				);
			})}
		</Timeline>
	);
};
