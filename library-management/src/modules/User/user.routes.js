import { Router } from "express";
import { hashPassword } from "../../middleware/userMiddleware/hashPassword.js";
import { login, signup } from "./user.controller.js";

const userRouter = Router()

userRouter.post("/signup", hashPassword, signup)
userRouter.post("/login", login)



export default userRouter;