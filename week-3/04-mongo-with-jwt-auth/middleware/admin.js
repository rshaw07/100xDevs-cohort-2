const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require("../config")
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const fullToken = req.headers.authorization
    const token = fullToken.split(" ");
    try{
        const admin = jwt.verify(token[1], JWT_SECRET);
        next();
    }catch(e){
        res.status(403).json({
        msg: "Admin authentication failed"
        })
    }
}

module.exports = adminMiddleware;