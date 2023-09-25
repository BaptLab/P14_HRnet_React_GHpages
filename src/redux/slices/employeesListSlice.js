import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const employeesListSlice = createSlice({
  name: "employeesList",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.push(action.payload);
    },
    storeEmployeesList: (state) => {
      localStorage.setItem("employeesList", JSON.stringify(state));
    },
    getEmployeesList: () => {
      const employeesList = localStorage.getItem("employeesList");
      return JSON.parse(employeesList) || [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addEmployee, storeEmployeesList, getEmployeesList } =
  employeesListSlice.actions;

export default employeesListSlice.reducer;
