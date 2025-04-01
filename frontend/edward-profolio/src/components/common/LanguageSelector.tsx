import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/configureStore";
import { ELanguage } from "../../redux/types";
import { setLanguage } from "../../redux/action/languageAction";
export interface ILanguageSelector extends React.HTMLProps<HTMLDivElement> {}
export const LanguageSelector = (props: ILanguageSelector) => {
	const { locale } = useSelector((state: RootState) => state.Language);
	const dispatch = useDispatch();
	useEffect(() => {
		console.debug(locale);
	}, [locale]);
	return (
		<div>
			<div
				className="relative w-8 h-8 cursor-pointer"
				onClick={() => {
					dispatch(setLanguage(locale === ELanguage.en ? ELanguage.zhhk : ELanguage.en));
				}}>
				<div className={`transition-all absolute ${locale === ELanguage.en ? "text-blue-400 bottom-0 text-3xl left-0 font-bold z-20" : "text-white top-0 text-xs right-0"}`}>A</div>
				<div className={`transition-all absolute ${locale === ELanguage.zhhk ? "text-blue-400 bottom-0 text-2xl left-0 font-bold z-20" : "text-white top-0 text-xs right-0"}`}>文</div>
			</div>
		</div>
	);
};
