const express = require('express')

const app = express()
const port = 7070;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.listen(port, (err) => {
  if(err){
    console.log(err)
  }
  console.log(`Server running on port ${port}...`)
})
