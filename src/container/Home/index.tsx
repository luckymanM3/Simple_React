import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IEmployee } from "types";
import { RootState } from "store";
import { 
  getEmployees, 
  addEmployee, 
  editEmployee, 
  deleteEmployee, 
  sortEmployee 
} from "store/slices/employee.slice";
import { 
  ContainerComponent,
  EmployeesTableComponent, 
  AddEditModalComponent, 
  ChartComponent,
  ButtonComponent  
} from "components";

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
  const [isShowAddModal, setIsShowAddModal] = useState<boolean>(false);
  const [isShowEditModal, setIsShowEditModal] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<IEmployee>(initailData);
  const { employees } = useSelector((root: RootState) => root.employee);

  useEffect(() => {
    dispatch(
      getEmployees()
    );
  }, [dispatch])

  const onAddEmployee = (employee: IEmployee) => {
    if(employee.id === -1) {
      employee.id = employees.length+1;
      dispatch(addEmployee(employee));
    } else {
      dispatch(editEmployee(employee));
    }

    onCloseModal();
  }

  const onSortAction = (sortedField: string, isSortUp: boolean) => {
    if(sortedField) dispatch(sortEmployee({sortedField, isSortUp}));
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
        <ContainerComponent>
          <div className="btn-group">
            <ButtonComponent onClick={
              () => {
                setIsShowAddModal((prevIsShowAddModal) => !prevIsShowAddModal);
                }
              }
            >
              Add Employee
            </ButtonComponent>
          </div>
          <EmployeesTableComponent 
            className={'employee-table'}
            sortAction={onSortAction}
            editAction={onEditAction}
            deleteAction={onDeleteAction}
            editCellAction={onAddEmployee}
          />


        </ContainerComponent>
        <ContainerComponent>
          <hr />
          <ChartComponent />
        </ContainerComponent>
      </div>
      {
        isShowAddModal && 
          <AddEditModalComponent 
            modalType="add" 
            modalTitle="New Employee"
            initialData={selectedRow}
            closeAction={onCloseModal} 
            addAction={onAddEmployee}
          />
      }
      {
        isShowEditModal && 
          <AddEditModalComponent 
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