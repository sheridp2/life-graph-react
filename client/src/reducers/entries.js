import { CREATE, FETCH_BY_ID } from "../constants/actionTypes.js";

const entriesReducer = (state = { isLoading: true, entries: [] }, action) => {
  switch (action.type) {
    case CREATE:
      return { ...state, entries: [...state.entries, action.payload] };
    case FETCH_BY_ID:
      return { ...state, entries: action.payload };
    default:
      return state;
  }
};
export default entriesReducer;
