import React, { useState } from "react";
import { IBook } from "./IBook";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const NewBook = () => {
  const history = useHistory();
  const [validated, setValidated] = useState(false);

  const addBook = async (form: any) => {
    const newBook: IBook = {
      name: form.formBasicName.value,
      author: form.formBasicAuthor.value,
      imageUrl: form.formBasicImageUrl.value,
    };

    axios.post("http://localhost:8080/api/books", newBook);
  };

  const handleSubmit = (event: any) => {
    const validatedForm = event.currentTarget;
    if (validatedForm.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      var form = event.currentTarget.elements;
      addBook(form);
      history.push("/");
    }
    setValidated(true);
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control required type="name" placeholder="Enter Name" />
          <Form.Control.Feedback type="invalid">
            Please provide a name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicAuthor">
          <Form.Label>Author</Form.Label>
          <Form.Control required type="author" placeholder="Enter Author" />
          <Form.Control.Feedback type="invalid">
            Please provide an author.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicImageUrl">
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
    </>
  );
};
