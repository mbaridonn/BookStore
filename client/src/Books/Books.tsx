import React from "react";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { IBook } from "./IBook";
import { Link } from "react-router-dom";
import axios from "axios";

export const Books = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [error, setError] = useState(false);

  const getBooks = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/api/books");
      setBooks(data);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div>
      <h2>Books</h2>
      <Container>
        <Row>
          {books.map((book) => (
            <Col xs="3">
              <Card border="dark" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Img variant="top" src={book.imageUrl} />
                  <Card.Title>
                    <Link to={`/books/${book.id}`}>{book.name}</Link>
                  </Card.Title>
                  <Card.Text>{book.author}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      {error && (
        <Alert variant="danger">
          There was an error while loading the books.
        </Alert>
      )}
    </div>
  );
};
