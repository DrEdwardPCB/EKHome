import { ETextSize, EreduxActionsType } from "../types";

export function setTextSize(size: ETextSize) {
	return { type: EreduxActionsType.TEXT_SIZE_SET, payload: { size } };
}
export function resetTextSize() {
	return { type: EreduxActionsType.TEXT_SIZE_RESET };
}
