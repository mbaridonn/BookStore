import React, { useEffect, useState } from 'react';
import { IBook } from './IBook';
import { useParams } from 'react-router-dom';

interface BookProps {
    id: string;
}

export const Book = () => {
    let { id } = useParams();
    const [book, setBook] = useState<IBook>();

    const getBook = async () => {
        fetch(`http://localhost:8080/api/books/${id}`)
            .then(response => response.json())
            .then(booksJson => {
                setBook(booksJson);
            });
    }

    useEffect(() => {
        getBook();
    }, []);

    return (
        <div>
            <h1>{book?.name}</h1>
            <h2>{book?.author}</h2>
            <img src={book?.imageUrl} />
        </div>
    );
}