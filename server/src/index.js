import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: "./env"
})

const PORT = process.env.PORT

connectDB()
    .then(() => {
        app.listen(PORT || 8000, () => {
            console.log(`App is listening on PORT : ${PORT}`)
        })
    })
    .catch((error) => {
        console.log("SRC | INDEX.JS | Mongo Db connection failed! : ", error)
    })