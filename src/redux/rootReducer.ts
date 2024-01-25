import { combineReducers } from "redux";

import searchSlice from "./searchSlice";

const rootReducer = combineReducers({
  searchData: searchSlice,
});

export default rootReducer;
