const mongoose= require("mongoose");
const { Schema } = mongoose;
async function main()
{
    // Database new BAanaya and connect kiya 
    await mongoose.connect("mongodb+srv://CoderAkki:M.M3012005@coderakki.9igp1jj.mongodb.net/NewDatabase");
    
// const userSchema = new Schema({
//     name:String,
//     age: Number,
//     city:String,
//     gender: String
//   })
// //   COllection Creat  kiya 
//     // (classs)
//  const User = mongoose.model("user",userSchema);

// // //  1St Way to Add Data 
// //   const user1 = new User({name:"Rohit",age:20,city:"dwarka", gender:"Male"});
// //   await user1.save();
// // // 2nd Way to Add Data 
// // await User.create({name:"Mohan", city:"pakistan", age:30});
// // // INsert Many
// // await User.insertMany([{name:"Ipsita", age:18},{age:25, gender:"Male"}]);

// // Fetching DAta 
// const ans = await User.find({});
//   console.log(ans);
//   const result = await User.find({name:"Rohit"});
//   console.log(result);

}
// }
// main()
// .then(()=>{
//     console.log("Connected to DB");
// })
// .catch((err)=>console.log(err));

module.exports=main;