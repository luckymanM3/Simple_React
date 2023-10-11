import { AppActions } from 'store';

import { put } from 'redux-saga/effects';

import { IEmployee } from 'types';

export function* getEmployeesSaga(action: any) {
  try {
    const result: IEmployee[] = [
      {
        name: 'alex',
        address: 'Finland',
        gender: 'male',
        age: 10,
        salary: 1000
      },
      {
        name: 'alex',
        address: 'Finland',
        gender: 'male',
        age: 10,
        salary: 1000
      },
      {
        name: 'alex',
        address: 'Finland',
        gender: 'male',
        age: 10,
        salary: 1000
      },
      {
        name: 'alex',
        address: 'Finland',
        gender: 'male',
        age: 10,
        salary: 1000
      },
      {
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