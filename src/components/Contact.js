import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    const [file, setFile] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        fetch('/', {
            method: 'POST',
            body: formData,
        })
        .then(() => {
            setSubmitted(true);
            setError('');
            event.target.reset(); // Resetea el formulario después del envío
            setFile(null);
        })
        .catch(() => {
            setError('Error al enviar el formulario');
        });
    };

    return (
        <Container>
            <h2>CONTACTANOS</h2>
            <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} enctype="multipart/form-data">
                <input type="hidden" name="form-name" value="contact" />
                
                <p>
                    <label>Nombre: <input type="text" name="name" required /></label>
                </p>
                <p>
                    <label>Email: <input type="email" name="email" required /></label>
                </p>
                <p>
                    <label>Mensaje: <textarea name="message" required></textarea></label>
                </p>
                <p>
                    <label>Adjuntar Archivo: <input type="file" name="file" onChange={(e) => setFile(e.target.files[0])} /></label>
                </p>
                <p>
                    <Button type="submit">Enviar</Button>
                </p>
            </form>
            {submitted && <p>Su mensaje ha sido enviado con éxito.</p>}
            {error && <p className="text-danger">{error}</p>}
            
            <h5>¿CÓMO ENCONTRARNOS?</h5>
            <p>Teléfono: <a href="tel:08103334567">0810-333-4567</a></p>
            <p>Email: 
                <a href="mailto:ventas@daromsa.com.ar">ventas@daromsa.com.ar</a>, 
                <a href="mailto:proveedores@daromsa.com.ar">proveedores@daromsa.com.ar</a>, 
                <a href="mailto:administracion@daromsa.com.ar">administracion@daromsa.com.ar</a>
            </p>
            <p>Oficina: C. 152 6352, B1885 Guillermo Enrique Hudson</p>
            <p>Planta: Parque industrial tecnológico de Florencio Varela</p>
        </Container>
    );
};

export default Contact;