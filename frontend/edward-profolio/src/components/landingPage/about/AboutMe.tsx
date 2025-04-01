import { BsChevronRight, BsDownload, BsPerson } from "react-icons/bs";
import { Pills } from "../../common/Pills";
import { Button } from "@mui/material";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import personalPicture from "../../../assets/img/ProfileImage.jpg";
import resume from "../../../assets/EDWARD_WONG_RESUME.pdf";

export const AboutMe = () => {
	const { t } = useTranslation();
	return (
		<div className="flex flex-col flex-start mb-10 overflow-y-auto h-[80vh] mb-6">
			<div className="flex">
				<Pills IconSlot={<BsPerson className="font-bold text-blue-500"></BsPerson>} TextSlot={t("ABOUT_SUBTITLE_WHO_AM_I")}></Pills>
			</div>
			<h1 className="mx-3 mb-10 text-3xl font-bold"> About Me</h1>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-5 grow-1">
				<img
					className="object-none object-[50%_25%] col-span-1 row-span-1 md:col-span-1 md:row-span-5 rounded-2xl shadow-[rgba(200,200,200,.3)] shadow-md aspect-square"
					src={personalPicture}></img>
				<div className="bg-zinc-500 bg-opacity-30 col-span-1 row-span-1 md:col-span-2 md:row-span-2 rounded-2xl shadow-[rgba(200,200,200,.3)] shadow-md flex flex-col p-6 ">
					<h4 className="mb-4 text-xl font-bold">Bio</h4>
					<p>
						Edward is a biochemistry graduate from HKUST with a strong programming background. He's skilled in full-stack development and has worked on several software projects in various
						fields. In his free time, he enjoys experimenting with new technologies, including 3D printing, and creating his own programming projects. Edward is always looking to improve
						his skills and knowledge in programming and 3D printing.
					</p>
				</div>
				<div className="bg-zinc-500 bg-opacity-30 col-span-1 row-span-1 md:col-span-2 md:row-span-2 rounded-2xl shadow-[rgba(200,200,200,.3)] shadow-md">
					<div className="grid grid-cols-1 m-4 sm:grid-cols-2 gap-x-10 gap-y-3 w-full-h-full">
						<div className="flex items-center justify-between">
							<h6 className="font-bold">{"Name(Chinese)"}</h6>
							<p>{"王煜銘"}</p>
						</div>
						<div className="flex items-center justify-between">
							<h6 className="font-bold">{"Name(Romanized)"}</h6>
							<p>{"WONG, Yuk Ming"}</p>
						</div>
						<div className="flex items-center justify-between">
							<h6 className="font-bold">{"Name(English)"}</h6>
							<p>{"Edward"}</p>
						</div>
						<div className="flex items-center justify-between">
							<h6 className="font-bold">Pronoun</h6>
							<p>{"He/Him/His"}</p>
						</div>
						<div className="flex items-center justify-between">
							<h6 className="font-bold">Age</h6>
							<p>{dayjs().subtract(1997, "years").format("YY")}</p>
						</div>
						<div className="flex items-center justify-between">
							<h6 className="font-bold">Residence</h6>
							<p>{"HK->CA"}</p>
						</div>
						<div className="flex items-center justify-between">
							<h6 className="font-bold">Hologram</h6>
							<p>{"♏"}</p>
						</div>
						<div className="flex items-center justify-between">
							<h6 className="font-bold">Email</h6>
							<p>{"eternal.edward1997@gmail.com"}</p>
						</div>
					</div>
				</div>
				<div className="flex items-center col-span-1 row-span-1 gap-2 mb-10">
					<Button className="px-6 py-3 text-base rounded-xl" variant="contained">
						<a className="flex justify-between" href={resume} download>
							Download CV <span className="w-4"></span>
							<BsDownload className="text-lg"></BsDownload>
						</a>
					</Button>
					<Button disabled className="px-6 py-3 text-base rounded-xl">
						Swipe for more <span className="w-4"></span>
						<BsChevronRight className="text-lg"></BsChevronRight>
					</Button>
				</div>
			</div>
		</div>
	);
};
