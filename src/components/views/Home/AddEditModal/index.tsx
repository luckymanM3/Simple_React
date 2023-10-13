import {
    ButtonComponent,
    InputComponent,
    LabelComponent,
    SelectComponent 
} from "components"
import { IEmployee } from "types";
import styled from "styled-components";
import { useState } from "react";

const FullModalContainer = styled.div`
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
`;

const ModalContent = styled.div`
    position: relative;
    background-color: #fefefe;
    margin: auto;
    padding: 0;
    border: 1px solid #888;
    max-width: 680px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.4s;
    animation-name: animatetop;
    animation-duration: 0.4s
`

export interface IModalProps {
  modalType: string,
  modalTitle: string,
  closeAction: () => void,
  addAction: (emp: IEmployee) => void,
  initialData: IEmployee,
  children?: any
};

export const AddEditModalComponent: React.FC<IModalProps> = (props) => {
  
    const { initialData, modalTitle, modalType, closeAction, addAction } = props;
    const [employee, setEmployee] = useState<IEmployee>(initialData);

    const onChangeEmployee = (event: any) => {
        const { name, value } = event.target;
        setEmployee(prev => {
            return {
                ...prev,
                [name]: value,
            };
        });
    }

    const submitHandler = (e: any) => {
        e.preventDefault();
        addAction(employee);
    }

    let actions;
    if(modalType === 'add') {
        actions = (
            <>
                <ButtonComponent type="submit" className="add-btn" background="#147d69">Add</ButtonComponent>
                <ButtonComponent className="cancel-btn" onClick={closeAction} background="#db5d5d">Cancel</ButtonComponent>
            </>
        )
    } else {
        actions = (
            <>
                <ButtonComponent type="submit" className="add-btn" background="#147d69">Edit</ButtonComponent>
                <ButtonComponent className="cancel-btn" onClick={closeAction} background="#db5d5d">Cancel</ButtonComponent>
            </>
        )
    }

    const modal = window.document.getElementById("addEditModal");
    window.onclick = function(event) {
        console.log('event', modal);
        if (event.target === modal) {
            closeAction();
        }
    }

    return (
        <FullModalContainer id="addEditModal">
            <ModalContent>
                <form onSubmit={submitHandler}>
                    <div className="modal-header">
                        <span className="close" onClick={closeAction}>&times;</span>
                        <h2>{modalTitle}</h2>
                    </div>
                    <div className="modal-body">
                        <div className="input-group name">
                            <LabelComponent htmlFor="name">Name</LabelComponent>
                            <InputComponent type="text" id="name" name="name" value={employee.name} onChange={onChangeEmployee} />
                        </div>
                        <div className="input-group address">
                            <LabelComponent htmlFor="address">Address</LabelComponent>
                            <InputComponent type="text" id="address" name="address" value={employee.address} onChange={onChangeEmployee} />
                        </div>
                        <div className="input-group gender">
                            <LabelComponent htmlFor="name">Gender</LabelComponent>
                            <SelectComponent id="gender" name="gender" value={employee.gender} onChange={onChangeEmployee}>
                                <option value={"male"}>male</option>
                                <option value={"female"}>female</option>
                            </SelectComponent>
                        </div>
                        <div className="input-group age">
                            <LabelComponent htmlFor="age">Age</LabelComponent>
                            <InputComponent type="number" id="age" name="age" value={employee.age === -1 ? '' : employee.age} onChange={onChangeEmployee} />
                        </div>
                        <div className="input-group salary">
                            <LabelComponent htmlFor="salary">Salary</LabelComponent>
                            <InputComponent type="number" id="salary" name="salary" value={employee.salary === -1 ? '' : employee.salary} onChange={onChangeEmployee}  />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <div className="action-group">
                            {
                                actions
                            }
                        </div>
                    </div>
                </form>
            </ModalContent>
        </FullModalContainer>
    )
}