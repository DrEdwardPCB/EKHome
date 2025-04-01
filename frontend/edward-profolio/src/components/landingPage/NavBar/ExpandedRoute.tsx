import { useSharedSection } from "../useSharedSection";
import { ExpandedRouteItem } from "./ExpandedRouteItem";

export const ExpandedRoute = () => {
	const { sections } = useSharedSection();
	return (
		<div className="relative flex-1 min-w-0">
			<div className="flex items-center justify-start min-w-0 gap-2 px-6 overflow-y-auto before:bg-gradient-to-r before:from-slate-800 before:to-transparent after:bg-gradient-to-l after:from-slate-800 after:to-transparent before:w-4 before:h-full after:w-4 after:h-full before:absolute after:absolute before:left-0 after:right-0">
				{Object.entries(sections).map(([key]) => {
					return <ExpandedRouteItem key={`${key}-expandedRouteItem`} id={key}></ExpandedRouteItem>;
				})}
			</div>
		</div>
	);
};
