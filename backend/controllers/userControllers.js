//route for user login

import userModel from "../models/userModel.js";
import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const createToken=(id)=>{
    return jwt.sign({ id }, process.env.JWT_SECRET);
}

const loginUser = async (req, res) => {

    try {
        const { email, password } = req.body;

        // Check if the user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "User doest not exists" });
        }

        // Check if the password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const token = createToken(user._id);
            return res.json({ success: true, token });
        }else{
            res.json({ success: false, message: "Invalid credentials" });
        }

       
    } catch (error) {
        console.error("Error in user login:", error);
        res.json({ success: false, message: error.message });
    }   

}


//for user registration
const registerUser = async (req, res) => {
 
    try{
        const { name, email, password } = req.body;
        //check if user already exists
        const exists = await userModel.findOne({ email });
        if(exists) {
            return res.json({ success:false, message: "User already exists" });
        }

        // validating email format and strong password securely
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "please enter valid email" });
        }
        if(password.length < 8) {
            return res.json({ success: false, message: "Please enter strong password" });
        } 

        //hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //creating user
        const newUser= new userModel({
            name,
            email,
            password: hashedPassword
        });

        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({ success: true,  token });
    }
    catch(error) {
        console.error("Error in user registration:", error);
        res.json({ success: false, message: error.message });
    }

}

//route for admin login
const adminLogin = async (req, res) => {

    
}

export { loginUser, registerUser, adminLogin };