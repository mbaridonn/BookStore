import * as express from "express";
import * as booksModule from "./models/books";

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
        books.push(req.body);
        res.json(req.body);
    });

    app.delete("/api/books/:id", (req, res) => {
        const id = getBookId(req.params.id);
        books.splice(id, 1);
        res.status(200).send();
    });

    function getBookId(reqID:string) : number{
        let id:number = +reqID;
        id--;
        return id;
    }

}