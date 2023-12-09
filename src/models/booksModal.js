import mongoose from "mongoose";

const booksSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true,
        required: [true, "Please provide a id"],
    },
    title: {
        type: String,
        required: [true, "Please provide a Genre"],
    },
    imageLink: {
        type: String,
        required: [true, "Please provide a author"],
    },
    genre: {
        type: String,
        required: [true, "Please provide a Genre"],
    },
}, {
    timestamps: true
})

const book = mongoose.models.books || mongoose.model("books", booksSchema)

export default book