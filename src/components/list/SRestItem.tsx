import { styled } from "styled-components";
import heart from "../../assets/image/heart.svg"

const Container = styled.div`
    width : 285px;
    height : 89px;

    display : flex;
    justfity-content : center;

    margin : 0 auto;
    position : relative;
`
const Img = styled.div`

    width : 136px;
    height : 89px;
    border-radius : 8px;
img {
    width : 136px;
    height : 89px;
}
`

const Text = styled.div`

display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Center the text vertically */

p{
    text-align : left;
    color : #e5e5e5;
    margin: 1px;
}

.b{
    font-size : 19px;
}
.s{
    font-size : 16px;
}
`


export default function SRestItem(){
    return(
        <Container>
            <Img>
                <img src={heart} alt='x' />
            </Img>
            
            <Text>
                <p className='b'>역전우동 </p>
                <p className='s'>역곡 - 분식</p>
            </Text>
        </Container>
    )

}