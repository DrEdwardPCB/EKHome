import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/configureStore";
import { ETextSize } from "../../redux/types";
import { setTextSize } from "../../redux/action/textSizeAction";
import { useTranslation } from "react-i18next";

export const TextSizeSelector = () => {
	const { size } = useSelector((state: RootState) => state.TextSize);
	const dispatch = useDispatch();
	const { t } = useTranslation();
	useEffect(() => {
		console.debug(size);
		console.debug(ETextSize.xl);
		console.debug(ETextSize.base);
		console.debug(ETextSize.sm);
	}, [size]);
	return (
		<div className="flex items-center gap-2">
			<p
				className={`font-bold text-xl cursor-pointer ${size === ETextSize.xl ? "text-blue-400" : ""} hover:text-blue-300`}
				onClick={() => {
					dispatch(setTextSize(ETextSize.xl));
				}}>
				{t("TEXTSIZESELECTOR_TEXT")}
			</p>
			<p
				className={`font-bold text-base cursor-pointer ${size === ETextSize.base ? "text-blue-400" : ""} hover:text-blue-300`}
				onClick={() => {
					dispatch(setTextSize(ETextSize.base));
				}}>
				{t("TEXTSIZESELECTOR_TEXT")}
			</p>
			<p
				className={`font-bold text-xs cursor-pointer ${size === ETextSize.sm ? "text-blue-400" : ""} hover:text-blue-300`}
				onClick={() => {
					dispatch(setTextSize(ETextSize.sm));
				}}>
				{t("TEXTSIZESELECTOR_TEXT")}
			</p>
		</div>
	);
};
