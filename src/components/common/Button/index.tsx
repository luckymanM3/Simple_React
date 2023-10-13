import styled from "styled-components";

interface ButtonComponentProps {
  background?: string;
}

export const ButtonComponent = styled.button<ButtonComponentProps>`
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  user-select: none;

  border: none;
  border-radius: 2px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  color: white;
  background-color: ${props => props.background ? props.background : '#1C76E2'};
  // box-shadow: 0 0 4px #999;
  outline: none;
  background-position: center;
  transition: background 0.8s;
  border: 1px solid #ddd;
  margin-right: 15px;
`;