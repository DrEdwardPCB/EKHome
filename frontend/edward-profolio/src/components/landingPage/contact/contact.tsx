import { Section } from "../../common/section";
import { ContactContent } from "./ContentComponent";
import { ContactHeader } from "./HeaderComponent";
import { useSection } from "../useSharedSection";
import { useEffect, useRef } from "react";

export const Contact = () => {
	const id = "contact";
	const ref = useRef(null!);
	const [isInView, currentInView] = useSection({ id, displayKey: "CONTACT_ROUTE_NAME" }, ref);
	useEffect(() => {
		console.debug(id, isInView, currentInView);
	}, [isInView, currentInView]);
	return (
		<Section
			//@ts-ignore
			ref={ref}
			id={id}
			headerSlot={<ContactHeader />}
			contentSlot={<ContactContent />}
		/>
	);
};
