import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { IBook } from "../Books/IBook";

export const AdminPanel = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getBooks = async () => {
      try {
        console.log("useEffect");
        const { data } = await axios.get("http://localhost:8080/api/books");
        const books: IBook[] = data;
        setBooks(books);
      } catch (error) {
        setError(true);
      }
    };

    getBooks();
  }, []);

  const deleteBook = (book: IBook) => {
    const newBooks: IBook[] = [...books];
    const realId = getBookId(book.id!);
    newBooks.splice(realId, 1);
    setBooks(newBooks);
    //ToDo: remove book from api
  };

  const getBookId = (reqID: string): number => {
    const id: number = +books.findIndex((book) => book.id === reqID);
    return id;
  };

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Name</th>
          <th>Author</th>
          <th>Image</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr>
            <td>{book.name}</td>
            <td>{book.author}</td>
            <td>{book.imageUrl}</td>
            <td>
              <Button onClick={() => deleteBook(book)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
