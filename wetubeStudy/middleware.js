import routes from "./routes";

export const localMiddleware = (req, res, next) => {
    res.locals.siteName = "WeTub";
    res.locals.routes = routes;
    next();
};