import { useMemo } from "react";
import { useSharedSection } from "../useSharedSection";
import { useTranslation } from "react-i18next";

export interface IExpandedRouteItemProps extends React.HTMLProps<HTMLDivElement> {
	id: string;
}
export const ExpandedRouteItem = ({ id, ...props }: IExpandedRouteItemProps) => {
	const { sectionInView, setSelectedSection, selectedSection, sections } = useSharedSection();
	const { t } = useTranslation();
	const displayNameKey = useMemo(() => sections[id].displayKey, [id, sections]);
	return (
		<div className={`h-full py-2`} {...props}>
			<div className={` ${sectionInView === id ? "border-b-sky-400 border-b-4" : ""}`}>
				<div className={`px-6 py-2 rounded hover:bg-gray-500 ${selectedSection === id ? "font-bold" : ""}`}>
					<a
						href={`#${id}`}
						onClick={() => {
							setSelectedSection(id);
						}}>
						{t(displayNameKey)}
					</a>
				</div>
			</div>
		</div>
	);
};
