const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5001
app.use(cors())

const course = require('./Data/Course.json')

app.get('/', (req, res) => {
    res.send('Programing Language API ruining ')
})

app.get('/course', (req, res) => {
    res.send(course)
})


app.listen(port, () => {
    console.log('Programing Language server  running on port ', port)
})