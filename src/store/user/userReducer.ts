import axios from "axios";

const initialState = {
  error: "",
  loading: false,
  user: [],
};
const USER_LOADING = "USER_LOADING";
const USER_LOADED = "USER_LOADED";
const USER_ERROR = "USER_ERROR";
type UserActionTypes = {
  type: "USER_LOADING" | "USER_LOADED" | "USER_ERROR";
  payload: any;
  error: any;
};

const userReducer = (state = initialState, action: UserActionTypes) => {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const fetchUser = () => {
  return async (dispatch: any) => {
    dispatch({ type: USER_LOADING });
    axios
      .get(`https://jsonplaceholder.typicode.com/users/1/posts`)
      .then((res) => {
        dispatch({ type: USER_LOADED, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: USER_ERROR, payload: err.message });
      });
  };
};

export { userReducer, fetchUser };
