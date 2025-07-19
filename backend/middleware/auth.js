import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const authUser= async (req, res, next) => {
    const {token}=req.headers

    if(!token) {
        return res.json({success:false,message: 'Not authorized, no token'});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = decoded.id; //add userId to request body
        next();
    } catch (error) {
        return res.json({success:false, message: error.message});
    }
}


export default authUser;