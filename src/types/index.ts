export interface IEmployee {
  id?: number | undefined,
  name?: string | undefined,
  address?: string | undefined,
  gender?: string | undefined,
  age?: number | undefined,
  salary?: number | undefined,
  [key: string]: any;
}

export interface SortEmployeePayload {
  sortedField: string,
  isSortUp: boolean
}