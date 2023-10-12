import { createSlice } from '@reduxjs/toolkit';
import { IEmployee } from 'types';

type StateType = {
  employees: IEmployee[];
  gettingEmployees: boolean;
  gotEmployees: boolean;

  addingEmployee: boolean,
  addedEmployee: boolean,
  
  editingEmployee: boolean,
  editedEmployee: boolean,

  deletingEmployee: boolean,
  deletedEmployee: boolean,

  errors: string[];
};

const initialState: StateType = {
  employees: [],
  gettingEmployees: false,
  gotEmployees: false,
  addingEmployee: false,
  addedEmployee: false,
  editingEmployee: false,
  editedEmployee: false,
  deletingEmployee: false,
  deletedEmployee: false,
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
      state.employees = [...state.employees, action.payload];
    },
    addEmployeeError(state, action) {
      state.addingEmployee = false;
      state.addedEmployee = false;
      state.errors = [...state.errors, ...action.payload];
    },

    editEmployee(state: StateType, action) {
      state.editingEmployee = false;
      state.editedEmployee = false;
    },
    editEmployeeSuccess(state, action) {
      state.editingEmployee = false;
      state.editedEmployee = true;
      const index = state.employees.findIndex(emp => emp.id === action.payload.id)
      state.employees = [...state.employees.slice(0, index), action.payload , ...state.employees.slice(index+1, state.employees.length)];
    },
    editEmployeeError(state, action) {
      state.editingEmployee = false;
      state.editedEmployee = false;
      state.errors = [...state.errors, ...action.payload];
    },

    deleteEmployee(state: StateType, action) {
      state.deletingEmployee = false;
      state.deletedEmployee = false;
    },
    deleteEmployeeSuccess(state, action) {
      state.deletingEmployee = false;
      state.deletedEmployee = true;
      const index = state.employees.findIndex(emp => emp.id === action.payload)
      state.employees.splice(index, 1);
    },
    deleteEmployeeError(state, action) {
      state.deletingEmployee = false;
      state.deletedEmployee = false;
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

  editEmployee,
  editEmployeeSuccess,
  editEmployeeError,

  deleteEmployee,
  deleteEmployeeSuccess,
  deleteEmployeeError,
} = employeeSlice.actions;

export const reducer = employeeSlice.reducer;
export const actions = employeeSlice.actions;
