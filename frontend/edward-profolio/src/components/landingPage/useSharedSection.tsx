import { useEffect, useState, RefObject, useMemo } from "react";
import { useBetween } from "use-between";
import { useEffectOnce } from "usehooks-ts";
import { useInView } from "framer-motion";
export interface ISection {
	id: string;
	displayKey: string;
}

const useSectionContext = () => {
	const [sections, setSections] = useState<Record<string, ISection>>({});
	const [sectionInView, setSectionInView] = useState<string>("");
	const [basePath, setBasePath] = useState<string>("");
	const [selectedSection, setSelectedSection] = useState<string>("");
	const selectedInView = useMemo(() => sectionInView === selectedSection, [sectionInView, selectedSection]);
	useEffect(() => {
		// used to reset the selected
		if (selectedInView) {
			if (selectedSection !== sectionInView) {
				setSelectedSection("");
			}
		}
	}, [selectedSection, sectionInView, selectedInView]);
	const addSection = (section: ISection) =>
		setSections((prev) => {
			prev[section.id] = section;
			return prev;
		});
	return {
		sections,
		setSections,
		addSection,
		sectionInView,
		setSectionInView,
		basePath,
		setBasePath,
		selectedInView,
		selectedSection,
		setSelectedSection,
	};
};
export const useSharedSection = () => useBetween(useSectionContext);
export const useSection = (section: ISection, sectionRef: RefObject<any>): [boolean, string] => {
	const { addSection, sectionInView, setSectionInView, basePath } = useSharedSection();
	const isInView = useInView(sectionRef, { margin: "-50% 0px -50% 0px" });

	useEffectOnce(() => {
		addSection(section);
	});

	useEffect(() => {
		if (isInView) {
			setSectionInView(section.id);
			window.history.replaceState(null, "", `${basePath}#${section.id}`);
		}
	}, [isInView]);
	return [isInView, sectionInView];
};
