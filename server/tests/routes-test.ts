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
        const result = await request(app).get("/api/books/b6cc50ef-1698-4067-b364-f3a2229632ed");
        expect(result.text).toEqual(JSON.stringify(books[0]));
        expect(result.status).toEqual(200);
    });

    it("posts a book", async () => {
        const book = {
            name: "Harry Potter 888",
            author: "JK Rowling"
        };
        const result = await request(app).post("/api/books").send(book);
        const bookResult = JSON.parse(result.text);
        expect(bookResult.name).toEqual(book.name);
        expect(bookResult.author).toEqual(book.author);
        expect(result.status).toEqual(200);
    });

    it("modifies a book", async () => {
        const book = {
            "name": "Harry Potter Tercero",
            "author": "JK Rowling"
        };
        const result = await request(app).put("/api/books/435b1321-ba1f-4021-ae5b-431dde5b41c3").send(book);
        const bookResult = JSON.parse(result.text);
        expect(bookResult.name).toEqual(book.name);
        expect(bookResult.author).toEqual(book.author);
        expect(result.status).toEqual(200);
    });

    it("deletes a book", async () => {
        const result = await request(app).delete("/api/books/1");
        expect(result.status).toEqual(200);
    });

});