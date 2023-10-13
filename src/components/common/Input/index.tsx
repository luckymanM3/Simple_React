import styled from "styled-components";

export const InputComponent = styled.input`
  width: ${props => props.width ? props.width : '80%'};
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
`;
