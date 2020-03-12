import express from "express";
import routes from "../routes"
import { home, search } from "../controllers/videoController";
import { logout, getJoin, postJoin, getLogin, postLogin } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin, postLogin);



globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);


// videoController.js
globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);

// userController.js


globalRouter.get(routes.logout, logout);


export default globalRouter;
