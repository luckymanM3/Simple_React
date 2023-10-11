import { createSlice } from '@reduxjs/toolkit';
import { IEmployee } from 'types';

type StateType = {
  employees: IEmployee[];
  gettingEmployees: boolean;
  gotEmployees: boolean;

  addingEmployee: boolean,
  addedEmployee: boolean,
  errors: string[];
};

const initialState: StateType = {
  employees: [],
  gettingEmployees: false,
  gotEmployees: false,
  addingEmployee: false,
  addedEmployee: false,
  errors: [],
};

const employeeSlice = createSlice({
  name: 'employee',
  initialState: initialState,
  reducers: {
    /**
     * get employees
     */
    getEmployees(state: StateType, action) {
      state.gettingEmployees = true;
      state.gotEmployees = false;
    },
    getEmployeesSuccess(state, action) {
      state.gettingEmployees = false;
      state.gotEmployees = true;
      state.employees = action.payload;
    },
    getEmployeesError(state, action) {
      state.gettingEmployees = false;
      state.gotEmployees = false;
      state.errors = action.payload;
    },

    addEmployee(state: StateType, action) {
      state.addingEmployee = false;
      state.addedEmployee = false;
    },
    addEmployeeSuccess(state, action) {
      state.addingEmployee = false;
      state.addedEmployee = true;
      const { result } = action.payload;
      state.employees = [...state.employees, result];
    },
    addEmployeeError(state, action) {
      state.addingEmployee = false;
      state.addedEmployee = false;
      state.errors = [...state.errors, ...action.payload];
    },

    resetErrors(state) {
      state.errors = [];
    },
  },
});   

export const {
  getEmployees,
  getEmployeesSuccess,
  getEmployeesError,

  addEmployee,
  addEmployeeSuccess,
  addEmployeeError,

} = employeeSlice.actions;

export const reducer = employeeSlice.reducer;
export const actions = employeeSlice.actions;
