import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    word: String,
    definition: String,
    context: [String],
    meaning: [String],
    timesVisited: {
        type: Number,
        default: 1
    }
})

const PostWord = mongoose.model('PostWord', postSchema);

export default PostWord;