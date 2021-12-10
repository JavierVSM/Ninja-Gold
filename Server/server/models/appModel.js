const mongoose = require ('mongoose');

const AppSchema = new mongoose.Schema({
    goldCount: Number,
    id: String,
});

const App = mongoose.model ('app', AppSchema);

const AppModel={

    getAll:function(){
        return App.find();
    },


    update: function( id, toUpdate ){
        return App.findOneAndUpdate( {id}, {$set : toUpdate }, {new : true} )
    }
};

module.exports = {AppModel};