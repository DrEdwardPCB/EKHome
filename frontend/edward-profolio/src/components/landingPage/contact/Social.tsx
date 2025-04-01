import { Tooltip } from "@mui/material";
import { twMerge } from "tailwind-merge";
import { AiFillLinkedin, AiFillGithub, AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { FaOrcid } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { TbSocial } from "react-icons/tb";
import { Pills } from "../../common/Pills";

export interface ISocialMethod {
	hoverText: string;
	icons: JSX.Element;
	link: string;
}
export const SocialMethods: ISocialMethod[] = [
	{
		hoverText: "LinkedIn",
		icons: <AiFillLinkedin></AiFillLinkedin>,
		link: "https://www.linkedin.com/in/edward-wong-003bab149/",
	},
	{
		hoverText: "Github",
		icons: <AiFillGithub></AiFillGithub>,
		link: "https://github.com/DrEdwardPCB",
	},
	{
		hoverText: "Facebook",
		icons: <AiFillFacebook></AiFillFacebook>,
		link: "https://www.facebook.com/yukming.wong.75",
	},
	{
		hoverText: "Instagram",
		icons: <AiOutlineInstagram></AiOutlineInstagram>,
		link: "https://www.instagram.com/dr_edwardpcb/",
	},
	{
		hoverText: "ORCID",
		icons: <FaOrcid></FaOrcid>,
		link: "https://orcid.org/my-orcid?orcid=0000-0003-4461-3207",
	},
	{
		hoverText: "Discord",
		icons: <BsDiscord></BsDiscord>,
		link: "https://discord.com/users/dr_edwardpcb",
	},
];
export const Social = () => {
	const { t } = useTranslation();

	return (
		<div className="flex flex-col h-full p-4 rounded-xl bg-slate-600 bg-opacity-60">
			<div className="flex items-center justify-between gap-2">
				<h3 className="my-4 text-xl font-bold">Social Account</h3>
				<Pills hover IconSlot={<TbSocial className="font-bold text-blue-600"></TbSocial>} TextSlot={t("CONTACT_SUBTITLE_SOCIAL")}></Pills>
			</div>
			<div className="flex flex-wrap justify-start gap-4">
				{SocialMethods.map((e) => (
					<SocialItem key={e.hoverText} {...e}></SocialItem>
				))}
			</div>
		</div>
	);
};
export interface ISocialItemProps extends ISocialMethod, React.HTMLProps<HTMLDivElement> {}
export const SocialItem = ({ hoverText, icons, link, ...props }: ISocialItemProps) => {
	return (
		<Tooltip title={hoverText}>
			<a href={link} className={twMerge("bg-opacity-25 rounded-xl bg-slate-400 w-20 h-20 text-3xl hover:-translate-y-1 flex items-center justify-center hover:bg-slate-400", props.className)}>
				{icons}
			</a>
		</Tooltip>
	);
};
