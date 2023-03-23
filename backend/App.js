const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const blogRouter = require('./contollers/blogController');
const mongoose = require('mongoose')

app.use(express.json())
app.use(cors())
app.use(blogRouter)

const mongoUrl = config.MONGODB_URI_BLOGAPP
mongoose.connect(mongoUrl)

const PORT = config.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

module.exports = app
