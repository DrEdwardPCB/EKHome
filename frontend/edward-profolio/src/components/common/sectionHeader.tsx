export const SectionHeader = ({
	before,
	after,
	src,
	titleSlot,
	subTitleSlot,
	className,
	imgClassName,
	...props
}: React.HTMLProps<HTMLDivElement> & { imgClassName?: string; before?: boolean; after?: boolean; src: string; titleSlot?: JSX.Element; subTitleSlot?: JSX.Element }) => {
	const beforeEffect =
		"before:top-0 before:block before:content-[''] before:absolute before:left-0 before:w-full before:border-t-[5vw] before:border-r-[100vw] before:border-r-transparent before:z-10";
	const afterEffect =
		"after:bottom-0 after:block after:content-[''] after:absolute after:left-0 after:w-full after:mt-[-80px] after:border-b-[5vw] after:border-l-[100vw] after:border-l-transparent after:z-10";
	return (
		<div className={`relative w-full h-96 overflow-clip ${before && beforeEffect} ${after && afterEffect} ${className}`} {...props}>
			<img className={`relative object-cover w-full h-full ${imgClassName}`} src={src}></img>
			<div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center w-full gap-4">
				{titleSlot}
				{subTitleSlot}
			</div>
		</div>
	);
};
