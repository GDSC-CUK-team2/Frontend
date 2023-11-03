import React from 'react';
import matna_background from '../assets/image/matna_background.svg';
import styled from 'styled-components';
import Header from '../components/common/Header';
import Search from '../components/home/Search';
import RecommendSearchWord from '../components/home/RecommendSearchWord';
import Hot from '../components/home/Hot';

const Container = styled.div`
position : relative;
`;

const ImageContainer = styled.div`
  position: absolute;

  /* Set a fixed height for the container */
  height: 1080px;
  width : 100vw;
  overflow: hidden; /* Hide overflow content */
  background-image: url(${matna_background});
  background-position: center; /* Center the background image */
  @media (max-width: 1200px) {
    width: 1280px;
  }
`;

const ContentContainer = styled.div`
  position: absolute;
  
  top: 600px;
  width: 100vw;
  height: 3000px;
  border-radius: 100px 100px 0px 0px;
  background-color: #fff;
  @media (max-width: 1200px) {
    width: 1280px;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  position: absolute;
  top: 250px;
  width: 100%; /* Make sure it spans the width of ImageContainer */
  height: auto; /* Let it adjust to content height */
`;

const RecommendSearchWordContainer = styled.div`
  display: flex;
  justify-content: center; /* Center horizontally */
  
  position: absolute;
  top: 325px;
  width: 100%; /* Make sure it spans the width of ImageContainer */
  height: auto; /* Let it adjust to content height */

`

const HotContainer = styled.div`
  display: flex;
  justify-content: center; /* Center horizontally */
  
  position: absolute;
  top: -80px;
  width: 100%; /* Make sure it spans the width of ImageContainer */
  height: auto; /* Let it adjust to content height */
`

export default function Main() {
  return (
    <>
      <Container>
        <Header />
        <ImageContainer>
          <SearchContainer>
            <Search />
          </SearchContainer>
          <RecommendSearchWordContainer>
            <RecommendSearchWord />
          </RecommendSearchWordContainer>

        </ImageContainer>
        
        <ContentContainer>
        <HotContainer>
            <Hot />
          </HotContainer>
        </ContentContainer>
      </Container>
    </>
  );
}