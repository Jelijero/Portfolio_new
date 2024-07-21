const mongoose=require('mongoose')


const userMail=new mongoose.Schema({
    mail:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('mailid',userMail)