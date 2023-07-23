let express = require('express');
let app = express();
require('dotenv').config()

let indexAbsolutePath = __dirname + '/views/index.html'
let assetsAbsolutePath = __dirname + '/public'

app.use("/public", express.static(assetsAbsolutePath));

console.log("Hello World")

app.get('/',(req, res)=> {

    res.sendFile(indexAbsolutePath)
})

app.get('/json',(req, res) => {
    let messageString = "Hello json"
    const messageStyle = process.env.MESSAGE_STYLE
    
    if (messageStyle==='uppercase'){
        messageString = messageString.toUpperCase()
    }
    res.json({
        "message": messageString
    })
})






























 module.exports = app;
