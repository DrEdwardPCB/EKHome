export interface IFunFact {
	title: string;
	colorClass?: string;
	iconSlot?: JSX.Element;
	content: string;
	height: number;
}
import { SiMinecraft, SiRepublicofgamers, SiMatrix, SiMyanimelist, SiTypescript, SiPython } from "react-icons/si";
import { GiGamepad, GiAnimalSkull } from "react-icons/gi";
import { MdPets } from "react-icons/md";
import { BiFemale, BiMale, BiHistory } from "react-icons/bi";
import { FaSuperpowers, FaBiohazard, FaSkiing, FaKeyboard } from "react-icons/fa";
import { GiJupiter, GiLaserSparks } from "react-icons/gi";
export const FunFacts: IFunFact[] = [
	{
		iconSlot: <SiMinecraft />,
		colorClass: "text-emerald-200",
		title: "Favorite Sandbox Game",
		content: "Minecraft - Redstone Computing and Building",
		height: 237,
	},
	{
		iconSlot: <GiGamepad />,
		colorClass: "text-emerald-300",
		title: "Favorite RPG game",
		content: "Monster Hunter World",
		height: 441,
	},
	{
		iconSlot: <SiRepublicofgamers />,
		colorClass: "text-emerald-400",
		title: "Hardest Game played",
		content: "Elden Ring",
		height: 343,
	},
	{
		iconSlot: <SiMatrix />,
		title: "Favorite Movie Series",
		colorClass: "text-emerald-500",
		content: "MATRIX",
		height: 627,
	},
	{
		iconSlot: <GiAnimalSkull />,
		title: "Special abnormalities",
		colorClass: "text-emerald-600",
		content: "Missing a Mandibular Incisor",
		height: 553,
	},
	{
		iconSlot: <MdPets />,
		title: "Pets",
		colorClass: "text-teal-200",
		content: "2 Cats Saber and Lancer",
		height: 297,
	},
	{
		iconSlot: <SiMyanimelist />,
		title: "Favorite Anime",
		colorClass: "text-teal-300",
		content: "Fate/Zero",
		height: 319,
	},
	{
		iconSlot: <BiFemale />,
		title: "Favorite Anime Female Character",
		colorClass: "text-teal-400",
		content: "Saber from Fate/Zero",
		height: 211,
	},
	{
		iconSlot: <BiMale />,
		title: "Favorite Anime Male Character",
		colorClass: "text-teal-500",
		content: "Kakashi from Naruto",
		height: 363,
	},
	{
		iconSlot: <FaSuperpowers />,
		title: "Most useless power",
		colorClass: "text-teal-600",
		content: "Make thumbs touching Forearm of the same hand",
		height: 547,
	},
	{
		iconSlot: <BiHistory />,
		title: "Favorite Historical Person",
		colorClass: "text-cyan-200",
		content: "Nikola Tesla",
		height: 403,
	},
	{
		iconSlot: <FaBiohazard />,
		title: "Favorite Subject",
		colorClass: "text-cyan-300",
		content: "Biochemistry",
		height: 331,
	},
	{
		iconSlot: <FaSkiing />,
		colorClass: "text-cyan-400",
		title: "Favorite Sports",
		content: "Skiing",
		height: 207,
	},
	{
		colorClass: "text-cyan-500",
		iconSlot: <SiTypescript />,
		title: "Favorite Programming Language",
		content: "Typescript",
		height: 279,
	},
	{
		iconSlot: <SiPython />,
		colorClass: "text-cyan-600",
		title: "Most hated Programming Language",
		content: "Python",
		height: 283,
	},
	{
		iconSlot: <GiJupiter />,
		colorClass: "text-sky-200",
		title: "Places want to go the most",
		content: "Europa",
		height: 463,
	},
	{
		iconSlot: <GiLaserSparks />,
		title: "Favorite Leisure Activity",
		colorClass: "text-sky-300",
		content: "3D printing & Laser Cutting",
		height: 599,
	},
	{
		iconSlot: <FaKeyboard />,
		title: "Favorite Keyboard",
		colorClass: "text-sky-400",
		content: "HHKB or MHKB(self made 3D printed keyboard with HHKB layout)",
		height: 499,
	},
];
