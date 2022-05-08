const initialState = {
  iceCreams: 0,
};
type IceActionType = {
  type: "INCREMENT-ICECREAM" | "DECREMENT-ICECREAM";
};
const iceCreamReducer = (state = initialState, action: IceActionType) => {
  switch (action.type) {
    case "INCREMENT-ICECREAM":
      return {
        ...state,
        iceCreams: state.iceCreams + 1,
      };
    case "DECREMENT-ICECREAM":
      return {
        ...state,
        iceCreams: state.iceCreams - 1,
      };
    default:
      return state;
  }
};

export default iceCreamReducer;
