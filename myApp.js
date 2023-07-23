let express = require('express');
let app = express();
let indexAbsolutePath = __dirname + '/views/index.html'
let assetsAbsolutePath = __dirname + '/public'

// app.use(express.static(assetsAbsolutePath))
app.use("/public", express.static(assetsAbsolutePath));


console.log("Hello World")

app.get('/',(req, res)=> {

    res.sendFile(indexAbsolutePath)

})






























 module.exports = app;
