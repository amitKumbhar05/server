import mongoose from "mongoose";

mongoose.connect(`mongodb+srv://amitkumbhar9800:${encodeURIComponent('ug9GDQh8wkxIDqJq')}@amit.valjmid.mongodb.net/Social?retryWrites=true&w=majority`)
.then(()=>{
    console.log('Connected');
})
.catch((error)=>{
    console.log(error);
})


const newSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
    })


export const user = mongoose.model("users",newSchema);

