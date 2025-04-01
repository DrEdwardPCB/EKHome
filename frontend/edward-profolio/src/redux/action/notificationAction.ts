import { EreduxActionsType } from "../types";

export function checkCookie() {
	return { type: EreduxActionsType.NOTIFICATION_CHECK_VIEWED_COOKIE };
}
export function uncheckCookie() {
	return { type: EreduxActionsType.NOTIFICATION_UNCHECK_VIEWED_COOKIE };
}
export function initialCheckNotificationExpiry() {
	return { type: EreduxActionsType.NOTIFICATION_CHECK_EXPIRY };
}
export function resetNotification() {
	return { type: EreduxActionsType.NOTIFICATION_RESET };
}
