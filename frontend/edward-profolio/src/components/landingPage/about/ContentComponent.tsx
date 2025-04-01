import { Pills } from "../../common/Pills";
import { BsPerson, BsTextParagraph } from "react-icons/bs";
import { MdPrecisionManufacturing } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";

// image
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { AboutMe } from "./AboutMe";
import { Skills } from "./Skills";
import { FunFact } from "./FunFact";
export const AboutContent = () => {
	const { t } = useTranslation();

	return (
		<div className="min-h-[70vh] bg-[url(/src/assets/img/7-dark.png)]">
			<div className="w-full min-h-[70vh] p-2 sm:p-4 lg:p-6 bg-gradient-174 from-gray-700 from-20% via-transparent to-80% to-gray-600">
				<Swiper
					modules={[Pagination, Mousewheel]}
					spaceBetween={50}
					slidesPerView={1}
					pagination={{ clickable: true }}
					mousewheel={{
						forceToAxis: true,
					}}
					onSwiper={(swiper) => console.log(swiper)}>
					<SwiperSlide>
						<AboutMe />
					</SwiperSlide>
					<SwiperSlide>
						<Skills />
					</SwiperSlide>
					<SwiperSlide>
						<FunFact />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};
