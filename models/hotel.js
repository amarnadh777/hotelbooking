const mongoose  = require('mongoose')
const HotelSchema = new mongoose.Schema({
name : {type:String,required:true},
type : {type:String,required:true },
city : {type:String,required:true },
address : {type:String,required:true }
,
distance : {type:String,required:true },
photos: {type:[String]},
rating : {type:Number,min:0,max:5},
description : {type:String,required:true },
rooms : {type:[String],},


})
module.exports = mongoose.model("hotel",HotelSchema)