const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwtSecret, jwtExpire } = require("../config/key");

exports.SignupController = async (req, res) => {
  const { username, email, password1 } = req.body;
  try {
    const userCheck = await User.findOne({ email });
    if (userCheck) {
      res.status(400).json({
        message: "User alerady exists",
      });
      return;
    }
    const newUser = new User();
    newUser.username = username;
    newUser.email = email;
    newUser.password1 = password1;

    const salt = await bcrypt.genSalt(10);
    newUser.password1 = await bcrypt.hash(password1, salt);

    await newUser.save();
    return res.status(200).json({
      successmsg: "User Signed up successfully",
    });
  } catch (err) {
    res.status(500).json({
      error: "Server error try again!!",
    });
  }
};
exports.SigninController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({
        error: "Invalid credentials",
      });
      return;
    } else {
      const isMatch = bcrypt.compare(password, user.password1);
      const payload = {
        user: {
          _id: user._id,
        },
      };
      if (isMatch) {
        jwt.sign(payload, jwtSecret, { expiresIn: jwtExpire }, (err, token) => {
          if (err) {
            console.log("here", err);
            return;
          }
          const { _id, username, email, role } = user;
          res.status(200).json({
            token,
            user: { _id, username, email, role },
          });
        });
      }
    }
  } catch (err) {
    console.log("Signin server side ");
    res.status(500).json({
      error: "Server error try again!!",
    });
  }
};
