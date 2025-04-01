import { ELanguage, EreduxActionsType } from "../types";

export function setLanguage(lang: ELanguage) {
	return { type: EreduxActionsType.LANGUAGE_SET, payload: { locale: lang } };
}
