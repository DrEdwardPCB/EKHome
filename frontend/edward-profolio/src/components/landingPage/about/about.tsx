import { Section } from "../../common/section";
import { AboutContent } from "./ContentComponent";
import { AboutHeader } from "./HeaderComponent";
import { useSection } from "../useSharedSection";
import { useEffect, useRef } from "react";

export const About = () => {
	const id = "about";
	const ref = useRef(null!);
	const [isInView, currentInView] = useSection({ id: "about", displayKey: "ABOUT_ROUTE_NAME" }, ref);
	useEffect(() => {
		console.debug(id, isInView, currentInView);
	}, [isInView, currentInView]);
	return (
		<Section
			//@ts-ignore
			ref={ref}
			id={id}
			headerSlot={<AboutHeader />}
			contentSlot={<AboutContent />}
		/>
	);
};
