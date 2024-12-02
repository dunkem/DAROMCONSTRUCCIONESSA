import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Button, ListGroup } from 'react-bootstrap';
import products from '../productsData';
import ReviewForm from './ReviewForm';

function ProductDetail() {
    const { productId } = useParams();
    const product = products.find(p => p.id.toString() === productId);

    const [reviews, setReviews] = useState([
        { review: 'Buen producto', rating: 4 },
        { review: 'Muy útil', rating: 5 }
    ]);

    const handleAddReview = (newReview) => {
        setReviews([...reviews, newReview]);
    };

    if (!product) {
        return <h1>Producto no encontrado</h1>;
    }

    return (
        <Container className="mt-4">
            <Card>
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text>Precio: ${product.price}</Card.Text>
                    <Button variant="primary">Agregar al Carrito</Button>
                </Card.Body>
            </Card>
            <h2>Reseñas</h2>
            <ListGroup>
                {reviews.map((review, index) => (
                    <ListGroup.Item key={index}>
                        {review.review} - {review.rating} estrellas
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <ReviewForm onSubmit={handleAddReview} />
        </Container>
    );
}

export default ProductDetail;


