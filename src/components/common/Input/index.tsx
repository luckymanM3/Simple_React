import styled from "styled-components";

export const Input = styled.input`
background-image: linear-gradient(#1C76E2, #1C76E2), linear-gradient(#bfbfbf, #bfbfbf);
border: 0 none;
border-radius: 0;
box-shadow: none;
float: none;
background-color: transparent;
background-position: center bottom, center calc(100% - 1px);
background-repeat: no-repeat;
background-size: 0 2px, 100% 1px;
padding: 0;
margin-left: 15px;
transition: background 0s ease-out 0s;
color: #bfbfbf;
min-height: 35px;
display: initial;
width: 16rem;
outline: none;
font-size: 15px;
&:focus {
    background-size: 100% 2px, 100% 1px;
    outline: 0 none;
    transition-duration: 0.3s;
    color: #525252;
  }
`;
