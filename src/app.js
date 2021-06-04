const express = require('express')
const handlebars = require('express-handlebars')
const path = require('path')
const route = require('./routes')
const db = require('./config/db/config')
const app = express()
const port = 3000
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.engine('hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'recources', 'views'))
route.route(app)
db.connect()
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})