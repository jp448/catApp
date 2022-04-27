import React from 'react';
import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: #4D5057;
`;

const Image = styled.img`
      width: 400px;
      height: 300px;
      object-fit: contain;
`;

const CardHeader = styled.div`
    width: 100%;
    object-fit: cover;
`;

const MainContent = styled.div`
    padding: 1rem;
`;

type MovieProps = {
    movie: {
        movie_banner: string,
        title: string,
        release_date: string,
        director: string
    },
}

const Movie = ({movie}: MovieProps) => {
    return (
        <Card>
            <CardHeader>
                <Image src={movie.movie_banner} alt=""/>
            </CardHeader>
            <MainContent>
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
                <p>{movie.director}</p>
            </MainContent>
        </Card>
    );
};

export default Movie;
