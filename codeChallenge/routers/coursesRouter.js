import express from "express";
import routes from "../routes"
import { courseshome, coursesnew, coursesmine } from "../controllers/coursesController";

const coursesRouter = express.Router();

coursesRouter.get(routes.courseshome, courseshome);
coursesRouter.get(routes.coursesnew, coursesnew);
coursesRouter.get(routes.coursesmine, coursesmine);

export default coursesRouter;

