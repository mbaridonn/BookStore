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
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName" style={{ maxWidth: "30%" }}>
          <Form.Label>Name</Form.Label>
          <Form.Control required type="name" placeholder="Enter Name" />
          <Form.Control.Feedback type="invalid">
            Please provide a name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicAuthor" style={{ maxWidth: "30%" }}>
          <Form.Label>Author</Form.Label>
          <Form.Control required type="author" placeholder="Enter Author" />
          <Form.Control.Feedback type="invalid">
            Please provide an author.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicImageUrl" style={{ maxWidth: "30%" }}>
          <Form.Label>Image Url</Form.Label>
          <Form.Control
            required
            type="imageurl"
            placeholder="Enter Image Url"
          />
          <Form.Control.Feedback type="invalid">
            Please provide an image url.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      {error && (
        <Alert variant="danger">
          There was an error while creating a new book.
        </Alert>
      )}
    </>
  );
};
