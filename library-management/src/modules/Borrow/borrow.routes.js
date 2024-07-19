import { Router } from "express";
import {userAuth } from "../../middleware/userMiddleware/userAuth.js";
import { borrowBook, getAllBorrows, returnBook } from "./borrow.controller.js";

const borrowRouter = Router()


borrowRouter.post("/borrow/:BookId" , userAuth, borrowBook )
borrowRouter.post("/return/:BookId" , userAuth, returnBook )
borrowRouter.get("/" , userAuth, getAllBorrows )





export default borrowRouter;