import express from "express";
import routes from "../routes"
import { home, search } from "../controllers/videoController";
import { login, logout, getJoin, postJoin } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);


// videoController.js
globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);

// userController.js


globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);


export default globalRouter;
