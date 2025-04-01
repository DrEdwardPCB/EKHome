import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import _ from "lodash";
import { Reveal } from "../../common/Reveal";
import { useInterval } from "usehooks-ts";
import { Button } from "@mui/material";
import { useSharedSection } from "../useSharedSection";
export const LandingPage = () => {
	const particlesInit = useCallback(async (engine: Engine) => {
		await loadSlim(engine);
	}, []);
	const particlesLoaded = useCallback(async (container: Container | undefined) => {
		await console.debug(container);
	}, []);
	const renderGrid = (row: number, col: number, className?: string) => {
		return (
			<div className={`grid grid-cols-12 gap-10 ${className}`}>
				{_.range(row * col).map((e, i) => {
					return (
						<div key={i} className="font-semibold text-gray-500 cursor-pointer tex-xl">
							•
						</div>
					);
				})}
			</div>
		);
	};
	const [index, setIndex] = useState(0);
	useInterval(() => {
		setIndex((prev) => (prev + 1) % 3);
	}, 4500);
	const renderPosition = (index: number) => {
		return (
			<>
				<span className={`translate-x-2 absolute w-96 h-fit font-bold text-sky-300 uppercase transition-all ease-in-out duration-700 ${index === 0 ? "opacity-100" : "opacity-0"}`}>
					{t("FULLSTACK_DEVELOPER")}
				</span>
				<span className={`translate-x-2 absolute w-fit h-fit font-bold text-sky-300 uppercase transition-all ease-in-out duration-700 ${index === 1 ? "opacity-100" : "opacity-0"}`}>
					{t("MAKER")}
				</span>
				<span className={`translate-x-2 absolute w-fit h-fit font-bold text-sky-300 uppercase transition-all ease-in-out duration-700 ${index === 2 ? "opacity-100" : "opacity-0"}`}>
					{t("BIOCHEMIST")}
				</span>
			</>
		);
	};
	const { t } = useTranslation();
	const { setSelectedSection } = useSharedSection();

	return (
		<div className="w-full h-[calc(100vh-4rem)] relative">
			<Particles
				id="tsparticles"
				//@ts-ignore
				init={particlesInit}
				//@ts-ignore
				loaded={particlesLoaded}
				height={`${window.screen.height}px`}
				options={{
					fullScreen: { enable: false },
					background: {
						color: {
							value: "#111827",
						},
						image: "url(/src/assets/img/0-dark.png)",
						repeat: "no-repeat",
						size: "cover",
					},
					fpsLimit: 144,
					particles: {
						color: {
							value: "#ffffff",
						},
						links: {
							color: "#ffffff",
							distance: 150,
							enable: true,
							opacity: 0.5,
							width: 0.5,
						},
						move: {
							direction: "none",
							enable: true,
							outModes: {
								default: "bounce",
							},
							random: false,
							speed: 2.5,
							straight: false,
						},
						number: {
							density: {
								enable: true,
								area: 800,
							},
							value: 50,
						},
						opacity: {
							value: 0.3,
						},
						shape: {
							type: "circle",
						},
						size: {
							value: { min: 0.5, max: 3 },
						},
					},
					detectRetina: false,
				}}
			/>
			{/* ?\container of the content */}
			<div className="absolute top-0 left-0 flex items-center justify-center w-full h-full p-10">
				<div className="relative w-[65%] h-96">
					{renderGrid(7, 12, "absolute right-[-1rem] top-[-1rem] z-10")}
					<div className="relative z-20 flex flex-col items-start justify-start gap-4 overflow-hidden">
						<Reveal>
							<h1 className="text-[3rem] xl:text-[6rem] font-bold ">
								{t("LANDING_TITLE")} <span className="text-blue-400">Edward</span>
							</h1>
						</Reveal>
						<Reveal width="1000px">
							<h2 className="relative text-xl font-thin xl:text-3xl">
								{t("LANDING_SUBTITLE")} {renderPosition(index)}
							</h2>
						</Reveal>
						<Reveal>
							<p className="text-sm xl:text-base">{t("LANDING_CONTENT")}</p>
						</Reveal>
						<div className="flex gap-6">
							<Reveal>
								<Button className="mt-6" variant="contained">
									<a
										className="block w-full h-full"
										href={`#contact`}
										onClick={() => {
											setSelectedSection("contact");
										}}>
										{"contact me"}
									</a>
								</Button>
							</Reveal>
							<Reveal>
								<Button className="mt-6 animate-bounce">
									<a
										className="block w-full h-full"
										href={`#about`}
										onClick={() => {
											setSelectedSection("about");
										}}>
										{"learn more"}
									</a>
								</Button>
							</Reveal>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
