import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  
  align-items: center;
  width: 500px;
  height: 50px;
  
  border-radius: 12px;
  
`;

const WordContainer = styled.div`
width : 100px;
height : 15px;

border: 0px;
border-radius: 16px;

color : #fff;
font-size : 12px;
background : #E54444;


padding : 10px;
margin : 0px 23.3px;

display: flex;
align-items: center;
justify-content: center;
`
const Hash = styled.span`
color : #fff;
`

export default function RecommendSearchWord(){
    return(
        <Container>
            
            <WordContainer>
                <Hash>#</Hash> 신촌역
            </WordContainer>
            <WordContainer>
                <Hash>#</Hash> 인천 시청역 
            </WordContainer>
            <WordContainer>
                <Hash>#</Hash> 가톨릭대학교역
            </WordContainer>
        </Container>
    )
}