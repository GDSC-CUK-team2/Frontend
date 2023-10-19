import React from 'react';
import matna_background from '../assets/image/matna_background.svg';
import t from '../assets/image/t.svg';
import styled from 'styled-components';
import Header from '../components/common/Header';

const Container = styled.div`
  height: 4280px;
`;

const ImageContainer = styled.div`
  /* Set a fixed height for the container */
  height: 1080px;
  overflow: hidden; /* Hide overflow content */

  img {
    width: 100vw; /* Make the image cover the entire container width */
    object-fit: cover; /* Crop the image as needed */
  }
`;

const ContentContainer = styled.div`
  position : absolute;
  top : 600px;

  width : 100vw;
  height : 3200px;

  border-radius : 140px;

  background-color: #fff;

`;

export default function Main() {
  return (
    <>
      <Container>
        <Header />
        <ImageContainer>
          <img src={matna_background} alt='x' />
        </ImageContainer>
        <ContentContainer>
          x
        </ContentContainer>
      </Container>
    </>
  );
}
