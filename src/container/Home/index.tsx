import { Button, EmployeesTable, Input, AddEditModal } from "components";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Container } from "components";
import { addEmployee, getEmployees, editEmployee, deleteEmployee } from "store/slices/employee.slice";
import { IEmployee } from "types";
import { useSelector } from "react-redux";
import { RootState } from "store";

const initailData: IEmployee = {
  id: -1,
  name: '',
  address: '',
  gender: 'male',
  age: -1,
  salary: -1
}

export const HomeContainer: React.FC = () => {
  const dispatch = useDispatch();
  const [orderBy, setOrderBy] = useState<string>('');
  const [ascDesc, setAscDesc] = useState<string>('');
  const [isShowAddModal, setIsShowAddModal] = useState<boolean>(false);
  const [isShowEditModal, setIsShowEditModal] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<IEmployee>(initailData);
  const { employees } = useSelector((root: RootState) => root.employee);

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

  const onAddEmployee = (employee: IEmployee) => {
    if(employee.id === -1) {
      employee.id = employees.length+1;
      dispatch(addEmployee(employee));
    } else {
      dispatch(editEmployee(employee));
    }

    onCloseModal();
  }

  const onEditAction = (id: number) => {
    setSelectedRow({...(employees.find(i => i.id === id))});
    setIsShowEditModal(true);
  }

  const onDeleteAction = (id: number) => {
    dispatch(deleteEmployee(id));
  }

  const onCloseModal = () => {
    setIsShowAddModal(false);
    setIsShowEditModal(false);
    setSelectedRow(initailData);
  }

  return (
    <>
      <div className="full-content">
        <Container>
          <div className="btn-group">
            <Button onClick={
              () => {
                setIsShowAddModal((prevIsShowAddModal) => !prevIsShowAddModal);
                }
              }
            >
              Add Employee
            </Button>
          </div>
          <EmployeesTable 
            className={'employee-table'}
            editAction={onEditAction}
            deleteAction={onDeleteAction}
          />
        </Container>
      </div>
      {
        isShowAddModal && 
          <AddEditModal 
            modalType="add" 
            modalTitle="New Employee"
            initialData={selectedRow}
            closeAction={onCloseModal} 
            addAction={onAddEmployee}
          />
      }
      {
        isShowEditModal && 
          <AddEditModal 
            modalType="edit" 
            modalTitle="Edit Employee" 
            initialData={selectedRow}
            closeAction={onCloseModal} 
            addAction={onAddEmployee} 
          />
      }
    </>
  )
}