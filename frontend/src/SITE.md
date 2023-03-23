# Structure
├── index.js
├── app.js
├── build
│   └── ...
├── controllers
│   └── notes.js
├── models
│   └── note.js
├── package-lock.json
├── package.json
├── utils
│   ├── config.js
│   ├── logger.js
│   └── middleware.js

# app
const http = require('http')
const express = require('express')
const app = express()
const cors = require('cors')

const mongoUrl = 'mongodb://localhost/bloglist'
mongoose.connect(mongoUrl)

app.use(cors())
app.use(express.json())

const PORT = 3003
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`)
})