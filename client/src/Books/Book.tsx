import React, { useEffect, useState } from "react";
import { IBook } from "./IBook";
import { Link, useParams } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

interface BookProps {
  id?: string | undefined;
}

export const Book = () => {
  let { id }: BookProps = useParams();
  const [book, setBook] = useState<IBook>();

  useEffect(() => {
    const getBook = async () => {
      fetch(`http://localhost:8080/api/books/${id}`)
        .then((response) => response.json())
        .then((booksJson) => {
          setBook(booksJson);
        });
    };

    getBook();
  }, []);

  return (
    <Container
      style={{
        maxWidth: "80%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <h1
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {book?.name}
        </h1>
        <h2
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {book?.author}
        </h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            style={{ width: "100%", maxWidth: "350px", marginTop: "30px" }}
            alt={book?.name}
            src={book?.imageUrl}
          />
        </div>
        <Link style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "30px"
          }} to={"/"}>
          <Button>Back</Button>
        </Link>
      </div>
    </Container>
  );
};
