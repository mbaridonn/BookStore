import React, { useState, useEffect } from 'react';
import { IBook } from './IBook';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export const NewBook = () => {

    const history = useHistory();

    const addBook = async (form: any) => {
        var defaultImageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShCopZfcBk6RUL6wL3JQT8rGCeCc4aD-AY5AqH2XjETlReQ8n0&usqp=CAU';
        const newBook: IBook = {
            name: form.formBasicName.value,
            author: form.formBasicAuthor.value,
            imageUrl: form.formBasicImageUrl.value
        };
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBook)
        };
        fetch('http://localhost:8080/api/books', requestOptions);
    }

    const handleSubmit = (event: any) => {
        var form = event.currentTarget.elements;
        addBook(form);
        history.push('/');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group controlId="formBasicAuthor">
                <Form.Label>Author</Form.Label>
                <Form.Control type="author" placeholder="Enter Author" />
            </Form.Group>

            <Form.Group controlId="formBasicImageUrl">
                <Form.Label>Image Url</Form.Label>
                <Form.Control type="imageurl" placeholder="Enter Image Url" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}