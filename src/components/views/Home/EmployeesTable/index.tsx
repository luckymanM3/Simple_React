import { TableComponent } from "components";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { IEmployee } from "types";

export interface IEmployeesTableProps {
  className?: string,
  editAction: (id: number) => void,
  sortAction: (sortedField: string, isSortUp: boolean) => void,
  deleteAction: (id: number) => void,
  editCellAction: (editedRow: IEmployee) => void,
}

export const EmployeesTableComponent: React.FC<IEmployeesTableProps> = (props) => {
  const { employees } = useSelector((root: RootState) => root.employee);

  const cols = [
    {
      key: 'name',
      value: 'Name'
    },
    {
      key: 'address',
      value: 'Address',
    },
    {
      key: 'gender',
      value: 'Gender',
    },
    {
      key: 'age',
      value: 'Age',
    },
    {
      key: 'salary',
      value: 'Salary',
    },
    {
      key: 'actions',
      value: 'Actions',
    },
  ];

  return (
    <TableComponent
      {...props}
      rows={employees}
      cols={cols}
    />
  )
}