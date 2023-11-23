import React from 'react';
import { styled } from "styled-components";

import close from '../../assets/image/close.svg';

interface ButtonProps {
  onClick: (e: React.MouseEvent) => void;

}

const Button = styled.button`
//기본 크기가 input > button
width : 20px;
height : 20px;

position : absolute;
right : 20px;
top : 0px;

font-size : 40px;


border : 0px;
border-radius : 4px;

background : transparent;

&:hover {
    cursor : pointer;
    }
`
export default function SubmitButton({onClick} : ButtonProps){
    return(
        <Button onClick={onClick} type='button'>
            <img src={close} alt='x' />
        </Button>
    )
}