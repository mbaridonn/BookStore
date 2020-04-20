import React, { useState } from 'react';
import { IBook } from './IBook';

export const NewBook = () => {
    let nameInput: any;
    let authorInput: any;

    const addBook = async () => {
        const newBook: IBook = { name: nameInput.value, author: authorInput.value, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShCopZfcBk6RUL6wL3JQT8rGCeCc4aD-AY5AqH2XjETlReQ8n0&usqp=CAU' };
        nameInput.value = '';
        authorInput.value = '';
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBook)
        };
        fetch('http://localhost:8080/api/books', requestOptions);
    }

    return (
        <div>
            <h2>New book here!</h2>
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
}