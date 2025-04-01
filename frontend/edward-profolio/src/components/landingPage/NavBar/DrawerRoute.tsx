import { Box, Divider, List, ListItem, ListItemIcon, ListItemButton, ListItemText } from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useSharedSection } from "../useSharedSection";
import { DrawerRouteItem } from "./DrawerRouteItem";

export interface IDrawerRouteProps {
	toggleDrawer: (open: boolean) => void;
}
export const DrawerRoute = ({ toggleDrawer }: IDrawerRouteProps) => {
	const { sections } = useSharedSection();
	return (
		//@ts-ignore
		<Box sx={{ width: "30vw" }} role="presentation" onClick={() => toggleDrawer(false)} onKeyDown={() => toggleDrawer(false)}>
			<List>
				{Object.entries(sections).map(([key]) => {
					return <DrawerRouteItem key={`${key}-drawerRouteItem`} id={key}></DrawerRouteItem>;
				})}
			</List>
		</Box>
	);
};
