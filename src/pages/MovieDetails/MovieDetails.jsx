import { useState, useEffect } from 'react';
import { useParams, useLocation, Outlet, NavLink } from "react-router-dom";
import api from 'services/api';
import { Container, Box, InfoBox, AddBox, Image, Title } from "pages/MovieDetails/MovieDetails.styled";
import { Suspense } from "react";
import styled from 'styled-components';

const Link = styled(NavLink)`
display: block;
max-width: 70px;
margin-top: 20px;
text-decoration: none;
padding: 5px 15px 5px 15px;
font-size: 18px;
color: black;
border: 1px solid;
border-radius: 5px;
&:hover {
    color: white;
    background-color: orange;
};
&:focus {
    color: white;
    background-color: orange;
};
`

const MovieDetails = () => {
    const [movie, setMovie] = useState({});
    const params = useParams();
    const imageUrl = "https://image.tmdb.org/t/p/w500";
    const location = useLocation();
    const goBack = location.state?.from ?? '/';

    useEffect(() => {
        async function fetchMoviesById(id) {
            try {
                const movie = await api.fetchMoviesDetails(id);
                setMovie(movie);
            } catch (error) {
                console.log(error);
            } finally {
            };
        };
        fetchMoviesById(params.movieId)
    }, [])

    return (<Container>
        <Link to={goBack}>Go back</Link>
        <Box>
            {Object.keys(movie).length !== 0 ? <Image src={imageUrl + movie.poster_path} alt=''></Image> : null}
            <InfoBox>
                <Title>{movie.title}</Title>
                <p>User Score: {Math.trunc(movie.vote_average * 10)}%</p>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
                <h3>Genres</h3>
                <p>{Object.keys(movie).length !== 0 ? movie.genres.map(genre => { return genre.name; }).join(' ') : null}</p>
            </InfoBox>
        </Box>
        <hr></hr>
        <AddBox>
            <h3>Additional information</h3>
            <NavLink to="cast" state={{ from: goBack }}>Cast</NavLink>
            <NavLink to="reviews" state={{ from: goBack }}>Reviews</NavLink>
        </AddBox>
        <hr></hr>
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
        </Suspense>
    </Container>);
};

export default MovieDetails;
