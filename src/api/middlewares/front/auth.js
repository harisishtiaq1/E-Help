const jwt=require('jsonwebtoken')
const User=require("../../models/users.model")
const byPassedRoutes = ["/v1/front/auth/register", "/v1/front/auth/login","/v1/front/auth/verify-email"];
exports.authenticate =async (req, res, next) => {
  console.log("check", req.originalUrl.indexOf("/v1/") > -1);
  if (req.originalUrl.indexOf("/v1/") > -1) {
    if (byPassedRoutes.indexOf(req.originalUrl) > -1) {
      next();
    }
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

};

