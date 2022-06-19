
import express from 'express'
import bodyParser from 'body-parser'
import homeRoute from './routes/homeRoute'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded( { extended: true } ))





app.use( homeRoute() )

app.listen(3000, ()=>{
    console.log( `Servidor en: 127.0.0.1:3000` )
})