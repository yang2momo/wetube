import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-Parser";

import routes from "./routes"

import Router from "./routers/router";
import { localMiddleware } from "./middleware";

const app = express();


app.use(helmet());
app.set('view engine', "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(localMiddleware)

app.use(routes.home, Router);





export default app;
