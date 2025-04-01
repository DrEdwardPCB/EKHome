import { NotificationReducer } from "./reducer/notificationReducer";
import { LanguageReducer } from "./reducer/languageReducer";
import { TextSizeReducer } from "./reducer/textSizeReducer";
import { combineReducers } from "redux";
export const rootReducer = combineReducers({
	Notification: NotificationReducer,
	Language: LanguageReducer,
	TextSize: TextSizeReducer,
});
// export type RootState = ReturnType<typeof rootReducer>;
