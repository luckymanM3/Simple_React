import { TableComponent } from "components";
import { useSelector } from "react-redux";
import { RootState } from "store";

export interface IEmployeesTableProps {
  className?: string,
};

export const EmployeesTable: React.FC<IEmployeesTableProps> = (props) => {
  const { employees } = useSelector((root: RootState) => root.employee);

  console.log(employees);

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