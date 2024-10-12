// Import the libraries
const express = require('express')

const app = express()

const movieRoute = require('./routes/movies')
const userRoute = require('./routes/users')

// Middleware
app.use('/movies', movieRoute)
app.use('/users', userRoute)

// create a route
app.get('/', (req, res) => {
    res.send('Hello!');
})

// start the server
app.listen(3000, () => {
    console.log('Server is up and running')
})