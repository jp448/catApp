import React from 'react';
import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.card};
`;

const Image = styled.img`
      width: 100%;
      object-fit: contain;
`;

const CardHeader = styled.div`
    width: 100%;
    object-fit: cover;
`;

const MainContent = styled.div`
    padding: 1rem;
`;

const Header = styled.div`
    color: ${({ theme }) => theme.header};
    font-weight: bold;
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
                <Header>{movie.title}</Header>
                <p>directed by {movie.director}</p>
                <p>released in {movie.release_date}</p>
            </MainContent>
        </Card>
    );
};

export default Movie;
