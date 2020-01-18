const express = require('express')
const mongoose = require('mongoose')
require('dotenv/config')
const router = require('./src/router')
const app = express()

mongoose.connect(
	process.env.DB_CONNECTION,{ useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true,useFindAndModify: false, },
	()=>{console.log('Connected to DB!')}
)

app.use(express.json())
app.use(router)
app.listen(8080,()=>{console.log('running at http://localhost:8080')})