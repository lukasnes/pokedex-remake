const path = require('path')

module.exports = {
    getHTML: (req,res) => {
        res.status(200).sendFile(path.join(__dirname, '../public/home.html'))
    },
    getCSS: (req,res) => {
        res.status(200).sendFile(path.join(__dirname, '../public/styles.css'))
    },
    getSidebar: (req,res) => {
        res.status(200).sendFile(path.join(__dirname, '../public/sidebar.js'))
    },
    getReset: (req,res) => {
        res.status(200).sendFile(path.join(__dirname, '../public/reset.css'))
    },
    getHome: (req,res) => {
        res.status(200).sendFile(path.join(__dirname, '../public/home.js'))
    },
    getDex: (req,res) => {
        res.status(200).sendFile(path.join(__dirname, '../public/dex.js'))
    }
}