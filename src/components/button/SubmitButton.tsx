import React, { ReactNode } from 'react';
import { styled } from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  background : string;
}

const Button = styled.button<ButtonProps>`
//기본 크기가 input > button
width : 130px;
height : 40px;

font-size : 18px;

margin : 10px;

color: #9c9c9c;
border : 0px;
border-radius : 4px;
background-color: ${(props) => props.background || "#f1f1f1"};

&:hover {
    cursor : pointer;
    }
`
export default function SubmitButton({onClick,background} : ButtonProps){
    return(
        <Button onClick={onClick} background={background}>
            완료
        </Button>
    )
}