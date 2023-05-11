const express = require('express');

const app = express();

app.listen(7000, () => {
    console.log("server is running at port 7000")
})

app.get('/test', (req,res) => {
    res.send("get method successfull")
})