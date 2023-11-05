import styled from "styled-components";
import map from "../../assets/image/search/map.svg";

const Container = styled.div`
    display: flex;
    width: 394px;
    height: 743px;
    background-color: lightgrey;
    border-radius: 20px;
`;

export default function MapBox(){
    return(
        <>
            <Container>
                <img src={map}/>
            </Container>
        </>
    )
}