import { Router, Request, Response } from "express"
import { getBooks, addBook, updateBook, deleteBook } from "../controllers/book.controller"
import { verifyToken } from "../utils/middlewares";
const bookRouter = Router()

bookRouter.get('/get-books', verifyToken, getBooks)
bookRouter.post('/add-book', verifyToken, addBook)
bookRouter.put('/update-book/:id', verifyToken, updateBook)
bookRouter.delete('/delete-book/:id', verifyToken, deleteBook)

export default bookRouter