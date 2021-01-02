import React from "react";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col, Alert, Pagination } from "react-bootstrap";
import { IBook } from "./IBook";
import { Link } from "react-router-dom";
import axios from "axios";

export const Books = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [paginatedBooks, setPaginatedBooks] = useState<IBook[]>([]);
  const [error, setError] = useState(false);
  const [pages, setPages] = useState<number[]>([]);
  const [activePage, setActivePage] = useState(1);
  const pageLimit = 3;

  const getBooks = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/api/books");
      const books: IBook[] = data;
      setBooks(books);
      initFirstPage(books);
      initTotalPages(books.length);
    } catch (error) {
      setError(true);
    }
  };

  const initFirstPage = (books: IBook[]) => {
    const firstBooks = books.slice(0, pageLimit);
    setPaginatedBooks(firstBooks);
  };

  const initTotalPages = (totalBooks: number) => {
    const totalPages = Math.ceil(totalBooks / pageLimit);
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    setPages(pages);
  };

  const changePage = (page: number) => {
    const start = (page - 1) * pageLimit;
    const end = page * pageLimit;
    const selectedBooks = books.slice(start, end);

    setPaginatedBooks(selectedBooks);
    setActivePage(page);
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div>
      <h2>Books</h2>
      <Container>
        <Row>
          {paginatedBooks.map((book) => (
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
      <Container style={{ marginTop: "20px" }}>
        <Pagination>
          {pages.map((page) => (
            <Pagination.Item
              active={page === activePage}
              onClick={() => changePage(page)}
            >
              {page}
            </Pagination.Item>
          ))}
        </Pagination>
      </Container>
      {error && (
        <Alert variant="danger">
          There was an error while loading the books.
        </Alert>
      )}
    </div>
  );
};
