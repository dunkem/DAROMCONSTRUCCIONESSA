import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import productsData from '../productsData';
import SearchBar from './SearchBar';

function Products() {
    const [filteredProducts, setFilteredProducts] = React.useState(productsData);

    const handleSearch = (query) => {
        const filtered = productsData.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    return (
        <Container>
            <h1>Productos</h1>
            <SearchBar onSearch={handleSearch} />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Producto</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>
                                <Link to={`/products/${product.id}`}>{product.name}</Link>
                            </td>
                            <td>{product.description}</td>
                            <td>${product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default Products;
