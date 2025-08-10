import express from "express"
import cors from "cors" // allows other sites (ex: your React front-end) to access your server without blocking.
import { connectDB } from "./config/db.js"
import  foodRouter  from "./routes/foodRoute.js"

// app config
const app = express()
const port = 4000

// middleware
app.use(express.json()) // tells Express to understand the data sent in JSON.
app.use(cors()) // allows clients (browser ...) to chat with the server

// db connection
connectDB();

// api endpoints
app.use("/api/food",foodRouter) 
app.use("/images",express.static('uploads'))

app.get("/", (req, res) => {
    res.send("API Working")
})

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`)
})

// mongodb+srv://omar:24005223@cluster0.a6fpgjn.mongodb.net/?