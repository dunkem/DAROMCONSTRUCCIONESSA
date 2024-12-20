// SearchBar.js
import React from 'react';
import { Form } from 'react-bootstrap';

const SearchBar = ({ onSearch }) => {
    const handleChange = (event) => {
        onSearch(event.target.value);
    };

    return (
        <Form>
            <Form.Control
                type="text"
                placeholder="Buscar..."
                onChange={handleChange}
            />
        </Form>
    );
};

export default SearchBar;