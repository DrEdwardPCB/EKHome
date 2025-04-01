import { call, put, takeLatest } from "redux-saga/effects";
import i18n from "../../i18n/index";
import { ELanguage, EreduxActionsType, Action } from "../types";
async function updateI18n(lang: ELanguage) {
	const result = await i18n.changeLanguage(lang);
	return result;
}
export function* languageWorker(action: Action) {
	yield call(updateI18n, action.payload.locale);
	yield put({ type: EreduxActionsType.LANGUAGE_SET_REDUX, payload: { locale: action.payload.locale } });
}
export function* languageSaga() {
	yield takeLatest(EreduxActionsType.LANGUAGE_SET, languageWorker);
}
