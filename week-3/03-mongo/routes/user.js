const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

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

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const data = await Course.find({});
    res.json({
        "courses" : data
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    await User.updateOne({
        username: req.headers.username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    })
    res.json({
        message: 'Course purchased successfully' 
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.headers.username
    })
    const courses = await Course.find({_id: user.purchasedCourses})
    res.json({courses})
});

module.exports = router