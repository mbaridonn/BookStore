
import React from 'react';
import { BooksMock } from './BooksMock'

export const Books = () =>
    <div>
        <h2>Books!</h2>
        {BooksMock.map(book =>
            <div>
                <div>{book.name}</div>
                <div>{book.author}</div>
            </div>
        )}
    </div>