const express=require("express");
const {getUsers, registerUser,loginUser,updateUserProfile,getUserProfile,writeReview,getUser,updateUser,deleteUser} = require("../controllers/userController");
const router=express.Router();

const {verifyIsLoggedIn} = require("../middleware/verifyAuthToken")


router.post("/register",registerUser)
router.post("/login",loginUser)

//User logged in routes
router.use(verifyIsLoggedIn)
router.put("/profile",updateUserProfile)
router.get("/profile/:id",getUserProfile)
router.post("/review/:productId",writeReview)

//admin routes
router.use(verifyIsLoggedIn)
router.get("/",getUsers)
router.get("/:id",getUser)
router.put("/:id",updateUser)
router.delete("/:id",deleteUser)

module.exports=router;