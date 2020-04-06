
import React from 'react';
import { useState, useEffect } from 'react';

interface IBook {
    name: string,
    author: string,
    imageUrl: string
}

export const Books = () => {

    let nameInput: any;
    let authorInput: any;
    const [books, setBooks] = useState<IBook[]>([]);

    const getBooks = async () => {
        fetch('http://localhost:8080/api/books')
            .then(response => response.json())
            .then(booksJson => {
                setBooks(booksJson);
            });
    }

    const addBook = async () => {
        const newBook: IBook = { name: nameInput.value, author: authorInput.value, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShCopZfcBk6RUL6wL3JQT8rGCeCc4aD-AY5AqH2XjETlReQ8n0&usqp=CAU' };
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
                        <img src={book.imageUrl} />
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