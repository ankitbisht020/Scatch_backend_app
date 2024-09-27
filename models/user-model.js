const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim:true},
    email: { type: String, required: true, unique: true, trim:true },
    password:{type: String, required: true, trim:true },
    isadmin:{type: Boolean, required: true, trim:true},
    orders:{type: Array, default: [], required: true},
    cart:{type: Array, default: [], required:false},
    contact:{type: Number, required:true, trim:true},
    picture:{ type: String, required: false}
});

module.exports = mongoose.model('User', userSchema);