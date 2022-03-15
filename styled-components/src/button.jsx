// import './App.css'
import styled from  'styled-components'
export const Button=styled.button`
color:${({theme})=>theme==='dark'?'white':'black'};
  background-color: ${({theme})=>theme==='dark'?'black':'white'};
  padding: 5px 20px;
  margin: 10px;
  &:hover{
    color:${({theme})=>theme==='dark'?'black':'white'};
    background-color:  ${({theme})=>theme==='dark'?'white':'black'};
  }
`;
