import {model} from 'mongoose';
import PositionsSchema from '../schema/PositionsSchema.js';

const PositionsModel = new model('position', PositionsSchema);

export default PositionsModel;