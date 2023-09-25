import { configureStore } from "@reduxjs/toolkit";
import employeesListReducer from "./slices/employeesListSlice";

export const store = configureStore({
  reducer: {
    employeesList: employeesListReducer,
  },
});
