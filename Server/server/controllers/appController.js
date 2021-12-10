const {AppModel} = require( '../models/appModel' );

const AppController = {
        
        getIndex: function (request, response){
            AppModel
                .getAll()
                .then (data  => {
                    response.status( 200 ).json( data );
                });
        },


        edit: function( request, response){
            const toChange = request.params.id;

            let goldCount= request.body.newnumber;
            let id= "goldgame";

            const change = {
                goldCount,
                id
            };

            AppModel
                .update(toChange, change)
                .then( result =>{
                    response.status( 201 ).json( result );
                })
                .catch( err =>{
                    response.statusMessage = "Something goes wrong!";
                    response.status( 400 ).end();
                })
        },

}

module.exports={AppController};