import styled from "styled-components";

export const Button = styled.button`
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
  background-color: #1C76E2;
  box-shadow: 0 0 4px #999;
  outline: none;
  background-position: center;
  transition: background 0.8s;
  margin-right: 15px;

  &:hover {
    background: #2196f3 radial-gradient(circle, transparent 1%, #2196f3 1%) center/15000%;
  }

  &:active {
    background-color: #6eb9f7;
    background-size: 100%;
    transition: background 0s;
  }
`;