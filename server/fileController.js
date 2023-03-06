const path = require('path')

module.exports = {
    getHTML: (req,res) => {
        res.status(200).sendFile(path.join(__dirname, '../public/home.html'))
    },
    getCSS: (req,res) => {
        res.status(200).sendFile(path.join(__dirname, '../public/styles.css'))
    },
    getJS: (req,res) => {
        res.status(200).sendFile(path.join(__dirname, '../public/home.js'))
    },
    getReset: (req,res) => {
        res.status(200).sendFile(path.join(__dirname, '../public/reset.css'))
    }
}