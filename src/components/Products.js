import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import productsData from '../productsData';
import SearchBar from './SearchBar';
import { FaWhatsapp } from 'react-icons/fa';

function Products() {
    const [filteredProducts, setFilteredProducts] = React.useState(productsData);

    const handleSearch = (query) => {
        const filtered = productsData.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    const trackConversion = () => {
        window.gtag('event', 'conversion', {
            'send_to': 'AW-717135166/PXf2CJL65fgZEL66-tUC' // ID de conversión y etiqueta
        });
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
            <Button 
                as="a" 
                href="https://api.whatsapp.com/send/?phone=5492215739000&text=Hola%2C+estoy+interesado+en sus productos.&type=phone_number&app_absent=0" 
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3"
                onClick={trackConversion}
            >
                <FaWhatsapp className="upload-icon" /> CONTÁCTATE CON UN ASESOR
            </Button>
        </Container>
    );
}

export default Products;