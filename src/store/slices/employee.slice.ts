import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IEmployee, SortEmployeePayload } from 'types';

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

  sortingEmployee: boolean,
  sortedEmployee: boolean,

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
  sortingEmployee: false,
  sortedEmployee: false,
  errors: [],
};

const employeeSlice = createSlice({
  name: 'employee',
  initialState: initialState,
  reducers: {
    /**
     * get employees
     */
    getEmployees(state: StateType) {
      state.gettingEmployees = true;
      state.gotEmployees = false;
    },
    getEmployeesSuccess(state, action) {
      state.gettingEmployees = false;
      state.gotEmployees = true;
      state.employees = action.payload;
      console.log(state.employees);
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

    sortEmployee(state: StateType, action) {
      state.sortingEmployee = false;
      state.sortedEmployee = false;
    },
    sortEmployeeSuccess(state, action: PayloadAction<SortEmployeePayload>) {
      state.sortingEmployee = false;
      state.sortedEmployee = true;
      const field = action.payload.sortedField;
      const isSortUp = action.payload.isSortUp;
      
      if(field === 'age' || field === 'salary') {
        if(isSortUp) {
          state.employees.sort((a, b) => a[field as keyof IEmployee] - b[field as keyof IEmployee]);
        } else {
          state.employees.sort((a, b) => b[field as keyof IEmployee] - a[field as keyof IEmployee]);
        }
      } else {
        if(isSortUp) {
          state.employees.sort((a, b) => a[field as keyof IEmployee].localeCompare(b[field as keyof IEmployee]));
        } else {
          state.employees.sort((a, b) => b[field as keyof IEmployee].localeCompare(a[field as keyof IEmployee]));
        }
      }
    },
    sortEmployeeError(state, action) {
      state.sortingEmployee = false;
      state.sortedEmployee = false;
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

  sortEmployee,
  sortEmployeeSuccess,
  sortEmployeeError,
} = employeeSlice.actions;

export const reducer = employeeSlice.reducer;
export const actions = employeeSlice.actions;
