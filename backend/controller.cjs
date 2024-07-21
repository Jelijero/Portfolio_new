const userMail=require('./model.cjs')

const mails=(async(req,res)=>{
 const{mail}=req.body
 const data={
    mail:mail
 }
 await userMail.insertMany([data])
 res.json('post')
})


module.exports={mails}