// placing order using COD
import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
const placeOrder= async(req,res)=>{

    try {

        const {userId,items,amount,address} = req.body;
        const orderData={
            userId,
            items,
            address,
            amount,
            paymentMethod:"COD",
            payment:false,
            date:Date.now(),
        }

        const newOrder= new orderModel(orderData)
        await newOrder.save();


        //emptying cart after placing order
        await userModel.findByIdAndUpdate(userId, {cartData:{}})
        res.json({success:true, message:"Order Placed ",});

    } catch (error) {
        console.log(error);
        return res.json({success:false, message: error.message});
        
    }
}



// placing order using stripe

const placeOrderStripe= async(req,res)=>{

    try {
        
    } catch (error) {
        console.log(error);
        return res.json({success:false, message: error.message});
        
    }
}

// placing order using razorpay

const placeOrderRazorpay= async(req,res)=>{

    try {
        
    } catch (error) {
        console.log(error);
        return res.json({success:false, message: error.message});
        
    }
}


// all orders data for admin panel
const allOrders= async(req,res)=>{
    
}



// all orders data for frontned
const userOrder= async(req,res)=>{

}


// update order status from admin panel
const updateStatus= async(req,res)=>{

}


export {
    placeOrder,
    placeOrderStripe,
    placeOrderRazorpay,
    allOrders,
    userOrder,
    updateStatus
}
