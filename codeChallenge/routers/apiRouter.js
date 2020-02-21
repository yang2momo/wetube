import express from "express";
import routes from "../routes"
import { apidocumentation } from "../controllers/apiController";

const apiRouter = express.Router();

apiRouter.get(routes.apidocumentation, apidocumentation);

export default apiRouter;
