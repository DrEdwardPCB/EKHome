import { twMerge } from "tailwind-merge";
import { BsPhoneVibrateFill, BsWhatsapp, BsMailbox } from "react-icons/bs";
import { IoIosContacts } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { Pills } from "../../common/Pills";

export interface IContactMethod {
	title: string;
	icons: JSX.Element;
	content: JSX.Element;
}
export const ContactMethods: IContactMethod[] = [
	{
		title: "Phone",
		icons: <BsPhoneVibrateFill></BsPhoneVibrateFill>,
		content: (
			<div className="flex flex-col w-full gap-1">
				<a href={"tel:+8529080-6787"} className="p-1 text-sm rounded text-slate-200 hover:bg-slate-400">
					+852 9080-6787
				</a>
				<a href={"tel:+1416-837-2344"} className="p-1 text-sm rounded text-slate-200 hover:bg-slate-400">
					+1 (416)-837-2344
				</a>
			</div>
		),
	},
	{
		title: "Whatsapp",
		icons: <BsWhatsapp></BsWhatsapp>,
		content: (
			<a href={"https://wa.me/+85290806787"} className="p-1 text-sm rounded text-slate-200 hover:bg-slate-400">
				+852 9080-6787
			</a>
		),
	},
	{
		title: "Email",
		icons: <BsMailbox></BsMailbox>,
		content: (
			<a href={"mailto://eternal.edward1997@gmail.com"} className="p-1 text-sm rounded text-slate-200 hover:bg-slate-400">
				eternal.edward1997@gmail.com
			</a>
		),
	},
];
export const ContactMethod = () => {
	const { t } = useTranslation();

	return (
		<div className="flex flex-col h-full p-4 rounded-xl bg-slate-600 bg-opacity-60">
			<div className="flex items-center justify-between gap-2">
				<h3 className="my-4 text-xl font-bold">Contact Me</h3>
				<Pills hover IconSlot={<IoIosContacts className="font-bold text-blue-600"></IoIosContacts>} TextSlot={t("CONTACT_SUBTITLE_CONTACT_METHOD")}></Pills>
			</div>
			<div className="flex flex-wrap justify-start gap-4">
				{ContactMethods.map((e) => (
					<ContactItem key={e.title} {...e}></ContactItem>
				))}
			</div>
		</div>
	);
};
export interface IContactItemProps extends IContactMethod {}
export const ContactItem = ({ title, icons, content }: IContactItemProps) => {
	return (
		<div className={twMerge("bg-opacity-25 p-4 flex rounded-xl bg-slate-400 flex flex-col justify-start ")}>
			<div className="flex items-center justify-start gap-2 text-lg font-bold">
				{icons}
				{title}
			</div>
			{content}
		</div>
	);
};
