import { useLocation } from "react-router-dom";
import { NavBar } from "./navBar";
import { About } from "../components/landingPage/about/about";
import { Education } from "../components/landingPage/educations/education";
import { Experience } from "../components/landingPage/experience/experience";
import { LandingPage } from "../components/landingPage/landing/landing";
import { useSharedSection } from "../components/landingPage/useSharedSection";
import { useEffectOnce } from "usehooks-ts";
import { Schedule } from "../components/landingPage/schedule/schedule";
import { DrawerRoute } from "../components/landingPage/NavBar/DrawerRoute";
import { Projects } from "../components/landingPage/projects/projects";
import { Contact } from "../components/landingPage/contact/contact";
import { ExpandedRoute } from "../components/landingPage/NavBar/ExpandedRoute";

export const LandingLayout = () => {
	const loc = useLocation();
	const { setBasePath } = useSharedSection();
	useEffectOnce(() => {
		setBasePath(loc.pathname);
	});
	return (
		<NavBar
			belowSlot={[<About />, <Experience />, <Projects />, <Education />, <Schedule />, <Contact />]}
			aboveSlot={<LandingPage />}
			buttonSlot={<ExpandedRoute />}
			drawerSlot={(props: any) => <DrawerRoute {...props} />}></NavBar>
	);
};
