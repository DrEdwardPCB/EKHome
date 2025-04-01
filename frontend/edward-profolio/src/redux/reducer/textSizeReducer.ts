import { Action, ETextSize, EreduxActionsType } from "../types";
import { Reducer } from "redux";
import _ from "lodash";
export interface ITextSizeReducer {
	size: ETextSize;
}
const initialState = {
	size: ETextSize.base,
};

export const TextSizeReducer: Reducer<ITextSizeReducer, Action> = (state: ITextSizeReducer = initialState, action: Action) => {
	switch (action?.type) {
		case EreduxActionsType.TEXT_SIZE_SET_REDUX: {
			return { size: action.payload.size };
		}
		case EreduxActionsType.TEXT_SIZE_RESET: {
			return _.cloneDeep(initialState);
		}
		default:
			return state;
	}
};
