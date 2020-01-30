import express from "express";
import request from "supertest";
import * as routes from "../src/routes";
import * as bodyParser from "body-parser";
import * as booksModule from "../src/models/books";

describe("Api Books", () => {

    const app = express();
    const port = 8080;

    app.use(bodyParser.json());
    routes.register(app);

    const books = booksModule.books;

    it("gets Hello world!", async () => {
        const result = await request(app).get("/");
        expect(result.text).toEqual("Hello world!");
        expect(result.status).toEqual(200);
    });

    it("gets all books", async () => {
        const result = await request(app).get("/api/books");
        expect(result.text).toEqual(JSON.stringify(books));
        expect(result.status).toEqual(200);
    });

    it("gets the first book", async () => {
        const result = await request(app).get("/api/books/1");
        expect(result.text).toEqual(JSON.stringify(books[0]));
        expect(result.status).toEqual(200);
    });

    it("posts a book", async () => {
        var aBook = {
            "name": "Harry Potter 888",
            "author": "JK Rowling"
        };
        const result = await request(app).post("/api/books").send(aBook);
        expect(result.text).toEqual(JSON.stringify(aBook));
        expect(result.status).toEqual(200);
    });

    it("modifies a book", async () => {
        var aBook = {
            "name": "Harry Potter Tercero",
            "author": "JK Rowling"
        };
        const result = await request(app).put("/api/books/3").send(aBook);
        expect(result.text).toEqual(JSON.stringify(books[2]));
        expect(result.status).toEqual(200);
    });

    it("deletes a book", async () => {
        const result = await request(app).delete("/api/books/1");
        expect(result.status).toEqual(200);
    });

});