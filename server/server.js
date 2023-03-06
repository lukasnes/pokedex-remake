require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()

const { PORT } = process.env
const { 
    getHTML,
    getCSS,
    getJS,
    getReset
} = require('./fileController')
const {
    getDex
} = require('./controller')

app.use(express.json())
app.use(cors())
app.use(express.static('public'))

app.get('/',getHTML)
app.get('/reset',getReset)
app.get('/css',getCSS)
app.get('/js',getJS)



app.listen(PORT, console.log(`Server running on ${PORT}`))