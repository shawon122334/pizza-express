//main file,our code will run from here
// we will create our express server here.so that we will need to import express here. there is a function imported inside express

const express = require('express');
const app = express()  // so we call the function.it returns an object

//importing ejs and express-js-layouts
const ejs = require('ejs')
const expressLayouts = require('express-ejs-layouts')
const path = require('path')

const PORT = process.env.PORT || 3000

app.get('/', (req, res) =>{
    res.render('home')
})

//set template engine
app.use(expressLayouts) //express now knows what layout to use
app.set('views',path.join(__dirname,'/resources/views')) //now express know where is our template file
app.set('view engine','ejs') //now express knows which template engine we are using

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})

//EXPRESS SERVER CREATED