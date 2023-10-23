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
width : 105px;
height : 15px;

background: #FCFCFC;
border: 0px;
border-radius: 8px;

font-size : 12px;
color : #9C9C9C;

padding : 10px;
margin : 0px 10px;

display: flex;
align-items: center;
justify-content: center;
`

export default function RecommendSearchWord(){
    return(
        <Container>
            <WordContainer>
                # 강남역
            </WordContainer>
            <WordContainer>
                # 신촌역
            </WordContainer>
            <WordContainer>
                # 인천 시청역 
            </WordContainer>
            <WordContainer>
                # 가톨릭대학교역
            </WordContainer>
        </Container>
    )
}