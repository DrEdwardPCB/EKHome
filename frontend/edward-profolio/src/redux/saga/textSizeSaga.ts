import { call, put, takeEvery } from "redux-saga/effects";
import { ETextSize, EreduxActionsType, Action } from "../types";
import { ITextSizeReducer } from "../reducer/textSizeReducer";
async function updateTextSize(size: ETextSize) {
	const root = document.querySelector(":root") as NonNullable<Element>;
	//@ts-ignore
	root.style.fontSize = size;
}
export function* textSizeWorker(action: Action<ITextSizeReducer>) {
	yield call(updateTextSize, action.payload.size);
	yield put({ type: EreduxActionsType.TEXT_SIZE_SET_REDUX, payload: { size: action.payload.size } });
}
export function* textSizeSaga() {
	//@ts-ignore
	yield takeEvery(EreduxActionsType.TEXT_SIZE_SET, textSizeWorker);
}
