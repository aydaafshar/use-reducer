import { ACTION_TYPES } from "./factAction";

export const initilalState = {
  loading: false,
  fact: "",
  error: false,
};
export const factReducer = (state, action) => {
  //{type : , data}
  switch (action.type) {
    case ACTION_TYPES.fetch_start:
      return { loading: true, fact: "", error: false };
    case ACTION_TYPES.fetch_success:
      return { loading: false, fact: action.data, error: false };
    case ACTION_TYPES.fetch_error:
      return { loading: false, fact: "", error: true };
    default:
      return state;
  }
};
