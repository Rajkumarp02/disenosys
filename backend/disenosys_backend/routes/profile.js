const express = require("express");
// const ProfilePage = require("../models/profile.js");
const ErrorHandler = require("../utils/ErrorHandler.js");
const UserModel = require("../models/UserModel.js");
const router = express.Router();

router.get('/profile', async (req, res, next) => {
    const { userId } = req.params;
  
    try {
      const profile = await UserModel.find(); 
  
      if (!profile) {
        return next(new ErrorHandler('User not found', 404));
      }
      
      res.status(200).json({
        success: true,
        profile,
      });
    } catch (error) {
      return next(new ErrorHandler('Internal server error', 500));
    }
  });
  
module.exports = router;
