import React, { useEffect, useState } from "react";
import { IBook } from "./IBook";
import { Link, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

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
    <div>
      <div>
        <h1>{book?.name}</h1>
        <h2>{book?.author}</h2>
        <img style={{width:"100%",maxWidth:"350px"}} alt={book?.name} src={book?.imageUrl} />
      </div>
      <Link to={"/"}>
        <Button style={{ marginTop: "30px" }}>Back</Button>
      </Link>
    </div>
  );
};
