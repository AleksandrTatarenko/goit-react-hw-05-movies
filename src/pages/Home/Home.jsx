import { NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';
import api from 'services/api';
import { Container, Title, List, Item } from 'pages/Home/Home.styled';
import styled from 'styled-components';

const Link = styled(NavLink)`
font-weight: normal;
font-size: 16px;
`

const Home = () => {
    const [moviesInTrend, setMoviesInTrend] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const movies = await api.fetchMoviesInTrend();
        setMoviesInTrend(movies.results);
      } catch (error) {
        console.log(error);
      } finally {
      };
    };
    fetchMovies();
  },[]);

    return (<Container>
        <Title>Trending today</Title>
        <List>
            {moviesInTrend.map(({ id, title, name }) => {
            return (
                <Item key={id}>
                    <Link to={`movies/${id}`}>{title ? title : name}</Link>
                </Item>
            )
        })}
        </List>
    </Container>);
};

export default Home;
