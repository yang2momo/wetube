import express from "express";
import routes from "../routes"
import { globalhome, join, login, confirmaccount } from "../controllers/globalController";


const globalRouter = express.Router();

globalRouter.get(routes.globalhome, globalhome);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.confirmaccount, confirmaccount);


export default globalRouter;
