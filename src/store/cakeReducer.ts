import { InitialStateType, ActionType } from "./type";

const type = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
};
const initialState: InitialStateType = {
  count: 0,
};
const counterReducer = (
  state = initialState,
  action: ActionType
): InitialStateType => {
  console.log(action);

  switch (action.payload) {
    case type.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case type.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;
