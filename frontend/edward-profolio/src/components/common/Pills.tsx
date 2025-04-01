export interface IPillsProps extends React.HTMLProps<HTMLDivElement> {
	IconSlot?: JSX.Element;
	TextSlot: string | JSX.Element;
	hover?: boolean;
}
export const Pills = ({ IconSlot, TextSlot, hover, className, ...props }: IPillsProps) => {
	return (
		<div
			{...props}
			className={`flex items-center gap-4 px-4 py-1 m-3 shadow rounded-xl bg-zinc-600 text-gray-50 ${className} ${
				hover ? "transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl hover:scale-110" : ""
			}`}>
			{IconSlot}
			{TextSlot}
		</div>
	);
};
