import mongoose, { mongo } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"

const postSchema = new mongoose.Schema({
    caption: {
        type: String,
        required: true
    },
    imageFile: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
}, { timestamps: true })

videoSchema.plugin(mongooseAggregatePaginate)

export const Post = mongoose.model('Post', postSchema)