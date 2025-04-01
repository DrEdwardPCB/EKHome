import dayjs from "dayjs";
import { ISkillItem, skillsSet } from "./skills";
import { BsGithub, BsCodeSlash, BsDownload } from "react-icons/bs";
import { FaBitbucket } from "react-icons/fa";
export enum EProjectType {
	RESEARCH = "PROJECT_SUBTITLE_RESEARCH",
	BACKEND = "PROJECT_SUBTITLE_BACK",
	FRONTEND = "PROJECT_SUBTITLE_FRONT",
	FULLSTACK = "PROJECT_SUBTITLE_FULL",
	LIBS = "PROJECT_SUBTITLE_LIBS",
	NATIVE = "PROJECT_SUBTITLE_NATIVE",
}
export enum EStatus {
	DEVELOPING,
	ARCHIVED,
	PUBLIC,
	PRIVATE,
}
export interface IProject {
	name: string;
	skills: ISkillItem[];
	motivation: string;
	description: string;
	links: ILink[];
	bulletPoint: string[];
	projectAccomplishDate: dayjs.Dayjs;
	image: string;
	type: EProjectType[];
	status: EStatus[];
}
export interface ILink {
	displayText: string;
	href: string;
	icon: JSX.Element;
}
function findSkills(skillsKey: (typeof skillsSet)[number]["title"][]) {
	return skillsSet.filter((e) => skillsKey.includes(e.title));
}
export const linkTemplate: Record<string, ILink> = {
	github: {
		displayText: "Github",
		href: "",
		icon: <BsGithub />,
	},
	bitbucket: {
		displayText: "Bitbucket",
		href: "",
		icon: <FaBitbucket />,
	},
	liveDemo: {
		displayText: "Live Demo",
		href: "",
		icon: <BsCodeSlash />,
	},
	download: {
		displayText: "Download",
		href: "",
		icon: <BsDownload />,
	},
};
export function linksFactory(key: keyof typeof linkTemplate, link: string): ILink {
	return Object.assign({}, linkTemplate[key], { href: link });
}
export const ProjectList: IProject[] = [
	{
		name: "Alternative Lyrics",
		skills: findSkills(["Typescript/Javascript", "React", "Windsurf", "github actions", "Google adsense", "supabase"]),
		motivation: "To fulfill the needs that wants to sing alternative version of song during karaoke",
		description: "This project is to allow easy search for alternative version of lyrics by singer and song name",
		links: [linksFactory("github", "https://github.com/DrEdwardPCB/alternative-song-lyrics"), linksFactory("Live Demo", "https://alternative-lyrics.ekhome.life/")],
		bulletPoint: ["First touch on vipe coding", "Use supabase as BaaS platform for free and easy integration ", "Integrate adsense to monetization"],
		projectAccomplishDate: dayjs("2025-04-01"),
		image: "",
		type: [EProjectType.FRONTEND],
		status: [EStatus.PUBLIC],
	},
	{
		name: "Wedding Suite",
		skills: findSkills(["Typescript/Javascript", "React", "Next.js", "AWS ECS", "AWS ECR", "Terraform", "MongoDB", "Event Stream", "FSM"]),
		motivation: "To create a wonderful Wedding with my own style and cater potential event that might occur during wedding",
		description: "This project is a wedding management site that helps guest management, distribute information before, durin and after the wedding",
		links: [linksFactory("github", "https://github.com/DrEdwardPCB/Wedding-Suite"), linksFactory("Live Demo", "https://wedding.ekhome.life/")],
		bulletPoint: [
			"Created using nextjs allow easy guest management, multimedia streaming, and Games during wedding",
			"Enable register and trigger email after that",
			"NextJS powered backend to handle event stream and finite state machine",
		],
		projectAccomplishDate: dayjs("2025-01-25"),
		image: "",
		type: [EProjectType.FULLSTACK, EProjectType.FRONTEND, EProjectType.BACKEND],
		status: [EStatus.PUBLIC],
	},
	{
		name: "Wedding Proposal Suite",
		skills: findSkills(["Typescript/Javascript", "React", "React Native", "Node.js", "nx", "RESTfulAPI", "WebSocket"]),
		motivation: "To create a wonderful Wedding proposal with my own style to make surprize to my fiancée",
		description: "This project is full stack project that supports both players, helpers and IoT appliances during the city hunt game of my wedding proposal",
		links: [linksFactory("github", "https://github.com/DrEdwardPCB/Wedding-Proposal-Suite")],
		bulletPoint: [
			"iOS React Native app that allows for noticing next location of the city hunt, registration of locations and keep track of clues that is found",
			"React frontend app that allows helper to keep notes, and for admin to setup locations",
			"ExpressJS API server for keeping track of all data and provide secure login for both App and web portal",
			"Node.JS server on raspberry PI to control motor of the gadgets",
		],
		projectAccomplishDate: dayjs("2022-11-15"),
		image: "",
		type: [EProjectType.FULLSTACK, EProjectType.NATIVE],
		status: [EStatus.PRIVATE, EStatus.ARCHIVED],
	},
	{
		name: "KisledPassword",
		skills: findSkills(["Typescript/Javascript", "Node.js", "React Native"]),
		motivation: "Password saving app often requires purchase, But we think we can create a password storage as save as them without paying money",
		description: "This project stores password locally on phone in AES-128 encrypted format and allowing user to retrieve information as they needed",
		links: [linksFactory("github", "https://github.com/DrEdwardPCB/KisledPassword")],
		bulletPoint: ["iOS React Native app iOS that allows user saving their password", "password are stored locally in AES-128 encrypted format", "password are pin protected"],
		projectAccomplishDate: dayjs("2020-02-15"),
		image: "",
		type: [EProjectType.NATIVE],
		status: [EStatus.PRIVATE],
	},
	{
		name: "KisledLabCal",
		skills: findSkills(["Typescript/Javascript", "Node.js", "React Native"]),
		motivation: "During Mphil Study, there are many solution recipe, I made this app to facilitate saving solution recipe",
		description:
			"This app is a solution recipe and scientific calculator. Since scientific calculator app often have insufficient capability in their free version, it will be better for developing a scientific Lab calculator that suits me and my labmate needs",
		links: [linksFactory("github", "https://github.com/DrEdwardPCB/REACTNATIVE-kisled-labcal"), linksFactory("download", "https://apps.apple.com/ca/app/kisled-labcal/id1505062061")],
		bulletPoint: ["iOS React Native app iOS that allows user to save solution recipe", "powerful Scientific calculator"],
		projectAccomplishDate: dayjs("2020-04-15"),
		image: "",
		type: [EProjectType.NATIVE],
		status: [EStatus.PUBLIC],
	},
	{
		name: "KisledDecision",
		skills: findSkills(["Typescript/Javascript", "Node.js", "React Native", "RESTfulAPI"]),
		motivation: "My girl friend was having difficulties in making decision and makes me feel annoyed, Therefore I created this app to help her",
		description: "This project uses Random API to help making decision in various ways, e.g. by Category, by Random number, by shuffle series, by random draw in pool",
		links: [linksFactory("github", "https://github.com/DrEdwardPCB/REACTNATIVE-kisled-decision"), linksFactory("download", "https://apps.apple.com/ca/app/kisled-decision/id1507646249")],
		bulletPoint: [
			"iOS React Native app for making decision by the power of random",
			"uses Random API when internet is good or uses Math.random when internet is poor",
			"support random number, category, shuffle, random draw from pool",
		],
		projectAccomplishDate: dayjs("2020-04-13"),
		image: "",
		type: [EProjectType.NATIVE],
		status: [EStatus.PUBLIC],
	},
	{
		name: "JAVASCRIPT-Clustering",
		skills: findSkills(["Typescript/Javascript", "JQuery", "HTML+CSS3"]),
		motivation: "To perform data analytics on my Patch Clamp Data",
		description: "This allows pasting excel data and perform unsupervised machine learning algorithm to distinguish which groups of data are significantly different from other",
		links: [linksFactory("github", "https://github.com/DrEdwardPCB/JAVASCRIPT-Clustering"), linksFactory("liveDemo", "https://dredwardpcb.github.io/JAVASCRIPT-Clustering/index.html")],
		bulletPoint: ["uses k-mean, DBSCAN and mean shift clustering", "allow copy from excel", "tweaking of algo parameters and export result"],
		projectAccomplishDate: dayjs("2020-12-01"),
		image: "",
		type: [EProjectType.FRONTEND, EProjectType.RESEARCH],
		status: [EStatus.PUBLIC],
	},
	{
		name: "JAVASCRIPT-ImageProcessor",
		skills: findSkills(["Typescript/Javascript", "JQuery", "HTML+CSS3", "OpenCV"]),
		motivation: "To perform data analytics on microscope image data",
		description: "This allow uploading of microscope image and perform filter and computer vision algorithm to identify charateristic of image",
		links: [linksFactory("github", "https://github.com/DrEdwardPCB/JAVASCRIPT-ImageProcessor"), linksFactory("liveDemo", "https://dredwardpcb.github.io/JAVASCRIPT-ImageProcessor/")],
		bulletPoint: ["This uses OpenCV algorithm to perform filter on image", "Primarily used for Canny Edge Detection algorithm"],
		projectAccomplishDate: dayjs("2020-12-01"),
		image: "",
		type: [EProjectType.FRONTEND, EProjectType.RESEARCH],
		status: [EStatus.PUBLIC],
	},
	{
		name: "MIX-ProteinStructurePrediction",
		skills: findSkills(["Typescript/Javascript", "TensorFlow", "React", "Python", "HTML+CSS3"]),
		motivation: "School course work group project",
		description: "This is to predict the protein ternary structure from its primary sequence",
		links: [linksFactory("github", "https://github.com/DrEdwardPCB/MIX-ProteinStructurePrediction")],
		bulletPoint: ["It uses Python and Tensorflow to train the model", "it uses Tensorflow JS to run the model in frontend", "it uses threeJS to visualize data"],
		projectAccomplishDate: dayjs("2020-05-20"),
		image: "",
		type: [EProjectType.FRONTEND, EProjectType.NATIVE, EProjectType.RESEARCH],
		status: [EStatus.PUBLIC, EStatus.ARCHIVED],
	},
	{
		name: "JAVASCRIPT-LIFS5070HW2-analyze-tools",
		skills: findSkills(["React", "Typescript/Javascript"]),
		motivation: "School course work group project",
		description: "This is to analyze the data of Optical Tweezer",
		links: [
			linksFactory("github", "https://github.com/DrEdwardPCB/JAVASCRIPT-LIFS5070HW2-analyze-tools"),
			linksFactory("liveDemo", "https://dredwardpcb.github.io/JAVASCRIPT-LIFS5070HW2-analyze-tools/"),
		],
		bulletPoint: ["It uploads .txt file from Professor", "It allow tuning of calculation parameter", "it outputs the result in diagram and table for the DNA extension"],
		projectAccomplishDate: dayjs("2020-10-25"),
		image: "",
		type: [EProjectType.FRONTEND, EProjectType.RESEARCH],
		status: [EStatus.PUBLIC],
	},
	{
		name: "python-taew",
		skills: findSkills(["Python"]),
		motivation: "Tries to back trace Elliott wave pattern in Crypto Currency",
		description: "Based on a paper found on Elliott wave pattern on internet, try to implement the searching criteria in python",
		links: [linksFactory("github", "https://github.com/DrEdwardPCB/JAVASCRIPT-LIFS5070HW2-analyze-tools"), linksFactory("download", "https://pypi.org/project/taew/")],
		bulletPoint: ["It finds all possible Elliott Wave pattern from a time series data", "It output in python dictionary"],
		projectAccomplishDate: dayjs("2021-05-08"),
		image: "",
		type: [EProjectType.LIBS],
		status: [EStatus.PUBLIC, EStatus.ARCHIVED],
	},
	{
		name: "JAVA-FYPvesiCount-GUI",
		skills: findSkills(["Java"]),
		motivation: "Tries to Assist on counting GUVs from microscope image during my FYP",
		description: "This is a Java FX application based on Java 10, it combines canvas and counter to help me analyze the image",
		links: [linksFactory("github", "https://github.com/DrEdwardPCB/JAVA-FYPvesiCount-GUI"), linksFactory("download", "https://github.com/DrEdwardPCB/JAVA-FYPvesiCount-GUI/releases/tag/v2.1")],
		bulletPoint: ["Java FX GUI", "Canvas linked with Counter", "Image importing and Chart plotting"],
		projectAccomplishDate: dayjs("2019-01-05"),
		image: "",
		type: [EProjectType.NATIVE, EProjectType.RESEARCH],
		status: [EStatus.PUBLIC, EStatus.ARCHIVED],
	},
	{
		name: "JAVA-Blade-Auto-MCplugin",
		skills: findSkills(["Java"]),
		motivation: "Tries to build plugin exclusive to self hosted minecraft server",
		description: "This uses Spigot API to create plugin for Minecraft Spigot 1.12",
		links: [
			linksFactory("github", "https://github.com/DrEdwardPCB/JAVA-Blade-Auto-MCplugin"),
			linksFactory("download", "https://www.spigotmc.org/resources/blade-auto-a-auto-workbench-solution.58087/"),
		],
		bulletPoint: ["Spigot API", "minecraft 1.12 plugin", "auto crafting table"],
		projectAccomplishDate: dayjs("2019-12-05"),
		image: "",
		type: [EProjectType.NATIVE, EProjectType.RESEARCH],
		status: [EStatus.PUBLIC],
	},
];
