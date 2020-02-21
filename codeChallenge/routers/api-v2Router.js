import express from "express";
import routes from "../routes"
import { apiv2edit, apiv2remove } from "../controllers/api-v2Controller";

const api_v2Router = express.Router();

api_v2Router.get(routes.apiv2remove, apiv2remove);
api_v2Router.get(routes.apiv2edit, apiv2edit);


export default api_v2Router;

