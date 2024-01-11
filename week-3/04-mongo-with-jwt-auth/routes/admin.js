const { Router } = require("express");
const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require("../config")
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password
    Admin.create({
        username,
        password
    })
    res.json({
        msg: "Admin created successfully"
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    try {
      const admin = await Admin.findOne({ username }, { password });
      const token = jwt.sign({username}, JWT_SECRET)
      res.json({
        token: token,
      });
    } catch (e) {
      res.status(403).json({
        msg: "Admmin not found",
      });
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const newCourse = await Course.create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        imageLink: req.body.imageLink
    })
    res.json({
        message: 'Course created successfully',
        courseId: newCourse._id
     })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const data = await Course.find({})
    res.json({
        "courses" : data
    })
});

module.exports = router;