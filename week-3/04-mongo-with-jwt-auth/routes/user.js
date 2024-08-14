const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken")

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username: username,
        password: password
    })
    res.json({
        messasge : "User Created Successfully"
    })
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.find({
        username,
        password
    })
    if(user){
        const token = jwt.sign({
            username
        }, JWT_SECRET);

        res.json({
            token
        })
    }else{
        res.status(411).json({
            message: "Incorrect Credentials"
        })
    }
});

router.get('/courses', userMiddleware, async(req, res) => {
    // Implement listing all courses logic
    const token = req.headers.authorization;
    const word = token.split(" ");
    const jwtToken = word[1];

    try{
        const decoded = jwt.verify(jwtToken, JWT_SECRET);
        console.log(decoded);
        const response = await Course.find({});
        res.json({
            courses: response
        })
    }catch(error){
        return res.status(401).json({
            message: "Invalid Authorization"
        });
    }
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const token = req.headers.authorization;
    const word = token.split(" ");
    const jwtToken = word[1];


    try{
        const decoded = jwt.verify(jwtToken, JWT_SECRET);
        console.log(decoded);
        await User.updateOne({
            username:decoded.username
        },{
            "$push":{
                PurchasedCourses: courseId
            }
        });
        res.json({
            message:"Course purchased successfully"
        });
    }catch(error){
        return res.status(401).json({
            message: "Invalid Authorization"
        });
    }
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const token = req.headers.authorization;
    const word = token.split(" ");
    const jwtToken = word[1];
    const decoded = jwt.verify(jwtToken, JWT_SECRET);
    const username = req.headers.username;
    
    const user = await User.findOne({
        username: decoded.username
    });
    const courses = await Course.find({
        _id:{
            "$in" : user.PurchasedCourses
        }
    });
    res.json({
        courses: courses
    });
});

module.exports = router
