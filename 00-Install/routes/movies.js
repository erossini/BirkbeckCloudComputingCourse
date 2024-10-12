const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('You are in movies (router)')
})

router.get('/starwars', (req, res) => {
    res.send('Star Wars!')
})

module.exports = router