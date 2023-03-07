require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()

const { PORT } = process.env
const { 
    getHTML,
    getCSS,
    getSidebar,
    getReset,
    getHome,
    getDex
} = require('./fileController')
const {
    getPokedex
} = require('./controller')

app.use(express.json())
app.use(cors())
app.use(express.static('public'))

app.get('/',getHTML)
app.get('/reset',getReset)
app.get('/css',getCSS)
app.get('/sidebar',getSidebar)
app.get('/home',getHome)
app.get('/dex',getDex)

app.get('/pokedex',getPokedex)



app.listen(PORT, console.log(`Server running on ${PORT}`))