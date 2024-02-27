
import { Hono } from "hono";
import { userRouter } from "./user";
import { postRouter } from "./post";
import { authMiddleware } from "../middleware/authMiddleware";

export const rootRouter = new Hono();

rootRouter.use("/post", authMiddleware);

rootRouter.route("/user", userRouter);
rootRouter.route("/post", postRouter)