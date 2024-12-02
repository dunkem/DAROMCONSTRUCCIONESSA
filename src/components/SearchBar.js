// components/SearchBar.js
import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <Form inline>
            <FormControl
                type="text"
                placeholder="Buscar productos..."
                className="mr-sm-2"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <Button variant="outline-success" onClick={handleSearch}>Buscar</Button>
        </Form>
    );
}

export default SearchBar;
