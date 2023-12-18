import { styled } from "styled-components";

interface AlertProps {
    image : string,
    text1 : string,
    text2 : string,
    text3 : string,
}
const ModalBackground = styled.div`
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.6);
`;

const Container = styled.div`
  width: 450px;
  height: 55vh;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);


  background-color: #FFFFFF;
  border-radius: 15px;

  color : #000;

  
  display : flex;
  flex-direction : column;
  justify-content : space-around;  
img {
    width : 100px;
    margin : 0 auto;
}
.text1{
    color : #4c4c4c;
    font-size : 25px;
    font-weight : 800;
}

.button{
    display : flex;
    flex-direction : column;
    justify-content : space-around;  
    margin : 0 auto;
}
`
interface buttonProps {
    width : string;
}
const Button = styled.button<buttonProps>`
width : ${(props) => props.width};
height : 40px;

border : 0px;
border-radius : 4px;

background : #f1f1f1;

margin : 10px auto;

padding : 10px;

`

export default function Alert({image , text1, text2, text3} : AlertProps){
    return(
        <ModalBackground>
            <Container>
            <img src={image} alt='x' />
            <div>
            <div className='text1'>{text1}</div>
            </div>

            <div>
            <div className='text2'>{text2} </div>
            <div className='text3'>{text3} </div>
            </div>

            <div>
                계속 하시겠어요 ?
            </div>

            <div className="button">       
                <Button width='130px'>네</Button>

                <Button width='250px'>아니오, 다시 돌아갈래요</Button>

            </div>
            </Container>
        </ModalBackground>
    )

}