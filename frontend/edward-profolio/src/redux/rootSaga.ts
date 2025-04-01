import { languageSaga } from "./saga/languageSaga";
import { all } from "redux-saga/effects";
import { textSizeSaga } from "./saga/textSizeSaga";
export default function* rootSaga() {
	yield all([languageSaga(), textSizeSaga()]);
	// code after all-effect
}
