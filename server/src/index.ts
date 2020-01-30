import express from "express";
import * as routes from "./routes";
import * as bodyParser from "body-parser";

const app = express();
const port = 8080; // default port to listen

app.use(bodyParser.json());

routes.register(app);

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );