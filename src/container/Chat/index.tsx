import { Button, EmployeesTable, Input } from "components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppActions, RootState } from "store";
import { Container } from "components";

export const ChatContainer: React.FC = () => {

  return (
    <div>
      <Container>
        <div>
          <Button>Add Employee</Button>
        </div>
        <EmployeesTable />
      </Container>
    </div>
  )
}