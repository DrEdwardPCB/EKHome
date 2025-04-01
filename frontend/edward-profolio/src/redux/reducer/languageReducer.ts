import { Reducer } from "redux";
import { Action, ELanguage, EreduxActionsType } from "../types";
interface ILanguageReducer {
	locale: ELanguage;
}
const initialState: ILanguageReducer = {
	locale: ELanguage.en,
};
//@ts-ignore
export const LanguageReducer: Reducer<ILanguageReducer, Action> = (state = initialState, action: Action) => {
	switch (action?.type) {
		case EreduxActionsType.LANGUAGE_SET_REDUX: {
			return { locale: action.payload.locale as ELanguage };
		}
		default: {
			return state;
		}
	}
};
