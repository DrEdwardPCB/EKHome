export enum EreduxActionsType {
	NOTIFICATION_CHECK_EXPIRY = "NOTIFICATION_CHECK_EXPIRY",
	NOTIFICATION_CHECK_VIEWED_COOKIE = "NOTIFICATION_CHECK_VIEWED_COOKIE",
	NOTIFICATION_UNCHECK_VIEWED_COOKIE = "NOTIFICATION_UNCHECK_VIEWED_COOKIE",
	NOTIFICATION_RESET = "NOTIFICATION_RESET",
	LANGUAGE_SET = "LANGUAGE_SET",
	LANGUAGE_SET_REDUX = "LANGUAGE_SET_REDUX",
	TEXT_SIZE_SET = "TEXT_SIZE_SET",
	TEXT_SIZE_SET_REDUX = "TEXT_SIZE_SET_REDUX",
	TEXT_SIZE_RESET = "TEXT_SIZE_RESET",
}
export interface Action<T = any, P = any> {
	readonly type: T;
	readonly payload?: P;
}
export enum ELanguage {
	en = "en",
	zhhk = "zh-HK",
}
export enum ETextSize {
	sm = "12px",
	base = "16px",
	xl = "20px",
}
