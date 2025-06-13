import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import authRoute from "./Routes/auth.js"

dotenv.config();

const app=express();
// const port=process.env.PORT || 4000;


const corsOptions={
    origin:true,
};


app.get("/",(req,res)=>{
    res.send("api is working");
});


//database connection
mongoose.set('strictQuery',false)
const connectDB=async() => {
    try {
        await mongoose.connect("mongodb+srv://sakshi:doctordb@cluster0.uuuhlng.mongodb.net/?retryWrites=true&w=majority",
            {
                useNewUrlParser:true,
                useUnifiedTopology:true,
            })

            console.log("mongodb database is connected ")
    } catch (error) {
        console.log("mongodb database failed ")
        // process.env.MONGO_URL
        
    }
}


//middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions ))
app.use('/api/v1/auth',authRoute)


app.listen(3000,()=>{
    connectDB();
    console.log("server is running on port 3000");
})
