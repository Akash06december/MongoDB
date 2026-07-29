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


// First deleting the previous data and adding the new one for performing operations

async function run() {
    //await User.deleteMany({});

    // await User.insertMany([
    //     { name: "Priyanshu", email: "Pfifa@gmail.com", age: 21 },
    //     { name: "Swayam", email: "stake@gmail.com", age: 32 },
    //     { name: "Ganya", email: "GanyaC@gmail.com", age: 11 }
    // ]);

    // const users = await User.find({});
    // console.log(users);


    //const user = await User.findById("6a6878a2b1ee22a6489787ea");
    //console.log(user);

    // const user = await User.findOne({_id:"6a6879beac668cb91f6935cb"});
    // console.log(user);

    // User.updateOne({name:"Priyanshu"} , {age: 23})
    // .then((res)=>{
    //     console.log(res);
    // }).catch(err =>{
    //     console.log(err);
    // });


    // User.findOneAndUpdate({name:"Swayam"},{age:50},{new:true})
    // .then(res=>{
    //     console.log(res);
    // })
    // .catch((err)=>{
    //     console.log(err);
    // });
    
    User.findByIdAndUpdate({_id: "6a6879beac668cb91f6935cb"},{age:30},{new:true})
    .then(res=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    });
}
run();