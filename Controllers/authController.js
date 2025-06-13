import User from "../models/UserSchema.js"
import Doctor from "../models/DoctorSchema.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'



export const register=async (req,res)=>{
    const{email,password,name,role,gender}=req.body;
    
    try {
      let user=null;
      if(role==="patient"){
       user= await User.findOne({email});
      }
      else if(role==="doctor"){
        user=await Doctor.findOne({email});
      }
      

      //chec if user exists
      if(user){
        res.status(400).json({mesaage:'user already exists'})
      }

      //hash password
      const salt=await bcrypt.genSalt(10)
      const hashPassword=await bcrypt.hash(password,salt)
        
      if(role==="patient"){
        user= new User({
            name,
            email,
            password:hashPassword,
            gender,
            role
        })
      }

      if(role==="doctor"){
        user= new Doctor({
            name,
            email,
            password:hashPassword,
            gender,
            role
        })
      }

      await user.save()
      res.status(200).json({success:true,message:"user successfuly created"})
    } catch (error) {
        res.status(500).json({success:false,message:"internal server error try again"})
    }
}

export const login=async (req,res)=>{
    try {
        
    } catch (error) {
        
    }
}