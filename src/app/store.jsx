import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "../features/TokenSlice";

export default configureStore({
  reducer: {
    token: tokenReducer,
  },
});
