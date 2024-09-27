require('dotenv').config();
const PORT= process.env.PORT || 3006;


const express =require('express');
const app =express();

// importing Routes
const ownersRouter =require("./routes/ownersRouter");
const productsRouter =require("./routes/productsRouter");
const usersRouter =require("./routes/usersRouter");

// importing model from mongoose.js
const db =require("./config/mongoose-connecton");

// import modules
const path =require('path');
const cookieParser = require('cookie-parser');



// creating middleware
app.use(express.json());
app.use(express.urlencoded({extend:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");



app.use("/owners",ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

app.get('/',(req,res)=>{
    res.render('index');
    console.log(`app started on port:${PORT}`);

})

app.listen(PORT ,()=>{
    console.log(`app started on port:${PORT}`);
});

module.exports = app;