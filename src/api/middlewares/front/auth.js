const jwt=require('jsonwebtoken')
const User=require("../../models/users.model")
exports.authenticate =async (req, res, next) => {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        // Get token from header
        token = req.headers.authorization.split(" ")[1];
  
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
        // Get user from the token
        req.user = await User.findById(decoded.id).select("-password");
  
        next();
      } catch (error) {
        console.log(error);
        // throw new Error("Not authorized");
        res.status(401).send("Not authorized");
      }
    }
  
    if (!token) {
      // throw new Error("Not authorized, no token");
      res.status(401).send('"Not authorized, no token"')
    }
  };

