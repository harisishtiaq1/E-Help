const jwt=require('jsonwebtoken')
const User=require("../../models/users.model")
const asyncHandler=require('express-async-handler')

exports.authenticate =asyncHandler(async (req, res, next) => {
let token
if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
    try {
        // Get token from header
        token=req.headers.authorization.split(' ')[1]
        // Verify token
            const decoded=jwt.verify(token,process.env.JWT)
            // Get user from the token
            req.user = await User.findById(decoded.id).select('-Password')
            next()
    } catch (error) {
        console.log(error);
        res.status(401)
        throw new Error("Not Authorized")
    }
}
if(!token){
res.status(401)
throw new Error('Not Authorized No token')
}
})

