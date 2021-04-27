import React from "react";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { IBook } from "./IBook";
import { Link } from "react-router-dom";
import axios from "axios";
import { Paginator } from "../Paginator/Paginator";

export const Books = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [paginatedBooks, setPaginatedBooks] = useState<IBook[]>([]);
  const [error, setError] = useState(false);
  const pageLimit = 14;

  const renderRow = (start: number, end: number) => {
    return (
      <Row>
        {paginatedBooks.slice(start, end).map((book) => (
          <Col style={{flex:"0 0 217px", padding: "5px 5px 5px 5px" }}>
            <Card border="dark" style={{minHeight:"400px"}}>
              <Card.Body>
                <Card.Img
                  variant="top"
                  src={book.imageUrl}
                  style={{ maxWidth: "170px", maxHeight: "250px" }}
                />
                <Card.Title>
                  <Link to={`/books/${book.id}`}>{book.name}</Link>
                </Card.Title>
                <Card.Text style={{position: 'absolute', bottom: "15px" }}>{book.author}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  };

  useEffect(() => {
    const getBooks = async () => {
      try {
        const { data } = await axios.get("http://localhost:8080/api/books");
        const books: IBook[] = data;
        setBooks(books);
        initFirstPage(books);
      } catch (error) {
        setError(true);
      }
    };

    const initFirstPage = (books: IBook[]) => {
      const firstBooks = books.slice(0, pageLimit);
      setPaginatedBooks(firstBooks);
    };

    getBooks();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <Container style={{ maxWidth: "80%" }}>
        {renderRow(0, 7)}
        {renderRow(7, 14)}
      </Container>
      <Paginator
        books={books}
        pageLimit={pageLimit}
        handleClick={setPaginatedBooks}
      ></Paginator>
      {error && (
        <Alert variant="danger">
          There was an error while loading the books.
        </Alert>
      )}
    </div>
  );
};
