import { Section } from "../../common/section";
import { ScheduleContent } from "./ContentComponent";
import { ScheduleHeader } from "./HeaderComponent";
import { useSection } from "../useSharedSection";
import { useEffect, useRef } from "react";

export const Schedule = () => {
	const id = "schedule";
	const ref = useRef(null!);
	const [isInView, currentInView] = useSection({ id: "schedule", displayKey: "SCHEDULE_ROUTE_NAME" }, ref);
	useEffect(() => {
		console.debug(id, isInView, currentInView);
	}, [isInView, currentInView]);
	return (
		<Section
			//@ts-ignore
			ref={ref}
			id={id}
			headerSlot={<ScheduleHeader />}
			contentSlot={<ScheduleContent />}
		/>
	);
};
