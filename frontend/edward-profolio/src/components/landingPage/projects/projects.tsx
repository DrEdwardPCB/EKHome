import { Section } from "../../common/section";
import { ProjectsContent } from "./ContentComponent";
import { ProjectsHeader } from "./HeaderComponent";
import { useSection } from "../useSharedSection";
import { useEffect, useRef } from "react";

export const Projects = () => {
	const id = "projects";
	const ref = useRef(null!);
	const [isInView, currentInView] = useSection({ id, displayKey: "PROJECT_ROUTE_NAME" }, ref);
	useEffect(() => {
		console.debug(id, isInView, currentInView);
	}, [isInView, currentInView]);
	return (
		<Section
			//@ts-ignore
			ref={ref}
			id={id}
			headerSlot={<ProjectsHeader />}
			contentSlot={<ProjectsContent />}
		/>
	);
};
