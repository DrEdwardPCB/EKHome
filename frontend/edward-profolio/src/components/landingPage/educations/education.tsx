import { Section } from "../../common/section";
import { EducationContent } from "./ContentComponent";
import { EducationHeader } from "./HeaderComponent";
import { useSection } from "../useSharedSection";
import { useEffect, useRef } from "react";

export const Education = () => {
	const id = "education";
	const ref = useRef(null!);
	const [isInView, currentInView] = useSection({ id, displayKey: "EDUCATION_ROUTE_NAME" }, ref);
	useEffect(() => {
		console.debug(id, isInView, currentInView);
	}, [isInView, currentInView]);
	return (
		<Section
			//@ts-ignore
			ref={ref}
			id={id}
			headerSlot={<EducationHeader />}
			contentSlot={<EducationContent />}
		/>
	);
};
