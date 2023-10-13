import styled from "styled-components";

export const TableEditInputComponent = styled.input`
    width: 100%;
    height: 100%;
    padding: 8px 0;
    margin: 0;
    box-sizing: border-box;
    border: none;
    border-bottom: 0px solid grey;
    background: transparent;
    outline: none;

    &:focus {
        border-bottom: 1px solid grey;
    }
`;
