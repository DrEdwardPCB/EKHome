import { Section } from "../../common/section";
import { ExperienceContent } from "./ContentComponent";
import { ExperienceHeader } from "./HeaderComponent";
import { useSection } from "../useSharedSection";
import { useEffect, useRef } from "react";

export const Experience = () => {
	const id = "experience";
	const ref = useRef(null!);
	const [isInView, currentInView] = useSection({ id, displayKey: "EXPERIENCE_ROUTE_NAME" }, ref);
	useEffect(() => {
		console.debug(id, isInView, currentInView);
	}, [isInView, currentInView]);
	return (
		<Section
			//@ts-ignore
			ref={ref}
			id={id}
			headerSlot={<ExperienceHeader />}
			contentSlot={<ExperienceContent />}
		/>
	);
};
