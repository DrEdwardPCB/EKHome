import { MdPrecisionManufacturing } from "react-icons/md";
import { Pills } from "../../common/Pills";
import { useTranslation } from "react-i18next";
import { Reveal } from "../../common/Reveal";
import { twMerge } from "tailwind-merge";
import { Masonry } from "@mui/lab";
import { FunFacts, IFunFact } from "../../../assets/data/funfact";
export const FunFact = () => {
	const { t } = useTranslation();
	return (
		<div className="flex flex-col flex-start h-[80vh] mb-6">
			<div className="flex">
				<Pills hover IconSlot={<MdPrecisionManufacturing className="font-bold text-blue-600"></MdPrecisionManufacturing>} TextSlot={t("ABOUT_SUBTITLE_FUN_FACT")}></Pills>
			</div>
			<h1 className="mx-3 mb-10 text-3xl font-bold"> Fun Fact</h1>
			<div className="flex-1 overflow-x-hidden overflow-y-scroll">
				<Masonry columns={3} spacing={2}>
					{FunFacts.map((item, index) => (
						<FunFactItem key={index} item={item}></FunFactItem>
					))}
				</Masonry>
			</div>
		</div>
	);
};
export interface IFunFactItem extends React.HTMLProps<HTMLDivElement> {
	item: IFunFact;
}
export const FunFactItem = ({ item, ...props }: IFunFactItem) => {
	return (
		<Reveal>
			<div className={twMerge("bg-slate-500 bg-opacity-20 rounded-lg flex flex-col p-6 items-center gap-4 justify-start", props.className)} style={{ minHeight: item.height }}>
				<div className={twMerge("text-4xl md:text-8xl", item.colorClass)}>{item.iconSlot}</div>
				<h6 className="mt-4 text-xl font-bold">{item.title}</h6>
				<p>{item.content}</p>
			</div>
		</Reveal>
	);
};
