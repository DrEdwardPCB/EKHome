import { useTranslation } from "react-i18next";
import contact from "../../../assets/img/contact.jpg";
import { Pills } from "../../common/Pills";
import { Reveal } from "../../common/Reveal";
import { SectionHeader } from "../../common/sectionHeader";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosContacts } from "react-icons/io";
import { TbSocial } from "react-icons/tb";
export const ContactHeader = () => {
	const { t } = useTranslation();
	return (
		<SectionHeader
			before
			after
			src={contact}
			className="after:border-gray-700 before:border-[#e3e9ff]"
			imgClassName="object-[50%_5%]"
			titleSlot={
				<Reveal>
					<h1 className="text-6xl font-bold">{t("CONTACT_TITLE")}</h1>
				</Reveal>
			}
			subTitleSlot={
				<Reveal>
					<div className="flex flex-wrap gap-1">
						<Pills hover IconSlot={<AiOutlineMail className="font-bold text-blue-500"></AiOutlineMail>} TextSlot={t("CONTACT_SUBTITLE_EMAIL")}></Pills>
						<Pills hover IconSlot={<IoIosContacts className="font-bold text-blue-600"></IoIosContacts>} TextSlot={t("CONTACT_SUBTITLE_CONTACT_METHOD")}></Pills>
						<Pills hover IconSlot={<TbSocial className="font-bold text-blue-600"></TbSocial>} TextSlot={t("CONTACT_SUBTITLE_SOCIAL")}></Pills>
					</div>
				</Reveal>
			}
		/>
	);
};
