import User from "../models/user.model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config(); // For accessing Environmental Variables (without this, error will be raised)

// === User Registration Handler ===
export const registerUser = async (req, res) => {
  const {userName, email, password} = req.body;

  if(!userName || !password || !email){
    return res.status(400).json({
      success : false,
      message : "Insufficient Data"
    })
  }

  try{
    const existingUser = await User.findOne({email : email}).exec();

    if(existingUser){
      return res.status(409).json({
        success : false,
        message : "User with email already exists"
      })
    }

    // Hashing password to store in DB, for safety and privacy
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Creating new User
    const newUser = new User({
      user_name : userName,
      email : email,
      password_hashed : hashedPassword,
      date_created : new Date()
    })

    await newUser.save();

    const payload = {id : newUser._id, name : userName, email : email};

    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {expiresIn : '24h'});

    res.cookie("AuthToken", token, {
      maxAge : 1000 * 60 * 60 * 24, //24 hrs
      httpOnly : true,
      secure : process.env.MODE === "development" ? false : true,
      sameSite : 'strict'
    });

    return res.status(201).json({
      success : true,
      message : "User Registered Successfully",
      user : {
        userName : userName,
        email : email
      }
    })

  }catch(error){
    return res.status(400).json({
      success : false,
      message : `An error occurred during user registration : ${error.message}`
    })
  }
}

// === User Login Handler === 
export const loginUser = async (req,res) => {
  const {email, password}  = req.body;

  if(!email || !password){
    return res.status(400).json({
      success : false,
      message : "Insufficient Data"
    })
  }
  try{

    const user = await User.findOne({email : email}).exec();

    if(!user){
      return res.status(400).json({
      success : false,
      message : "User not found"
    })
    }

    const isAuthenticated = await bcrypt.compare(password, user.password_hashed);

    if(!isAuthenticated){
      return res.status(400).json({
      success : false,
      message : "Invalid Credentials"
    })
    }

    const payload = {id : user._id, name : user.user_name, email : email};

    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {expiresIn : '24h'});

    res.cookie("AuthToken", token, {
      maxAge : 1000 * 60 * 60 * 24, //24 hrs
      httpOnly : true,
      secure : process.env.MODE === "development" ? false : true,
      sameSite : 'strict'
    });

    return res.status(200).json({
      success : true,
      message : "User Logged In Successfully",
      user : {
        userName : user.user_name,
        email : user.email
      }
    })

  } catch(error){
    return res.status(400).json({
      success : false,
      message : `An error occurred during user log in : ${error.message}`
    })
  }
}