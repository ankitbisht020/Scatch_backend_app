const mongoose = require('mongoose');

const ownerSchema = new mongoose.Schema({
    name: { type: String, required: true, trim:true},
    email: { type: String, required: true, unique: true, trim:true },
    password:{type: String, required: true, trim:true},
    product:{type:Array, required:flase, default:[]},
    contact:{type: Number, required:true, trim:true},
    picture:{ type: String, required: false},
    gstin: {type:Number, reuired:true, trim:true}
});

module.exports = mongoose.model('Owner', ownerSchema);