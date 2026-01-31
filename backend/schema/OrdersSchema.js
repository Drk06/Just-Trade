import mongoose from 'mongoose';
const { Schema } = mongoose;

const OrdersSchema = new Schema({
     name: String,
     qty: Number,
     price: Number,
     mode: String,
});

export default OrdersSchema;

