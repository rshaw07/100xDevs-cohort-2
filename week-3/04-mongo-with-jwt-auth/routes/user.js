const { Router } = require("express");
const router = Router();
const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require("../config")
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db")

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    User.create({
        username : req.body.username,
        password : req.body.password
    })
    res.json({ 
        message: 'User created successfully' 
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    try {
      const user = await User.findOne({ username }, { password });
      const token = jwt.sign({username}, JWT_SECRET)
      res.json({
        token: token,
      });
    } catch (e) {
      res.status(403).json({
        msg: "User not found",
      });
    }
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const data = await Course.find({})
    res.json({
        "courses" : data
    })
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.decode(token)
    await User.updateOne({
        username: user.username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    })
    res.json({
        message: 'Course purchased successfully' 
    })
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const token = req.headers.authorization.split(" ")[1];
    const username = jwt.decode(token)
    const user = await User.findOne({
        username: username.username
    })
    const courses = await Course.find({_id: user.purchasedCourses})
    res.json({courses})
});

module.exports = router