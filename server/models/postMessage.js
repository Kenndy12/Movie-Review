import mongoose from "mongoose";
//dsad
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    rating: {
        type: Number,
        min: 0,
        max: 10
    },
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const PostMessage = mongoose.model('postMessage', postSchema);

export default PostMessage;