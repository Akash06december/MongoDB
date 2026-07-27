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

// const user3 = new User({
//     name:"Swarup",
//     age:21,
//     email:"swarupP@gmail.com",
//     tag: "lover"
// });

// user3.save()
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// First deleting the previous data and adding the new one for performing operations

async function run() {
    await User.deleteMany({});

    await User.insertMany([
        { name: "Priyanshu", email: "Pfifa@gmail.com", age: 21 },
        { name: "Swayam", email: "stake@gmail.com", age: 32 },
        { name: "Ganya", email: "GanyaC@gmail.com", age: 11 }
    ]);

    const res = await User.find({ age: { $gt: 20 } });
    console.log(res[0].name);
}

run();
