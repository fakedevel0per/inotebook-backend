const express = require('express')
var cors = require('cors')
const connectToMongo = require('./db');
connectToMongo();
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())

//Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`iNotebook Backend listening on port ${port}`)
})
