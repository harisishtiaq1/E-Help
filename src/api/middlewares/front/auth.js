<<<<<<< HEAD
const jwt=require('jsonwebtoken')
const User=require("../../models/users.model")
const asyncHandler=require('express-async-handler')
const byPassedRoutes = ["/v1/front/auth/register", "/v1/front/auth/login","/v1/front/auth/verify-email"];
exports.authenticate =asyncHandler(async (req, res, next) => {
    console.log("check", req.originalUrl.indexOf("/v1/") > -1);
    if (req.originalUrl.indexOf("/v1/") > -1) {
      if ( byPassedRoutes.indexOf(req.originalUrl) > -1
       ||req.originalUrl.indexOf("/v1/front/auth/verify-email") > -1
       ||req.originalUrl.indexOf("/v1/front/auth/contact") > -1) {
        console.log(req.originalUrl);
=======
const jwt=require('jsonwebtoken');
const User=require("../../models/users.model");
const bodyParser=require('body-parser');

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
  
>>>>>>> 0acad686f2d22be86a1bf2de7aeeb5da50326200
        next();
      }
<<<<<<< HEAD
      else {
          const authHeader = req.headers["authorization"];
          console.log("authHeader", authHeader);
          const token = authHeader && authHeader.split(" ")[1];
          console.log("token", token);
          if (token == null) return res.sendStatus(401);
          jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) return res.sendStatus(403);
            next();
          });
        }
    } 
  });
=======
    }
  
    if (!token) {
      // throw new Error("Not authorized, no token");
      res.status(401).send('"Not authorized, no token"')
    }
  };

  //middleware

  app.use(bodyParser.json({ limit: '50mb'}))
  app.use(bodyParser.urlencoded({extended: true, limit: "50mb" }))
  
  app.use(express.json())
>>>>>>> 0acad686f2d22be86a1bf2de7aeeb5da50326200
