import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
/**
 * Reveal component is used to wrap the existing component to display a Reveal animation upon show to
 */
interface IRevealProps extends React.HTMLProps<HTMLDivElement> {
	children: JSX.Element;
	width?: "fit-content" | "100%" | string | number;
}
export const Reveal = ({ children, width }: IRevealProps) => {
	const ref = useRef(null!);
	const isInView = useInView(ref);
	const mainControls = useAnimation();
	useEffect(() => {
		if (isInView) {
			mainControls.start("visible");
		}
	}, [isInView]);

	return (
		<div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
			<motion.div
				variants={{
					hidden: { opacity: 0, y: 75 },
					visible: { opacity: 1, y: 0 },
				}}
				initial="hidden"
				animate={mainControls}
				transition={{ duration: 0.5, delay: 0.25 }}>
				{children}
			</motion.div>
		</div>
	);
};
