import mongoose, { Schema, model } from "mongoose"

interface IBook {
    name: string,
    author: string,
    publishYear: number,
    description: string,
    price : number
}

const bookSchema = new Schema<IBook>({
    name: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true
    },
    publishYear: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
},{timestamps: true})

const Book = model<IBook>('Book', bookSchema)

export {
    IBook, 
    Book
}