import { styled } from "styled-components";

const ModalBackground = styled.div`
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.6);
`;

const Container = styled.div`
  width: 500px;
  height: 80vh;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);


  background-color: #FFFFFF;
  border-radius: 15px;

  color : #000;

`

export default function Alert(){
    return(
        <ModalBackground>
            <Container>
            <img src={''} alt='x' />
            <div>t</div>
            <div>1 </div>
            <div>2 </div>
            <div>3 </div>
            </Container>
        </ModalBackground>
    )

}