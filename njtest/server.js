const express = require('express');
const path = require('path');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.sendFile('home.html', { root: '../static' })
})

app.use(express.static(path.join(__dirname, '../static')));

app.listen(process.env.PORT || 3000, () => {
  console.log(`Orbital is running at port ${port}`)
})