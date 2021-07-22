// importing important packages
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')
const fs = require('fs')
const morgan = require('morgan')
const path = require('path')

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
 
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))

//middleware
app.use(bodyParser.json())

require('dotenv/config')
const productsRouter = require('./routers/products')
const categoriesRouter = require('./routers/categories')

const api = process.env.API_URL

// connecting routes
app.use(`${api}/product`,productsRouter)
app.use(`${api}/category`,categoriesRouter)

//Database
mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log('mongodb db connected....')
})
.catch((err)=>{
    console.log(err)
})

//Server
app.listen(5000, ()=>{
    console.log('server is running http://localhost:5000')
})
