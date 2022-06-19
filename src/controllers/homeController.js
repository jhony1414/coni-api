
/* const homeController = ( req, res ) =>{
    res.json( { msg: 'HOME' } )
} */

class homeController {

    index( req, res ){
        res.json( { msg: 'HOME' } )
    }
}


export default new homeController()