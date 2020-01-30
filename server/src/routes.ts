import * as express from "express";
import * as booksModule from "./models/books";

export const register = (app: express.Application) => {

    var books = booksModule.books;

    app.get("/api/books", (req, res) => {
        res.json(books);
    });

    app.put("/api/books/:id", (req, res) => {
        const reqID = req.params.id;
        let id = +reqID;
        id--;
        books[id] = req.body;
        res.json(books[id]);
    });

    app.post("/api/books", (req, res) => {
        books.push(req.body);
        res.json(req.body);
    });

    app.delete("/api/books/:id", (req, res) => {
        const reqID = req.params.id;
        let id = +reqID;
        id--;
        books.splice(id,1);
        res.status(200).send();
    });

}