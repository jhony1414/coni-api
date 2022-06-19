
import express from 'express'
const router = express.Router()
import homeController from '../controllers/homeController'

const homeRoute = ( req, res ) => {

    router.get('/', homeController.index)
        
    return router

}




export default homeRoute