const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('This is the page of the users')
})

router.get('/enrico', (req, res) => {
    res.send('This is my personal page')
})

module.exports = router