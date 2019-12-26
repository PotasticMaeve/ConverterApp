
const port = 8082

const express   = require('express')
const bp        = require('body-parser')
const morgan    = require('morgan')

const app = express()

app.use(bp.json())
app.use(bp.urlencoded({extended: true}))
app.use(morgan('tiny'))

require('./src/routes/endpoints')(app);


app.listen(port ,()=> {
    console.log(`Server listin on port ${port}`)
})