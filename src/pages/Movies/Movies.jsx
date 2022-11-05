import { useState, useEffect } from 'react';
import { NavLink, useLocation, useSearchParams } from "react-router-dom";
import api from 'services/api';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { Container, List, Item } from 'pages/Movies/Movies.styled'
import styled from 'styled-components';

const Link = styled(NavLink)`
font-weight: normal;
font-size: 16px;
`

export const Movies = () => {
    const [searchQuery, setSearchQuery] = useState(null);
    const [movies, setMovies] = useState(null);
    const location = useLocation();
    let [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        async function fetchMovies(searchQuery) {
            try {
                const movies = await api.fetchMovies(searchQuery);
                setMovies(movies.results);
            } catch (error) {
                console.log(error);
            } finally {
            };
        };
            setSearchQuery(searchParams.get('query'))
            if (searchQuery !== null) {
                fetchMovies(searchQuery);
        }; 
    }, []);

    useEffect(() => {
        async function fetchMovies(searchQuery) {
            try {
                const movies = await api.fetchMovies(searchQuery);
                setMovies(movies.results);
            } catch (error) {
                console.log(error);
            } finally {
            };
        };
        if (searchQuery !== null) {
            fetchMovies(searchQuery);
        }
    }, [searchQuery]);

    const onSubmit = (searchQuery) => {
        setSearchQuery(searchQuery.toString());
        setSearchParams(`?query=${searchQuery}`);
  };

    return (<Container>
        <SearchForm onSubmit={onSubmit} />
        {movies?<List>
            {movies.map(({ id, title, name }) => {
                return (<Item key={id}>
                    <Link to={`${id}`} state={{from: location}}>{title ? title : name}</Link>
                </Item>)
            })}
        </List>:null}
    </Container>
    )
}
