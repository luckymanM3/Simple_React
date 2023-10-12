import { AppActions } from 'store';

import { put } from 'redux-saga/effects';

import { IEmployee } from 'types';

export function* getEmployeesSaga(action: any) {
  try {
    const result: IEmployee[] = [
      {
        id: 1,
        name: 'alex',
        address: 'Finland',
        gender: 'male',
        age: 10,
        salary: 1000
      },
      {
        id: 2,
        name: 'alex',
        address: 'Finland',
        gender: 'male',
        age: 10,
        salary: 1000
      },
      {
        id: 3,
        name: 'alex',
        address: 'Finland',
        gender: 'male',
        age: 10,
        salary: 1000
      },
      {
        id: 4,
        name: 'alex',
        address: 'Finland',
        gender: 'male',
        age: 10,
        salary: 1000
      },
      {
        id: 5,
        name: 'alex',
        address: 'Finland',
        gender: 'male',
        age: 10,
        salary: 1000
      }
    ]

    if (result) {
      yield put(AppActions.employee.getEmployeesSuccess(result));
    }
  } catch (error: any) {
    yield put(AppActions.employee.getEmployeesError(error.response.data.message));
  }
}

export function* addEmployeeSaga(action: any) {
  try {
    const result: IEmployee = action.payload;

    if (result) {
      yield put(AppActions.employee.addEmployeeSuccess(result));
    }
  } catch (error: any) {
    yield put(AppActions.employee.addEmployeeError(error.response.data.message));
  }
}

export function* editEmployeeSaga(action: any) {
  try {
    const result: IEmployee = action.payload;

    if (result) {
      yield put(AppActions.employee.editEmployeeSuccess(result));
    }
  } catch (error: any) {
    yield put(AppActions.employee.editEmployeeError(error.response.data.message));
  }
}

export function* deleteEmployeeSaga(action: any) {
  try {
    const result: IEmployee = action.payload;

    if (result) {
      yield put(AppActions.employee.deleteEmployeeSuccess(result));
    }
  } catch (error: any) {
    yield put(AppActions.employee.deleteEmployeeError(error.response.data.message));
  }
}