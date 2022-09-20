const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.get('/api/greetings/:name', (req, res) => {
    res.status(200).send(`<h1>Hello ${req.params.name}</h1>`)
})

app.get('/api/greetings', (req, res) => {
    res.status(400).json('please provide name (ex. /api/greeting/someName)')
})

app.all('*', (req, res) => {
    res.status(404).send('resource not found')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})