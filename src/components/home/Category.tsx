import React from "react";
import { styled } from "styled-components";

import none_card from "../../assets/image/none_card.svg";

const Container = styled.div`
width : 1400px;


//1400px 이하면
@media (max-width : 1400px){
    width: 700px;

}
`

const Inst = styled.div`

span{
    display : flex;
    align-items : center;
    color : #E54444;
    font-size : 24px;
    margin : 10px 0px;
}
img {
    margin-left : 10px;
}

`
const ItemContainer = styled.div`

`

const Item = styled.div`
display : inline-block;

width : 320px;

margin : 20px 15px;

//1400px 이하면
@media (max-width : 1400px){
    width: 250px;
    margin : 0px 50px;

}

`

const ItemImg = styled.div`
/* 사진이 없어서 일단은 배경색으로 구현 */
width : auto;


border-radius : 8px;

img{
}
`

const ItemInfo = styled.div`
display : flex;
justify-content : space-between;
`
const Left = styled.div`

p{
    font-weight : 500;
}


`

const ItemAddress = styled.div`

color : #9C9C9C;

`

export default function Hot(){

    return(
        <>
            <Container>
                <Inst>
                    <span>
                        카테고리 이름

                    </span>
                </Inst>
                
                <ItemContainer>
                <Item>
                    <ItemImg>
                        <img src={none_card} alt='x' />
                    </ItemImg>

                    <ItemInfo>
                        <Left>식당이름</Left>
                    </ItemInfo>

                    <ItemAddress>
                        지역명 - 음식 카테고리표기
                    </ItemAddress>

                </Item>
                <Item>
                    <ItemImg>
                        <img src={none_card} alt='x' />
                    </ItemImg>

                    <ItemInfo>
                        <Left>식당이름</Left>
                    </ItemInfo>

                    <ItemAddress>
                        지역명 - 음식 카테고리표기
                    </ItemAddress>

                </Item>

                <Item>
                    <ItemImg>
                        <img src={none_card} alt='x' />
                    </ItemImg>

                    <ItemInfo>
                        <Left>식당이름</Left>
                    </ItemInfo>

                    <ItemAddress>
                        지역명 - 음식 카테고리표기
                    </ItemAddress>

                </Item>

                <Item>
                    <ItemImg>
                        <img src={none_card} alt='x' />
                    </ItemImg>

                    <ItemInfo>
                        <Left>식당이름</Left>
                    </ItemInfo>

                    <ItemAddress>
                        지역명 - 음식 카테고리표기
                    </ItemAddress>

                </Item>
                </ItemContainer>
                <ItemContainer>
                <Item>
                    <ItemImg>
                        <img src={none_card} alt='x' />
                    </ItemImg>

                    <ItemInfo>
                        <Left>식당이름</Left>
                    </ItemInfo>

                    <ItemAddress>
                        지역명 - 음식 카테고리표기
                    </ItemAddress>

                </Item>
                <Item>
                    <ItemImg>
                        <img src={none_card} alt='x' />
                    </ItemImg>

                    <ItemInfo>
                        <Left>식당이름</Left>
                    </ItemInfo>

                    <ItemAddress>
                        지역명 - 음식 카테고리표기
                    </ItemAddress>

                </Item>

                <Item>
                    <ItemImg>
                        <img src={none_card} alt='x' />
                    </ItemImg>

                    <ItemInfo>
                        <Left>식당이름</Left>
                    </ItemInfo>

                    <ItemAddress>
                        지역명 - 음식 카테고리표기
                    </ItemAddress>

                </Item>

                <Item>
                    <ItemImg>
                        <img src={none_card} alt='x' />
                    </ItemImg>

                    <ItemInfo>
                        <Left>식당이름</Left>
                    </ItemInfo>

                    <ItemAddress>
                        지역명 - 음식 카테고리표기
                    </ItemAddress>

                </Item>
                </ItemContainer>
            </Container>
        </>

    )
}