const express = require('express');

const app = express();

app.listen(7000, () => {
    console.log("server is running at port 7000")
})

app.get('/mobiles', (req,res) => {
    res.send("mobiles data")
})

app.post('/mobiles', (req, res) => {
    res.send("mobiles posted")
})

app.put('/mobiles', (req,res) => {
    res.send("mobile data updated")
})

app.delete('/mobiles', (res,req) => {
    res.send("mobile data deleted")
})