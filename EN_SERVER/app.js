const express = require('express')
const databaseModule = require('./databaseModule')
const app = express()
const port = 7676

app.use(express.json())
app.use(express.urlencoded())
const clientDir = __dirname + "\\client\\"

app.use(express.static(clientDir))

app.set('view engine', 'ejs')

app.get('/', (req, res) =>{
  res.render('index.ejs')
})

app.post('/sendMessage', function (req, res) {
    console.log(req.body.name)
    console.log(req.body.message)
    databaseModule.SaveData(req.body.name, req.body.message)
  res.redirect('/')
});


app.listen(port, () => console.log(`Example app listening on port port!`))