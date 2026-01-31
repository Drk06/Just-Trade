import mongoose from 'mongoose';
const { Schema } = mongoose;
const PostitonsSchema = new Schema({
    product:String,
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean,
});

export default PostitonsSchema;