import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function ReviewForm({ onSubmit }) {
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ review, rating });
        setReview('');
        setRating(1);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="review">
                <Form.Label>Reseña</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlId="rating">
                <Form.Label>Calificación</Form.Label>
                <Form.Control
                    as="select"
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                    required
                >
                    {[1, 2, 3, 4, 5].map((val) => (
                        <option key={val} value={val}>{val}</option>
                    ))}
                </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
                Enviar
            </Button>
        </Form>
    );
}

export default ReviewForm;
