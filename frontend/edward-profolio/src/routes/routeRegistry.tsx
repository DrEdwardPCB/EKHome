export interface IRoute {
	route: string;
	displayName: string;
	component?: JSX.Element;
	nestedRoute?: IRoute[];
}
export interface IRouteComponentProps {
	route: string;
}
export function makeRoute(route: string, displayName: string, component?: JSX.Element): IRoute {
	return {
		route,
		displayName,
		component,
	};
}
const routeRegistry = [{}];
