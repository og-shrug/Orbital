const express = require('express');
const path = require('path');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.sendFile('home.html', { root: '../' })
})

app.use(express.static(path.join(__dirname, '../static')));

app.listen(port, () => {
  console.log(`Orbital is running at port ${port}`)
})