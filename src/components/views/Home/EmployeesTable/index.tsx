import { TableComponent } from "components";
import { useSelector } from "react-redux";
import { RootState } from "store";

export interface IEmployeesTableProps {
  className?: string,
  sortAction?: any,
  editAction?: any,
  deleteAction?: any,
}

export const EmployeesTable: React.FC<IEmployeesTableProps> = (props) => {
  const { employees } = useSelector((root: RootState) => root.employee);

  const rows = [
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
      rows={rows}
      cols={employees}
    />
  )
}