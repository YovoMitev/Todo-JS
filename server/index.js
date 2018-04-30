const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 7070;

const todoRoutes = require('./api/routes/todos')

mongoose.connect('mongodb://user:'+ process.env.MOGO_ATLAS_PW +'@node-rest-shop-shard-00-00-w1fh9.mongodb.net:27017,node-rest-shop-shard-00-01-w1fh9.mongodb.net:27017,node-rest-shop-shard-00-02-w1fh9.mongodb.net:27017/test?ssl=true&replicaSet=node-rest-shop-shard-0&authSource=admin')


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

//Handling requests for routes
app.use('/todos', todoRoutes)

app.listen(port, (err) => {
  if(err){
    console.log(err)
  }
  console.log(`Server running on port ${port}...`)
})
