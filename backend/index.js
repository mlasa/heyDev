const express = require('express')
const mongoose = require('mongoose')
require('dotenv/config')
const router = require('./src/router')
const app = express()
const cors = require('cors')

mongoose.connect(
	process.env.DB_CONNECTION,{ useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true,useFindAndModify: false},
	()=>{console.log('Connected to DB!')}
)

// app.use(cors({origin:'http://localhost:3000'}))  libera acesso so p/ app com esse endereco
app.use(cors({}))//libera acesso p/ todas aplicacoes
app.use(express.json())
app.use(router)
app.listen(8080,()=>{console.log('running at http://localhost:8080')})