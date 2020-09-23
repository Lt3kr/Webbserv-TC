const express = require('express')
const app = express()
const port = 7676

const clientDir = __dirname + "\\client\\"

app.get('/', (req, res) => res.sendFile(clientDir + 'index.html'))
app.listen(port, () => console.log(`Example app listening on port port!`))