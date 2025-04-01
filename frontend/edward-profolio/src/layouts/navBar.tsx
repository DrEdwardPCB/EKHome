import { Button, Drawer, IconButton } from "@mui/material";
import { useWindowSize } from "usehooks-ts";
import { useMemo, useState } from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import { FallbackComponent } from "../components/common/fallbackComponent";
import { LanguageSelector } from "../components/common/LanguageSelector";
import { useTranslation } from "react-i18next";
import ekhome from "../assets/img/ekhome.png";
import { TextSizeSelector } from "../components/common/TextSizeSelector";
import { Footer } from "../components/landingPage/NavBar/Footer";
export interface INavBarProps {
	aboveSlot?: JSX.Element;
	belowSlot?: JSX.Element[];
	drawerSlot?: (...args: any) => JSX.Element;
	buttonSlot?: JSX.Element;
}
export const NavBar = (props: INavBarProps) => {
	const { width } = useWindowSize();
	const isSm = useMemo(() => width < 820, [width]);

	const [openDrawer, setOpenDrawer] = useState(false);
	const { t } = useTranslation();
	return (
		<div className="w-full">
			{props.aboveSlot ?? <FallbackComponent className="min-h-[900px]"></FallbackComponent>}
			<nav className="sticky top-0 z-50 flex items-center justify-between w-full h-16 gap-2 px-10 bg-slate-800">
				<IconButton className={`${isSm ? "" : "hidden"}`} onClick={() => setOpenDrawer(!openDrawer)}>
					<AiOutlineMenuFold></AiOutlineMenuFold>
				</IconButton>
				<img src={ekhome} className="w-16"></img>
				<div className="flex items-center justify-around gap-4">
					<h1 className="text-xl text-white">{t("NAVBAR_TITLE")}</h1>
				</div>
				{isSm ? <div className="flex-1"></div> : props.buttonSlot}
				<div className="flex items-center justify-end gap-4">
					<TextSizeSelector />
					<LanguageSelector />
				</div>
			</nav>
			{props?.belowSlot?.map ? (
				props.belowSlot.map((Ele, i) => {
					return <div key={`section-[${i}]`}>{Ele}</div>;
				})
			) : (
				<FallbackComponent className="min-h-[900px]"></FallbackComponent>
			)}
			<Footer></Footer>
			<Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
				{props?.drawerSlot &&
					props.drawerSlot({
						toggleDrawer: (bool: boolean) => {
							setOpenDrawer(false);
						},
					})}
			</Drawer>
		</div>
	);
};
