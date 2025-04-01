import { forwardRef } from "react";
import { FallbackComponent } from "./fallbackComponent";
import { omit } from "lodash";

export interface ISectionProps extends React.HTMLProps<HTMLDivElement> {
	headerSlot?: JSX.Element;
	contentSlot?: JSX.Element;
}
export const Section = forwardRef(({ headerSlot, contentSlot, className, ...props }: ISectionProps, ref) => {
	return (
		//@ts-ignore
		<div ref={ref} className={`flex flex-col w-full ${className}`} {...omit(props, "ref")}>
			<div>{headerSlot ?? <FallbackComponent className="min-h-[900px]"></FallbackComponent>}</div>
			<div>{contentSlot ?? <FallbackComponent className="min-h-[900px]"></FallbackComponent>}</div>
		</div>
	);
});
