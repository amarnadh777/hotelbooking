const  mongoose = require("mongoose")
const userScheama = new mongoose.Schema(
{
    username:{type:String},password:{type:String}
}
)
const user = mongoose.model("user",userScheama)
module.exports = user