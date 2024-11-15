const mongoose=require('mongoose')
const studentSchema=new mongoose.Schema
({
    name:{
        type:String,
        required:true
    },
    roll:{
        type:Number,
        required:true
    },
    isPassed:{
        type:Boolean,
        required:false
    },
    class:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model("Student",studentSchema)