const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require("../config")
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const fullToken = req.headers.authorization
    const token = fullToken.split(" ");
    try{
        const user = jwt.verify(token[1], JWT_SECRET);
        next();
    }catch(e){
        res.status(403).json({
        msg: "User authentication failed"
        })
    }
}

module.exports = userMiddleware;