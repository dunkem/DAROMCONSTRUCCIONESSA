import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa'; // Importamos el ícono de la lupa

const SearchBar = ({ onSearch, className = "" }) => {
    const handleChange = (event) => {
        onSearch(event.target.value);
    };

    // Prevenimos que la página se recargue si el usuario presiona "Enter"
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <Form onSubmit={handleSubmit} className={className}>
            <InputGroup className="shadow-sm">
                {/* Ícono de lupa a la izquierda */}
                <InputGroup.Text className="bg-white border-end-0">
                    <FaSearch className="text-muted" />
                </InputGroup.Text>
                
                <Form.Control
                    type="search" // Cambiar a 'search' agrega la crucecita (x) nativa para borrar en móviles
                    placeholder="Buscar productos, marcas o categorías..."
                    onChange={handleChange}
                    className="border-start-0 border-end-0 shadow-none ps-0"
                    aria-label="Buscar productos"
                />
            </InputGroup>
        </Form>
    );
};

export default SearchBar;