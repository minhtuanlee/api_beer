const express = require('express')
const mongoose  = require('mongoose')
const Beer = require('./src/model/beerModel')
const app = express()
const routerBeer = require('./src/routes/beer')
const morgan = require('morgan')
const Schema = mongoose.Schema

// connect mongoose
mongoose.connect('mongodb+srv://tuan:tuan1234@cluster0.apb0mdd.mongodb.net/api_beer?retryWrites=true&w=majority',async () => {
    console.log('Connect db')
})


app.use(morgan('combined'))

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/', routerBeer)


const port = process.env.PORT || 8000
app.listen(port, () => console.log('Server running ' + port))