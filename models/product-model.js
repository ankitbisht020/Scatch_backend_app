const mongoose= reuire("mongoose");

const ProductSchema =mongoose.Schema({
    name: { type: String, required: true, trim:true },
    price: { type: Number, required: true, unique: true, trim:true },
    discount:{type: Number, default:0, required: true},
    bgcolor:{type:String, required:true},
    panelcolor :{type: String, default: [], required:false},
    textcolor:{type: String, required:true},
    image:{ type: String, required: false }
})

module.exports = mongoose.model("product",ProductSchema);