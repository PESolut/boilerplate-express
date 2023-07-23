let express = require('express');
let bodyParser = require('body-parser')
let app = express();
require('dotenv').config()

let indexAbsolutePath = __dirname + '/views/index.html'
let assetsAbsolutePath = __dirname + '/public'

// allow access to our public assets
app.use("/public", express.static(assetsAbsolutePath));

// logger middleware function
app.use((req,res,next )=> {
    const currentDate = new Date().toString()
    const currentTimeString = currentDate.match(/\d{2}:\d{2}:\d{2}/)[0];
    let requestMethod = req.method
    let requestPath = req.path
    let requestIP = req.ip
    console.log(`${currentTimeString} ${requestMethod} ${requestPath} - ${requestIP}`)
    next()
})
app.use((req,res,next) => {
    bodyParser.urlencoded({ extended: false}).json()
})

console.log("Hello World")

app.get('/',(req, res)=> {

    res.sendFile(indexAbsolutePath)
})

app.route('/name').get((req, res) => {

    let firstName = req.query.first
    let lastName = req.query.last

    res.json({
        "name": `${firstName} ${lastName}`
    })

}).post((req, res) => {

})

app.get('/:word/echo',(req,res)=> {
    const requestWord = req.params.word
    res.json({
        "echo":requestWord
    })
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


// chained a middle ware function and handler / controller
app.get('/now', (req, res, next) => {
    const currentTime = new Date().toString()
    req.time = currentTime
    next()
}, (req, res) => {
    res.json({
        "time": req.time 
    })
})






























 module.exports = app;
