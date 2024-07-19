import { Router } from "express";
import { createBook, deleteBook, getAllBooks, getSpecificBook, updateBook } from "./book.controller.js";
import { checkAdmin } from "../../middleware/userMiddleware/adminCheck.js";
import { userAuth } from "../../middleware/userMiddleware/userAuth.js";


const bookRouter = Router()

bookRouter.post("/", userAuth, checkAdmin, createBook)
bookRouter.delete("/:id", userAuth, checkAdmin, deleteBook)
bookRouter.put("/:id", userAuth, checkAdmin, updateBook)
bookRouter.get("/", userAuth, getAllBooks)
bookRouter.get("/search", userAuth, getSpecificBook)


export default bookRouter;