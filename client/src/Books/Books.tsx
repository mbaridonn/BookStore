
import React from 'react';
import { useState, useEffect } from 'react';

interface IBook {
    name: string,
    author: string
}

export const Books = () => {

    let nameInput: any;
    let authorInput: any;
    const [books, setBooks] = useState<IBook[]>([]);

    const getBooks = async () => {
        const newBook: IBook = { name: 'Test', author: 'Test' };
        fetch('http://localhost:8080/api/books')
            .then(response => response.json())
            .then(booksJson => {
                setBooks(booksJson);
            });
    }

    const addBook = async () => {
        const newBook: IBook = { name: nameInput.value, author: authorInput.value };
        nameInput.value = '';
        authorInput.value = '';
        setBooks(books => [...books, newBook]);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBook)
        };
        fetch('http://localhost:8080/api/books', requestOptions);
    }

    useEffect(() => {
        getBooks();
    }, []);

    return (
        <div>
            <h2>Books</h2>
            <div>
                {books.map(book =>
                    <div>
                        <div>{book.name} - {book.author}</div>
                    </div>
                )}
            </div>
            <input ref={node => {
                nameInput = node;
            }} />
            <input ref={node => {
                authorInput = node;
            }} />
            <button onClick={() => {
                addBook();
            }}>Add Book:</button>
        </div>
    );
};