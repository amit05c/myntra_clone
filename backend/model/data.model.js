const mongoose= require("mongoose")

const dataSchema= new mongoose.Schema({
    category: {type: String, require:true},
    title: {type: String, require : true},
    item: String,
    image_url: {type: [String]},
    price: Number,
    _id:String
})

const DataModel = mongoose.model('data',dataSchema)
module.exports={
    DataModel
}

module.exports={
   DataModel
}