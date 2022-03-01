const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express()
const libRoutes = require('./routers/router')

app.use(bodyParser.json({ limit:"30mb", extended : true}))
app.use(bodyParser.urlencoded({ limit:"30mb", extended : true}))
app.use(cors())

app.get('/',(req,res) => {
    res.send('welcome to Q library api')
})
app.use('/qlib',libRoutes)
dotenv.config()
const PORT = process.env.PORT || 5000

mongoose.connect(process.env.DATABASE_ACCESS, {useNewUrlParser : true,useUnifiedTopology:true})
    .then(() => {
        app.listen(PORT,() => {
            console.log(`Server running on port ${PORT}`)
        })
    })
    .catch((err) => {
        console.log(err.message)
    })