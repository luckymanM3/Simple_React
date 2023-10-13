import { AppActions } from 'store';

import { put } from 'redux-saga/effects';

import { IEmployee } from 'types';
// import { useSelector } from 'react-redux';

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
        name: 'david',
        address: 'denmark',
        gender: 'male',
        age: 20,
        salary: 2000
      },
      {
        id: 3,
        name: 'jose',
        address: 'sweden',
        gender: 'male',
        age: 24,
        salary: 3000
      },
      {
        id: 4,
        name: 'html',
        address: 'rb',
        gender: 'male',
        age: 23,
        salary: 400
      },
      {
        id: 5,
        name: 'javascript',
        address: 'world',
        gender: 'female',
        age: 6,
        salary: 700
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
    const result: number = action.payload;

    if (result) {
      yield put(AppActions.employee.deleteEmployeeSuccess(result));
    }
  } catch (error: any) {
    yield put(AppActions.employee.deleteEmployeeError(error.response.data.message));
  }
}

export function* sortEmployeeSaga(action: any) {
  try {
    const result: any = action.payload;
    if (result) {
      yield put(AppActions.employee.sortEmployeeSuccess(result));
    }
  } catch (error: any) {
    yield put(AppActions.employee.sortEmployeeError(error.response.data.message));
  }
}