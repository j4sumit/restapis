// const { options } = require("../routes/products");
const mongoose = require("mongoose");
uri = "mongodb+srv://j4sumit:rpzPZGTyxIEAzvjk@restapicluster.qlwhs0q.mongodb.net/test";


const connectDB= () => {
  console.log("connect Database");
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports=connectDB;