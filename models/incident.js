var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var schema=new Schema({
    locationname: {type:String, required:true},
    description:{type:String, required:true},
    severity:{type:String,required:true},
    death:{type:Number, required:true},
    imageapath:{type:String, required:false},
    injury:{type:Number, required:true},
    lng:{type: Number, required:false}
});

module.exports=mongoose.model('incident',schema);
