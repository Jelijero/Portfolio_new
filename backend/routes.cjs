const express=require('express')
const route=express.Router()
const nameController=require('./controller.cjs')
route.post('/mail',nameController.mails)


module.exports=route