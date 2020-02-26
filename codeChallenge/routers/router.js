import express from "express";
import routes from "../routes"
import { home, login, photos, profile } from "../controllers/controller";


const Router = express.Router();

Router.get(routes.home, home);
Router.get(routes.login, login);
Router.get(routes.photos, photos);
Router.get(routes.profile, profile);



export default router;

