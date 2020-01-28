import * as express from "express";

export const register = (app: express.Application) => {

    const books = [
        {
            name: "Harry Potter 1",
            author: "JK Rowling"
        },
        {
            name: "Harry Potter 2",
            author: "JK Rowling"
        },
        {
            name: "Harry Potter 3",
            author: "JK Rowling"
        }
    ];

    app.get("/test", (req, res) => {
        res.json("Asdasdsadsa");
    });

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

}