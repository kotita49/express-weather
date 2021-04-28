const path = require('path');
const express = require('express');
const app = express();


app.get("/", (req, res)=>{
    res.sendFile("index.html", {
        root: path.join(__dirname, "../public")
    })
})

app.get("/about", (req, res)=>{
    res.sendFile("about.html", {
        root: path.join(__dirname, "../public")
    })
})
app.listen(3000, ()=>{
    console.log("The server is running on port 3000")
})