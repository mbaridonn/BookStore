import * as express from "express";
import * as booksModule from "./models/books";
import { v4 as uuidv4 } from 'uuid';

export const register = (app: express.Application) => {

    const books = booksModule.books;

    // define a route handler for the default home page
    app.get("/", (req, res) => {
        res.send("Hello world!");
    });

    app.get("/api/books", (req, res) => {
        res.json(books);
    });

    app.get("/api/books/:id", (req, res) => {
        const id = getBookId(req.params.id);
        res.json(books[id]);
    });

    app.put("/api/books/:id", (req, res) => {
        const id = getBookId(req.params.id);
        books[id] = req.body;
        res.json(books[id]);
    });

    app.post("/api/books", (req, res) => {
        const newBook = { id: newBookId(), ...req.body };
        books.push(newBook);
        res.json(newBook);
    });

    app.delete("/api/books/:id", (req, res) => {
        const id = getBookId(req.params.id);
        books.splice(id, 1);
        res.status(200).send();
    });

    function getBookId(reqID: string): number {
        const id: number = +books.findIndex(book => book.id === reqID);
        return id;
    }

    function newBookId(): string {
        return uuidv4();
    }
}