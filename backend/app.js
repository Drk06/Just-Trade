import dotenv from "dotenv";
import isLoggedIn from './middleware/isLoggedIn.js'
import express from 'express';
import mongoose from 'mongoose';
import HoldingsModel from './model/HoldingsModel.js';
import PositionsModel from './model/PositionsModel.js';
import OrdersModel from './model/OrdersModel.js'
import bodyParser from "body-parser";
import cors from 'cors';
import cookieParser from "cookie-parser";
import authRoute from './routes/AuthRoute.js';
import jwt from 'jsonwebtoken';
import User from './model/UserModel.js'; 


dotenv.config();
const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
app.use("/", authRoute);


const url = process.env.MONGO_URL;
const port = process.env.PORT || 5000;

// mongo db connection.
mongoose.connect(url)
    .then(() => console.log("MongoDB is  connected successfully"))
    .catch((err) => console.error(err));

// endpoit for loading holdings
app.get('/api/allholdings',isLoggedIn, async(req,res)=>{
     let holdings = await HoldingsModel.find({});
     res.json(holdings);
});

//end point for loading positions
app.get('/api/allpositions',isLoggedIn,async(req,res)=>{
     let holdings = await PositionsModel.find({});
     res.json(holdings);
});

// orders
app.post("/api/neworder", isLoggedIn, async (req, res) => {
  try {
   // console.log("order received by:", req.user);

    let newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
      user: req.user.id, 
    });

    await newOrder.save();
    res.status(201).json({ msg: "Order placed" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});


app.post('/api/me', async (req, res) => {
  try {
  //  console.log("AUTH HEADER:", req.headers.authorization);

    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'No token provided' });

    const token = authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Invalid token' });

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    const user = await User.findById(decoded.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json(user);
  } catch (err) {
 //   console.error("JWT VERIFY ERROR:", err.message);
    console.error(err);
    res.status(401).json({ message: 'Unauthorized' });
  }
});


app.listen(port,()=>{
    console.log(`app listening at ${port}`);
    
    
})