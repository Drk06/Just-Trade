import {model} from 'mongoose';
import HoldingsSchema from '../schema/HoldingsSchema.js';
const HoldingsModel = new model('holding', HoldingsSchema);

export default HoldingsModel;
