
import React from 'react';
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { CardColumns } from 'react-bootstrap';
import { IBook } from './IBook';

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
            <CardColumns>
                {books.map(book =>
                    <Card border="dark" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Img variant="top" src={book.imageUrl} />
                            <Card.Title>{book.name}</Card.Title>
                            <Card.Text>{book.author}</Card.Text>
                        </Card.Body>
                    </Card>
                )}
            </CardColumns>
        </div>
    );
};