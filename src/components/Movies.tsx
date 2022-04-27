import React from 'react';
import { useQuery } from "react-query";
import Movie from './Movie'
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

function Movies() {

    type Movie = {
        movie_banner: string,
        title: string,
        release_date: string,
        director: string
    };

    const fetchMovies = async () => {
        const response = await fetch('https://ghibliapi.herokuapp.com/films');
        return response.json();
    }

    const {data, status} = useQuery<Movie[], Error>("movies", fetchMovies)

    if(status === 'loading') {
        return <div>Loading...</div>
    }

    if(status === 'error') {
        return <div>Error</div>
    }

    return (
        <Container>
            {data?.map((movie) => (
                <Movie movie={movie}/>
            ))}
        </Container>
    );
}

export default Movies;
