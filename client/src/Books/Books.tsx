
import React from 'react';
import { useState } from 'react';

interface IBook{
    name:string,
    author:string
}

const BooksMock = [
    {
        name: "Harry Potter 1",
        author: "JK Rowling"
    },
    {
        name: "Harry Potter 2",
        author: "JK Rowling"
    },
    {
        name: "Harry Potter 3",
        author: "JK Rowling"
    }
];

export const Books = () => {

    const [books, setBooks] = useState<IBook[]>(BooksMock);

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