import { Router } from "express"
import bookRouter from "./books.routes";
import authRouter from "./auth.routes";

const routes = Router()

routes.use("/book", bookRouter);
routes.use("/auth", authRouter)

export default routes;