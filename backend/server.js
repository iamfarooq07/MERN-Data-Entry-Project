import express from "express";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Hello Data Entry Project")
})

app.listen(PORT, () => {
    console.log(`Server Connected On ${PORT}`);
})