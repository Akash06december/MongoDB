const mongoose = require('mongoose');

//Database connection

main().then(()=>{
    console.log("coonection successful");
}).catch((err)=>{
    console.log(err);
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

// Schema defina
const bookSchema = new mongoose.Schema({
    title:
    {
        type: String,
    },
    author:{
        type:String,
    },
    price:{
        type: Number,
    }
});

const book = mongoose.model("Book",bookSchema);

let book1 = new book({
    title:"Mathematics XII",
    author: "RD Sharma",
    price:800
});

book1.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})