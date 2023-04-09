import mongoose from 'mongoose';
const tuitsSchema = mongoose.Schema({
    tuit: String,
    likes: Number,
    liked: Boolean,
    dislikes: Number,
    disliked: Boolean,
    replies: Number,
    retuits: Number,
    image: String,
    handle: String, 
    userName: String,
    time: String,
}, {collection: 'tuits'});

export default tuitsSchema;