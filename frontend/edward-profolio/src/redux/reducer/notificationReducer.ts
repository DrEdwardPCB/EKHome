import dayjs from "dayjs";
import { Action, EreduxActionsType } from "../types";
import { Reducer } from "redux";

export interface INotificationReducer {
	viewedCookie: boolean;
	expiryDate: string;
}

const makeInitialState = (): INotificationReducer => ({
	viewedCookie: false,
	expiryDate: dayjs().toISOString(),
});
export const NotificationReducer: Reducer<INotificationReducer, Action<EreduxActionsType>> = (state: INotificationReducer = makeInitialState(), action: Action<EreduxActionsType>) => {
	switch (action?.type) {
		case EreduxActionsType.NOTIFICATION_CHECK_VIEWED_COOKIE:
			return { viewedCookie: true, expiryDate: dayjs().add(90, "day").toISOString() };
		case EreduxActionsType.NOTIFICATION_UNCHECK_VIEWED_COOKIE:
			return { ...state, viewedCookie: false };
		case EreduxActionsType.NOTIFICATION_CHECK_EXPIRY:
			if (dayjs().isAfter(dayjs(state.expiryDate))) {
				return makeInitialState();
			} else {
				return state;
			}
		case EreduxActionsType.NOTIFICATION_RESET:
			return makeInitialState();
		default:
			return state;
	}
};
