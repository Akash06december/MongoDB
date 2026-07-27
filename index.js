const mongoose = require('mongoose');


main().then((res)=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema(
    {
        name : String,
        email: String,
        age: Number
    }
);

const User = mongoose.model("User",userSchema); // add collections to the MongoDB
const Employee = mongoose.model("Employee",userSchema);

const user1 = new User({
    name:"Eve",
    email:"eve@yahoo.in",
    age:48,
});

const user2 = new User({
    name:"Parth",
    email: "parth@gmail.com",
    age:21
})
user1.save();

user2.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});

const user3 = new User({
    name:"Swarup",
    age:21,
    email:"swarupP@gmail.com",
    tag: "lover"
});

user3.save()
.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});

User.insertMany([
    {name:"Priyanshu",email:"Pfifa@gmail.com",age:21},
    {name:"Swayam",email:"stake@gmail.com",age:22}
]).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})