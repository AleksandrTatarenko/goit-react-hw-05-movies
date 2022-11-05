import PropTypes from 'prop-types';
import { useState } from 'react';
import { Container, Form, Button, Input } from 'components/SearchForm/SearchForm.styled';


export const SearchForm = ({onSubmit}) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        if (searchQuery === '') {
            alert('Заполните строку поиска');
            return;
        }
        onSubmit(searchQuery);
    };

    const handleChange = (e) => {
        e.preventDefault();
        setSearchQuery(e.target.value.toLowerCase());
    };

    return (<Container>
        <Form onSubmit={handleSubmit}>
             <Input
            onChange={handleChange}
            value={searchQuery}        
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search movies"
            />
            <Button type="submit">Search</Button>
        </Form>
    </Container>)
}

SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}