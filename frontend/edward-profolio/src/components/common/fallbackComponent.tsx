import { omit } from "lodash";
import React from "react";
export interface IFallbackComponentProps extends React.HTMLProps<HTMLDivElement> {
	displayTitle?: string;
	displaySubtitle?: string;
}
export const FallbackComponent = (props: IFallbackComponentProps) => {
	return (
		<div {...omit(props, ["className", "displayTitle", "displaySubtitle"])} className={`flex flex-col justify-center items-center bg-slate-600 text-white ${props.className} `}>
			<h1 className="text-2xl">{props.displayTitle ?? "Coming Soon"}</h1>
			<h4 className="text-base">{props.displaySubtitle ?? "Currently Not Available"}</h4>
		</div>
	);
};
