import styled from "styled-components";

interface SelectComponentProps {
  width?: string,
  margin?: string,
}

export const SelectComponent = styled.select<SelectComponentProps>`
  width: ${props => props.width ? props.width : '80%'};
  padding: 12px 20px;
  margin: ${props => props.margin ? props.margin : '8px 0'};
  box-sizing: border-box;
`;
