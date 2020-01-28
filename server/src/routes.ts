import * as express from "express";

export const register = (app: express.Application) => {

    app.get("/asd", (req: any, res) => {
        res.send("Asdasdsadsa");
    });

}