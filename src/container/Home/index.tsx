import { Button, EmployeesTable, Input } from "components";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Container } from "components";
import { addEmployee, getEmployees } from "store/slices/employee.slice"

export const HomeContainer: React.FC = () => {
  const dispatch = useDispatch();
  const [orderBy, setOrderBy] = useState<string>('');
  const [ascDesc, setAscDesc] = useState<string>('');

  useEffect(() => {
    dispatch(
      getEmployees(
        {
          orderBy: orderBy,
          ascDesc: ascDesc,
        }
      )
    );
  }, [orderBy, ascDesc])

  const onAddEmployee = () => {
    dispatch(addEmployee(
      {
        name: 'xxx',
        address: 'sss.ccc.ddd',
        gendar: 'male',
        age: 10,
        salary: 100,
      }, )
    );
  }

  return (
    <div>
      <Container>
        <div className="btn-group">
          <Button onClick={onAddEmployee}>Add Employee</Button>
          {/* <Link to="/chat"> */}
            <Button>Chat</Button>
          {/* </Link> */}
        </div>
        <EmployeesTable className={'employee-table'} />
      </Container>
    </div>
  )
}