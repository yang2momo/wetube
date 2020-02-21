import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-Parser";

import routes from "./routes"

import globalRouter from "./routers/globalRouter";
import coursesRouter from "./routers/coursesRouter";
import apiRouter from "./routers/apiRouter";
import api_v1Router from "./routers/api-v1Router";
import api_v2Router from "./routers/api-v2Router";

const app = express();


app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

// global
app.get(routes.globalhome, globalRouter);
app.get(routes.join, globalRouter);
app.get(routes.login, globalRouter);
app.get(routes.confirmaccount, globalRouter);

// courses
app.get(routes.courseshome, coursesRouter);
app.get(routes.coursesnew, coursesRouter);
app.get(routes.coursesmine, coursesRouter);

// api
app.get(routes.apidocumentation, apiRouter);

// api_v1
app.get(routes.apiv1buy, api_v1Router);
app.get(routes.apiv1refund, api_v1Router);

// api_v2
app.get(routes.apiv2remove, api_v2Router);
app.get(routes.apiv2edit, api_v2Router);


export default app;
