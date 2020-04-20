
import React from 'react';
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import { IBook } from './IBook';
import { Link } from 'react-router-dom';

export const Books = () => {
    const [books, setBooks] = useState<IBook[]>([]);

    const getBooks = async () => {
        fetch('http://localhost:8080/api/books')
            .then(response => response.json())
            .then(booksJson => {
                setBooks(booksJson);
            });
    }

    useEffect(() => {
        getBooks();
    }, []);

    return (
        <div>
            <h2>Books</h2>
            <Container>
                <Row>
                    {books.map(book =>
                        <Col xs="3">
                            <Card border="dark" style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Img variant="top" src={book.imageUrl} />
                                    <Card.Title>
                                        <Link to={`/books/${book.id}`}>{book.name}</Link>
                                    </Card.Title>
                                    <Card.Text>{book.author}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    );
};