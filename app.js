const express = require('express')
const bodyParser= require('body-parser')
const path = require('path')
const compression = require('compression')
// require('dotenv').config()

const timestampRoutes = require('./routes/timestamp')

const app = express()

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(compression())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', timestampRoutes)

app.get('/', (req, res, next) => {
    res.render('home-page')
})

app.use((req, res, next) => {
    res.status(404).send('<h1>No Page Found</h1>')
})

app.listen(process.env.PORT || 3000)