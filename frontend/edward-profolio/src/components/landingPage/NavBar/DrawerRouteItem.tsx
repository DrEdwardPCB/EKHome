import { useMemo } from "react";
import { useSharedSection } from "../useSharedSection";
import { useTranslation } from "react-i18next";
import { ListItem, ListItemButton } from "@mui/material";
export interface IDrawerRouteItemProps {
	id: string;
}
export const DrawerRouteItem = ({ id }: IDrawerRouteItemProps) => {
	const { sectionInView, setSelectedSection, selectedSection, sections } = useSharedSection();
	const { t } = useTranslation();
	const displayNameKey = useMemo(() => sections[id].displayKey, [id, sections]);
	return (
		<ListItem disablePadding>
			<ListItemButton>
				<div className={`w-full ${sectionInView === id ? "border-b-sky-400 border-b-4" : ""}`}>
					<a
						className="block w-full h-full"
						href={`#${id}`}
						onClick={() => {
							setSelectedSection(id);
						}}>
						{t(displayNameKey)}
					</a>
				</div>
			</ListItemButton>
		</ListItem>
	);
};
