
import React from 'react';
import { useState, useEffect } from 'react';

interface IBook {
    name: string,
    author: string
}

const BooksMock = [
    {
        name: "Davinci's code",
        author: "Dan Brown"
    },
    {
        name: "Inferno",
        author: "Dan Brown"
    }
];

export const Books = () => {

    const [books, setBooks] = useState<IBook[]>(BooksMock);

    const getSeries = async () => {
        console.log("getSeries");
        fetch('http://localhost:8080/api/books')
            .then(response => response.json())
            .then(booksJson => setBooks(booksJson));
    }

    useEffect(() => {
        getSeries();
    }, []);

    return (
        <div>
            <h2>Books!</h2>
            {books.map(book =>
                <div>
                    <div>{book.name}</div>
                    <div>{book.author}</div>
                </div>
            )}
        </div>
    );
};