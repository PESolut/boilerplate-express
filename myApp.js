let express = require('express');
let app = express();
require('dotenv').config()

let indexAbsolutePath = __dirname + '/views/index.html'
let assetsAbsolutePath = __dirname + '/public'

// allow access to our public assets
app.use("/public", express.static(assetsAbsolutePath));

// logger middleware function
app.use((req,res,next )=> {
    let requestMethod = req.method
    let requestPath = req.path
    let requestIP = req.ip
    console.log(`${requestMethod} ${requestPath} - ${requestIP}`)
    next()
})

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
