let express = require('express');
let app = express();
let indexAbsolutePath = __dirname + '/views/index.html'
let assetsAbsolutePath = __dirname + '/public'

console.log("Hello World")

app.get('/',(req, res)=> {

    res.sendFile(indexAbsolutePath)

})

app.use(express.static(assetsAbsolutePath))































 module.exports = app;
