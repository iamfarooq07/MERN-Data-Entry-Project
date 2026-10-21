import express from "express";
import dotenv from "dotenv";
import { dataBase } from "./src/config/db.js";

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hello Data Entry Project")
})

dataBase().then(() => {
    app.listen(PORT, () => {
        console.log(`Server Connected On ${PORT}`);
    })
}).catch((error) => {
     return new Error("Server/Database As Not Found")
})