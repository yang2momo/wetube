import express from "express";
import routes from "../routes"
import { apiv1buy, apiv1refund } from "../controllers/api-v1Controller";

const api_v1Router = express.Router();

api_v1Router.get(routes.apiv1buy, apiv1buy);
api_v1Router.get(routes.apiv1refund, apiv1refund);

export default api_v1Router;

