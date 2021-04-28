import React, { useState } from "react";
import { IBook } from "./IBook";
import { Form, Button, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const NewBook = () => {
  const history = useHistory();
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState(false);

  const addBook = async (form: any) => {
    const newBook: IBook = {
      name: form.formBasicName.value,
      author: form.formBasicAuthor.value,
      imageUrl: form.formBasicImageUrl.value,
    };

    await axios.post("http://localhost:8080/api/books", newBook);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    event.stopPropagation();

    const validatedForm = event.currentTarget;

    if (validatedForm.checkValidity() !== false) {
      var form = event.currentTarget.elements;

      try {
        await addBook(form);
        history.push("/");
      } catch (error) {
        console.log("There was an error while creating a new book");
        setError(true);
      }
    }

    setValidated(true);
  };

  return (
    <>
      <h1>New Book</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label column="lg">Name</Form.Label>
            <Form.Control
              size="lg"
              required
              type="name"
              placeholder="The Shining"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formBasicAuthor">
            <Form.Label column="lg">Author</Form.Label>
            <Form.Control
              size="lg"
              required
              type="author"
              placeholder="Stephen King"
            />
            <Form.Control.Feedback type="invalid">
              Please provide an author.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formBasicImageUrl">
            <Form.Label column="lg">Image Url</Form.Label>
            <Form.Control
              size="lg"
              required
              type="imageurl"
              placeholder="www.example.com/shining.jpg"
            />
            <Form.Control.Feedback type="invalid">
              Please provide an image url.
            </Form.Control.Feedback>
          </Form.Group>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button size="lg" variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
        {error && (
          <Alert variant="danger">
            There was an error while creating a new book.
          </Alert>
        )}
      </div>
    </>
  );
};
