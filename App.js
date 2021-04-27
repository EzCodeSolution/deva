const express=require('express')
const app=express()
const homeroute = require("./routes/web/home.route");
const bodyParser = require('body-parser')

const path=require("path")

app.use(express.static("public"))


app.set('views',path.join(__dirname, '/public/'))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(homeroute);
app.get('*', (req, res) => {console.log("404 found"); res.render('web/404-page')});



module.exports = app;
