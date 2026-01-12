import { model, Schema } from "mongoose"

interface IUser {
  _id?: string
  name: string
  email: string
  phone: string
  username: string
  password: string
  role: string
  booksAdded?: string[]
  createdAt: Date
  updatedAt: Date
}

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["admin", "creator", "user"],
        default: "user"
    },
    booksAdded: [{
        type: Schema.Types.ObjectId,
        ref: "Book"
    }]
},{timestamps:true})

const User = model<IUser>("User", userSchema)

export {
    User, IUser
}