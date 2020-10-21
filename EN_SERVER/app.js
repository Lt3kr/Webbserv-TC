const express = require('express')
const app = express()
const port = 7676

app.use(express.json())
app.use(express.urlencoded())
const clientDir = __dirname + "\\client\\"

app.get('/', (req, res) => res.sendFile(clientDir + 'index.html'))
app.get('/style', (req, res) => {
  res.sendFile(clientDir + 'main_style.css')
})
app.listen(port, () => console.log(`Example app listening on port port!`))

app.get('/gibba', (req, res) => {
  res.sendFile(clientDir + 'cool_blixt.gif')
})

app.post('/sendMessage', function (req, res) {
    console.log(req.body.name)
    console.log(req.body.email)

  res.redirect('/')
})

const modul = require("test");

console.log(modul.getName())